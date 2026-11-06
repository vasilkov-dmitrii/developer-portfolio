import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './terminal.scss'
import {
    completeCommand,
    execute,
    suggestionCommands,
    type CommandResult,
} from './commands'

type Line = {
    id: string
    kind: 'cmd' | 'out' | 'note'
    text?: string
    node?: React.ReactNode
}

const BOOT = ['whoami', 'ls']

const sleep = (ms: number) =>
    new Promise<void>((resolve) => {
        window.setTimeout(resolve, ms)
    })

const Prompt = ({ children }: { children?: React.ReactNode }) => (
    <div className="term_prompt">
        <span className="term_user">visitor</span>
        <span className="term_at">@</span>
        <span className="term_host">portfolio</span>
        <span className="term_colon">:</span>
        <span className="term_path">~</span>
        <span className="term_dollar">$</span>
        {children}
    </div>
)

export const Terminal = () => {
    const navigate = useNavigate()
    const navigateRef = useRef(navigate)
    navigateRef.current = navigate

    const [lines, setLines] = useState<Line[]>([
        {
            id: 'intro',
            kind: 'note',
            text: 'portfolio.sh — interactive session. type help, or wait for the intro.',
        },
    ])
    const [value, setValue] = useState('')
    const [interactive, setInteractive] = useState(false)
    const [focused, setFocused] = useState(false)
    const [clock, setClock] = useState(() => formatClock(new Date()))

    const screenRef = useRef<HTMLDivElement | null>(null)
    const inputRef = useRef<HTMLInputElement | null>(null)
    const interactiveRef = useRef(false)
    const scrollMode = useRef<'end' | 'projects' | null>(null)
    interactiveRef.current = interactive
    const seq = useRef(1)
    const gen = useRef(0)
    const history = useRef<string[]>([])
    const histIndex = useRef(-1)
    const submitRef = useRef<(command: string) => void>(() => {})
    const navTimer = useRef<number | null>(null)

    const nid = () => {
        seq.current += 1
        return `l${seq.current}`
    }

    const submit = (raw: string) => {
        const command = raw.trim()
        if (interactiveRef.current) {
            const name = command.split(/\s+/)[0]?.toLowerCase()
            scrollMode.current =
                name === 'projects' || name === 'ls' ? 'projects' : 'end'
        }
        let result: CommandResult | null = null

        if (command) {
            result = execute(command, (next) => submitRef.current(next))
            const last = history.current[history.current.length - 1]
            if (last !== command) history.current.push(command)
        }
        histIndex.current = -1

        if (result?.clear || command === 'clear') {
            setLines([])
            return
        }

        setLines((prev) => [
            ...prev,
            { id: nid(), kind: 'cmd', text: raw },
            ...(result?.output
                ? [{ id: nid(), kind: 'out' as const, node: result.output }]
                : []),
        ])

        if (result?.openUrl) window.open(result.openUrl, '_blank', 'noopener')
        if (result?.navigateTo) {
            const target = result.navigateTo
            if (navTimer.current) window.clearTimeout(navTimer.current)
            navTimer.current = window.setTimeout(() => {
                navigateRef.current(target)
            }, 420)
        }
    }
    submitRef.current = submit

    useEffect(() => {
        const token = gen.current + 1
        gen.current = token
        let stopped = false

        const alive = () => !stopped && gen.current === token

        const boot = async () => {
            const reduce = window.matchMedia(
                '(prefers-reduced-motion: reduce)'
            ).matches
            if (reduce) {
                if (!alive()) return
                BOOT.forEach((command) => submitRef.current(command))
                setValue('')
                setInteractive(true)
                if (screenRef.current) screenRef.current.scrollTop = 0
                return
            }

            for (const command of BOOT) {
                for (let i = 1; i <= command.length; i += 1) {
                    if (!alive()) return
                    setValue(command.slice(0, i))
                    await sleep(38 + Math.random() * 45)
                }
                if (!alive()) return
                await sleep(240)
                if (!alive()) return
                submitRef.current(command)
                setValue('')
                await sleep(360)
            }
            if (!alive()) return
            setInteractive(true)
            if (screenRef.current) screenRef.current.scrollTop = 0
        }

        void boot()
        return () => {
            stopped = true
            gen.current += 1
        }
    }, [])

    useEffect(() => {
        const timer = window.setInterval(() => {
            setClock(formatClock(new Date()))
        }, 1000)
        return () => window.clearInterval(timer)
    }, [])

    useEffect(() => {
        const mode = scrollMode.current
        if (!mode) return
        scrollMode.current = null
        const screen = screenRef.current
        if (!screen) return
        window.requestAnimationFrame(() => {
            if (mode === 'projects') {
                const blocks = screen.querySelectorAll('[data-projects]')
                const block = blocks[blocks.length - 1] as HTMLElement | undefined
                if (!block) return
                const top =
                    screen.scrollTop +
                    block.getBoundingClientRect().top -
                    screen.getBoundingClientRect().top
                screen.scrollTo({ top, behavior: 'smooth' })
                return
            }
            screen.scrollTop = screen.scrollHeight
        })
    }, [lines])

    const takeOver = (next: string) => {
        gen.current += 1
        setInteractive(true)
        setValue(next)
    }

    const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Tab') {
            event.preventDefault()
            const next = completeCommand(value)
            if (!interactive) takeOver(next)
            else setValue(next)
            return
        }

        if (event.key === 'Enter') {
            event.preventDefault()
            const command = value
            if (!interactive) gen.current += 1
            setInteractive(true)
            submit(command)
            setValue('')
            return
        }

        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            event.preventDefault()
            if (!interactive) {
                gen.current += 1
                setInteractive(true)
            }
            const list = history.current
            if (!list.length) return
            if (event.key === 'ArrowUp') {
                histIndex.current =
                    histIndex.current < 0
                        ? list.length - 1
                        : Math.max(0, histIndex.current - 1)
            } else if (histIndex.current < 0) {
                return
            } else {
                histIndex.current += 1
            }
            if (histIndex.current >= list.length) {
                histIndex.current = -1
                setValue('')
            } else {
                setValue(list[histIndex.current])
            }
            return
        }

        if (!interactive && event.key === 'Escape') {
            gen.current += 1
            setInteractive(true)
            setValue('')
        }
    }

    return (
        <section className="term">
            <div className="term_window">
                <header className="term_chrome">
                    <span className="term_dots" aria-hidden="true">
                        <i />
                        <i />
                        <i />
                    </span>
                    <span className="term_title">dmitrii — zsh — ~/portfolio</span>
                    <span className="term_live">
                        <i />
                        {clock}
                    </span>
                </header>

                <div className="term_screen" ref={screenRef} aria-live="polite">
                    {lines.map((line) => {
                        if (line.kind === 'note') {
                            return (
                                <p key={line.id} className="term_note">
                                    # {line.text}
                                </p>
                            )
                        }
                        if (line.kind === 'cmd') {
                            return (
                                <React.Fragment key={line.id}>
                                    <div className="term_divider" />
                                    <Prompt>
                                        <span className="term_typed">{line.text}</span>
                                    </Prompt>
                                </React.Fragment>
                            )
                        }
                        return (
                            <div key={line.id} className="term_out">
                                {line.node}
                            </div>
                        )
                    })}

                    <form
                        className="term_entry"
                        onSubmit={(event) => {
                            event.preventDefault()
                            if (!interactive) gen.current += 1
                            setInteractive(true)
                            submit(value)
                            setValue('')
                        }}
                    >
                        <Prompt>
                            {!focused && !value && (
                                <span className="term_caret" aria-hidden="true" />
                            )}
                            <input
                                ref={inputRef}
                                value={value}
                                onChange={(event) => {
                                    const next = event.target.value
                                    if (!interactive) takeOver(next)
                                    else setValue(next)
                                }}
                                onFocus={() => setFocused(true)}
                                onBlur={() => setFocused(false)}
                                onKeyDown={onKeyDown}
                                aria-label="Terminal command"
                                autoCapitalize="off"
                                autoCorrect="off"
                                spellCheck={false}
                                placeholder={
                                    interactive ? 'type a command — help' : ''
                                }
                            />
                        </Prompt>
                    </form>
                </div>

                {interactive && !value && (
                    <div className="term_suggestions">
                        {suggestionCommands.map((command) => (
                            <button
                                key={command}
                                type="button"
                                className={
                                    command === 'help' ||
                                    command === 'experience' ||
                                    command === 'skills'
                                        ? 'term_suggest_keep'
                                        : undefined
                                }
                                onClick={() => {
                                    submit(command)
                                    setValue('')
                                }}
                            >
                                {command}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

function formatClock(date: Date) {
    return date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    })
}
