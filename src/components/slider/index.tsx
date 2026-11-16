import React, { useRef, useState } from 'react'
import './slider.scss'

const wrap = (index: number, total: number) => ((index % total) + total) % total

const Arrow = ({ flip }: { flip?: boolean }) => (
    <svg
        width="14"
        height="24"
        viewBox="0 0 22 40"
        aria-hidden="true"
        style={flip ? { transform: 'scaleX(-1)' } : undefined}
    >
        <path
            fill="currentColor"
            d="M21.19 1.56a2.75 2.75 0 0 0-3.88 0L.81 18.06a2.75 2.75 0 0 0 0 3.88l16.5 16.5a2.75 2.75 0 0 0 3.88-3.88L6.64 20 21.19 5.44a2.75 2.75 0 0 0 0-3.88Z"
        />
    </svg>
)

export const Slider: React.FC<ISlider> = ({ slides, title }) => {
    const touchStartX = useRef<number | null>(null)
    const [step, setStep] = useState(0)
    const total = slides.length

    if (!total) return null

    const move = (delta: number) =>
        setStep((prev) => wrap(prev + delta, total))

    const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowLeft') move(-1)
        if (event.key === 'ArrowRight') move(1)
    }

    const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
        if (touchStartX.current === null) return
        const delta = touchStartX.current - event.changedTouches[0].clientX
        touchStartX.current = null
        if (Math.abs(delta) > 40) move(delta > 0 ? 1 : -1)
    }

    return (
        <div
            className="slider"
            role="group"
            aria-roledescription="carousel"
            aria-label={`${title} screenshots`}
            onKeyDown={onKeyDown}
        >
            <div
                className="slider_frame"
                onTouchStart={(event) => {
                    touchStartX.current = event.touches[0].clientX
                }}
                onTouchEnd={onTouchEnd}
            >
                <div
                    className="slider_track"
                    style={{ transform: `translateX(${-step * 100}%)` }}
                >
                    {slides.map((src, idx) => (
                        <img
                            key={src}
                            className="slider_slide"
                            src={src}
                            alt={`${title}, screenshot ${idx + 1} of ${total}`}
                            loading={idx === 0 ? 'eager' : 'lazy'}
                            decoding="async"
                            aria-hidden={idx !== step}
                        />
                    ))}
                </div>
                {total > 1 && (
                    <>
                        <button
                            type="button"
                            className="slider_arrow slider_arrow_prev"
                            onClick={() => move(-1)}
                            aria-label="Previous screenshot"
                        >
                            <Arrow />
                        </button>
                        <button
                            type="button"
                            className="slider_arrow slider_arrow_next"
                            onClick={() => move(1)}
                            aria-label="Next screenshot"
                        >
                            <Arrow flip />
                        </button>
                    </>
                )}
            </div>

            {total > 1 && (
                <div className="slider_dots">
                    {slides.map((src, idx) => (
                        <button
                            key={src}
                            type="button"
                            className={idx === step ? 'active' : undefined}
                            onClick={() => setStep(idx)}
                            aria-label={`Screenshot ${idx + 1} of ${total}`}
                            aria-current={idx === step}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

interface ISlider {
    slides: string[]
    title: string
}
