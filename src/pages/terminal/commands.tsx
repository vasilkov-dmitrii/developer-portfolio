import React, { type ReactNode } from 'react'
import cv from '../../assets/cv.pdf'
import {
    projectAliases,
    worksConfig,
    type WorkItem,
} from '../../data/projects'

export const COMMANDS = [
    'help',
    'whoami',
    'about',
    'skills',
    'experience',
    'projects',
    'ls',
    'open',
    'contact',
    'cv',
    'testimonials',
    'clear',
    'date',
] as const

export const suggestionCommands = COMMANDS.map((command) =>
    command === 'open' ? 'open event-ruta' : command
)

const experience = [
    ['Access Softek', '2022 — now', 'Senior Frontend Developer'],
    ['DomClick / Sber', '2021 — 2022', 'Senior Frontend Developer'],
    ['MTS Group', '2020 — 2021', 'Frontend Developer'],
    ['Kraftway Corp.', '2019 — 2020', 'Frontend Developer'],
    ['Insat LLC', '2018 — 2019', 'Frontend Developer'],
] as const

const careerStartYear = 2018

const yearsOfExperience = () => new Date().getFullYear() - careerStartYear

const skills = [
    ['frontend', 'React, Next.js, TypeScript, Redux Toolkit, Angular, RxJS, HTML5, CSS3'],
    ['styling', 'SCSS / Sass, PostCSS, CSS-in-JS, Tailwind CSS, Responsive Design, Design Systems, Figma → Code'],
    ['data', 'GraphQL (Apollo), REST APIs, WebSockets, Prisma, Node.js, PostgreSQL'],
    ['testing', 'Jest, React Testing Library, Playwright, Cypress, Code Review, CI/CD Pipelines, Linting / Prettier'],
    ['ai', 'Cursor IDE, GitHub Copilot, ChatGPT, Vercel AI SDK, AI-assisted Code Review, Prompt Engineering'],
    ['devops', 'Git / GitHub, Vite, Webpack, Docker, Vercel, AWS (S3, Lambda), GitHub Actions'],
    ['soft', 'Technical Communication, Cross-team Collaboration, Mentoring, Product Thinking, Agile / Scrum'],
] as const

const quotes = [
    [
        'Michael Ternovoi',
        'COO · Head of PMO · MTS',
        'Dmitry demonstrated his responsibility and discipline during our joint work on projects at MTS. Possess the technical expertise necessary to implement the assigned tasks and maintain active communication within the team. The deadlines for completing tasks were not the subject of any complaints. He is not afraid to take responsibility.',
    ],
    [
        'Serhii Berezin',
        'Frontend Developer · AccessSoftek',
        'Dmitry is an exceptional professional who demonstrates a high level of responsibility, responsiveness, and openness to new ideas. He is always ready to help and eager to learn new things, making him an invaluable asset to any team. His proactive approach and collaborative spirit make him an active team player who is a pleasure to work with.',
    ],
    [
        'Mikhail Manukhin',
        'Senior .NET Developer · AccessSoftek',
        'When Dmitry joined our team as a professional frontend developer he immediately took on all frontend related tasks. He is a responsible, communicative person. I would work with Dmitry again and can recommend him as a Senior React Developer.',
    ],
] as const

export type CommandResult = {
    output?: ReactNode
    clear?: boolean
    navigateTo?: string
    openUrl?: string
}

type Run = (command: string) => void

const normalize = (value: string) =>
    value.trim().toLowerCase().replace(/\s+/g, ' ')

export const findProject = (query: string): WorkItem | WorkItem[] | undefined => {
    const q = normalize(query)
    if (!q) return undefined

    const aliased = projectAliases[q]
    if (aliased) return worksConfig.find((item) => item.slug === aliased)

    const exact = worksConfig.find(
        (item) => item.slug === q || item.name.toLowerCase() === q
    )
    if (exact) return exact

    const partial = worksConfig.filter(
        (item) =>
            item.slug.includes(q) || item.name.toLowerCase().includes(q)
    )
    if (partial.length === 1) return partial[0]
    if (partial.length > 1) return partial
    return undefined
}

export const completeCommand = (input: string) => {
    const raw = input.trimStart()
    if (!raw) return 'help'

    const [head, ...rest] = raw.split(/\s+/)
    const command = head.toLowerCase()

    if (command === 'open' || command === 'cd' || command === 'cat') {
        const query = rest.join(' ').toLowerCase()
        const slugs = worksConfig.map((item) => item.slug)
        const matches = slugs.filter((slug) => slug.startsWith(query))
        if (matches.length === 1) return `${command} ${matches[0]}`
        return input
    }

    const matches = COMMANDS.filter((name) => name.startsWith(command))
    if (matches.length === 1 && rest.length === 0) return matches[0]
    return input
}

const ProjectList = ({ onRun }: { onRun: Run }) => (
    <div className="term_ls">
        <p className="term_hint">
            newest first · click a row or run <code>open event-ruta</code>
        </p>
        {worksConfig.map((project) => (
            <button
                key={project.slug}
                type="button"
                className="term_project"
                onClick={() => onRun(`open ${project.slug}`)}
            >
                <img src={project.labelImg} alt="" />
                <span className="term_slug">{project.slug}</span>
                <span className="term_desc">{project.description}</span>
                <span className="term_stack">
                    {project.stack.map((tech) => (
                        <span key={tech} className="term_badge">
                            {tech}
                        </span>
                    ))}
                </span>
                {project.featured && <span className="term_tag">featured</span>}
            </button>
        ))}
    </div>
)

const ProjectSummary = ({ project }: { project: WorkItem }) => (
    <div className="term_summary">
        <p className="term_summary_name">{project.name}</p>
        <p>{project.description}</p>
        <p className="term_meta">
            {project.role} · {project.stack.join(' · ')}
        </p>
        {project.externalReference && (
            <a href={project.externalReference} target="_blank" rel="noreferrer">
                {project.externalReference}
            </a>
        )}
        {!project.linkTo && !project.externalReference && (
            <p className="term_meta">case study is not published for this one</p>
        )}
    </div>
)

const helpCommands: Array<[command: string, hint: string]> = [
    ['whoami', 'short intro'],
    ['about', 'a bit more'],
    ['ls', 'projects, newest first'],
    ['open event-ruta', 'open a case study'],
    ['experience', "where I've worked"],
    ['skills', 'stack'],
    ['testimonials', 'notes from teammates'],
    ['contact', 'email, LinkedIn, CV'],
    ['cv', 'download resume'],
    ['clear', 'clear the screen'],
]

const Help = ({ onRun }: { onRun: Run }) => (
    <div className="term_help">
        <p>commands — click one to run it</p>
        <ul>
            {helpCommands.map(([command, hint]) => (
                <li key={command}>
                    <button type="button" onClick={() => onRun(command)}>
                        {command}
                    </button>
                    <span>{hint}</span>
                </li>
            ))}
        </ul>
        <p className="term_hint">tab completes · ↑ recalls history</p>
    </div>
)

export const execute = (raw: string, onRun: Run): CommandResult => {
    const line = raw.trim()
    if (!line) return {}

    const [head, ...args] = line.split(/\s+/)
    const command = head.toLowerCase()
    const arg = args.join(' ')

    if (command === 'cd') return execute(arg ? `open ${arg}` : 'open', onRun)
    if (command === 'cat') {
        const file = arg.replace(/\.(txt|md)$/i, '')
        if (!file) {
            return { output: <p>usage: cat &lt;about|skills|experience&gt;</p> }
        }
        return execute(file, onRun)
    }
    if (command === 'projects') return execute('ls', onRun)

    switch (command) {
        case 'help':
            return { output: <Help onRun={onRun} /> }
        case 'clear':
            return { clear: true }
        case 'date':
            return { output: <p>{new Date().toString()}</p> }
        case 'whoami':
            return {
                output: (
                    <div className="term_who">
                        <p className="term_who_name">Dmitrii Vasilkov</p>
                        <p className="term_who_role">Senior Frontend Engineer</p>
                        <dl>
                            <div>
                                <dt>location</dt>
                                <dd>Spain · open to remote</dd>
                            </div>
                            <div>
                                <dt>experience</dt>
                                <dd>{yearsOfExperience()} years</dd>
                            </div>
                            <div>
                                <dt>stack</dt>
                                <dd>
                                    TypeScript, React, Next.js, Angular, RxJS,
                                    GraphQL, Node.js
                                </dd>
                            </div>
                            <div>
                                <dt>now</dt>
                                <dd>Senior Frontend Developer · Access Softek</dd>
                            </div>
                            <div>
                                <dt>status</dt>
                                <dd>open to senior roles</dd>
                            </div>
                        </dl>
                    </div>
                ),
            }
        case 'about':
            return {
                output: (
                    <div className="term_prose">
                        <p>
                            I&apos;m a senior frontend engineer who specializes in
                            building web applications that people actually enjoy
                            using — fast, accessible, and thoughtfully designed.
                        </p>
                        <p>
                            Over {yearsOfExperience()} years I&apos;ve worked on
                            banking platforms, telecom products, CRM systems, and
                            AI-powered interfaces. I care about architecture as
                            much as pixel-perfect UI, and I treat every component
                            as a contract between the product and its users.
                        </p>
                        <p>
                            My daily stack is TypeScript, React, Next.js, and
                            GraphQL. I write tests before I write excuses, and I
                            actively use AI tooling — Cursor, GitHub Copilot, and
                            ChatGPT — to move faster without cutting corners.
                        </p>
                        <p>
                            What sets me apart: I think in systems, communicate
                            clearly with designers and PMs, and ship production
                            code that doesn&apos;t come back as a bug ticket.
                        </p>
                    </div>
                ),
            }
        case 'skills':
            return {
                output: (
                    <dl className="term_kv">
                        {skills.map(([key, value]) => (
                            <div key={key}>
                                <dt>{key}</dt>
                                <dd>{value}</dd>
                            </div>
                        ))}
                    </dl>
                ),
            }
        case 'experience':
            return {
                output: (
                    <ul className="term_exp">
                        {experience.map(([company, period, role]) => (
                            <li key={company}>
                                <span>{period}</span>
                                <strong>{company}</strong>
                                <em>{role}</em>
                            </li>
                        ))}
                    </ul>
                ),
            }
        case 'testimonials':
            return {
                output: (
                    <ul className="term_quotes">
                        {quotes.map(([name, role, quote]) => (
                            <li key={name}>
                                <p>“{quote}”</p>
                                <span>
                                    {name} · {role}
                                </span>
                            </li>
                        ))}
                    </ul>
                ),
            }
        case 'contact':
            return {
                output: (
                    <div className="term_links">
                        <a href="mailto:vasilkov.dmitrii24@gmail.com">
                            vasilkov.dmitrii24@gmail.com
                        </a>
                        <a
                            href="https://www.linkedin.com/in/dmitrii-vasilkov-a12b98172/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            linkedin.com/in/dmitrii-vasilkov
                        </a>
                        <a href={cv} download>
                            cv.pdf
                        </a>
                        <p className="term_meta">Spain · remote worldwide</p>
                    </div>
                ),
            }
        case 'cv':
            return {
                output: <p>opening cv.pdf</p>,
                openUrl: cv,
            }
        case 'ls':
            return { output: <ProjectList onRun={onRun} /> }
        case 'open': {
            if (!arg) {
                return {
                    output: (
                        <p>
                            usage: open &lt;project&gt; — try{' '}
                            <button type="button" onClick={() => onRun('ls')}>
                                ls
                            </button>
                        </p>
                    ),
                }
            }
            const match = findProject(arg)
            if (!match) {
                return {
                    output: (
                        <p>
                            no project named <code>{arg}</code>. run{' '}
                            <button type="button" onClick={() => onRun('ls')}>
                                ls
                            </button>
                        </p>
                    ),
                }
            }
            if (Array.isArray(match)) {
                return {
                    output: (
                        <p>
                            which one?{' '}
                            {match.map((item) => (
                                <button
                                    key={item.slug}
                                    type="button"
                                    onClick={() => onRun(`open ${item.slug}`)}
                                >
                                    {item.slug}
                                </button>
                            ))}
                        </p>
                    ),
                }
            }
            if (match.linkTo) {
                return {
                    output: <p>opening ~/projects/{match.slug} …</p>,
                    navigateTo: `/${match.linkTo}`,
                }
            }
            return { output: <ProjectSummary project={match} /> }
        }
        default:
            return {
                output: (
                    <p>
                        command not found: <code>{command}</code>. type{' '}
                        <button type="button" onClick={() => onRun('help')}>
                            help
                        </button>
                    </p>
                ),
            }
    }
}
