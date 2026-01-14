import React, { useEffect, useMemo, useRef, useState, useCallback } from 'react'
import { ResponsiveImage } from '../ResponsiveImage'

const calculateCurrentStep = (step: number, arrLength: number) => {
    const currentStep: number = step % arrLength
    if (currentStep === 0) return 0
    if (currentStep < 0) return arrLength + currentStep
    return step > 0 ? Math.abs(currentStep) : arrLength - 1 + currentStep
}

export const Slider: React.FC<ISlider> = ({ slides }) => {
    const moveSliderRef = useRef<HTMLDivElement | null>(null)
    const touchStartX = useRef<number | null>(null)
    const [step, setStep] = useState(0)

    const totalSlides = slides.length

    const clampedStep = useMemo(
        () => (totalSlides ? calculateCurrentStep(step, totalSlides) : 0),
        [step, totalSlides]
    )

    const handleClick = useCallback(
        (value: number) => {
            if (!totalSlides) return
            setStep((prev) => calculateCurrentStep(prev + value, totalSlides))
        },
        [totalSlides]
    )

    const touchStartEvent = (e: React.TouchEvent<HTMLDivElement>) => {
        touchStartX.current = e.touches[0].clientX
    }

    const touchMoveEvent = (e: React.TouchEvent<HTMLDivElement>) => {
        if (touchStartX.current === null) return
        const currentTouch = e.touches[0].clientX
        const direction = touchStartX.current - currentTouch
        handleClick(direction > 0 ? 1 : -1)
        touchStartX.current = null
    }

    useEffect(() => {
        if (!moveSliderRef.current || !totalSlides) return
        requestAnimationFrame(() => {
            if (moveSliderRef.current)
                moveSliderRef.current.style.transform = `translateX(${-clampedStep * 100}%)`
        })
    }, [clampedStep, totalSlides])

    if (!totalSlides) return null

    return (
        <>
            <div
                className="slider_block"
                onTouchStart={touchStartEvent}
                onTouchMove={touchMoveEvent}
            >
                {totalSlides > 1 && (
                    <div
                        className="slider__control_left"
                        onClick={() => handleClick(-1)}
                        role="button"
                        aria-label="Previous slide"
                    >
                        <svg
                            width="22"
                            height="40"
                            viewBox="0 0 22 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className="anim_svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M21.1945 1.55546C20.1206 0.481514 18.3794 0.481514 17.3055 1.55546L0.805457 18.0555C-0.268485 19.1294 -0.268485 20.8706 0.805457 21.9445L17.3055 38.4445C18.3794 39.5185 20.1206 39.5185 21.1945 38.4445C22.2685 37.3706 22.2685 35.6294 21.1945 34.5555L6.63909 20L21.1945 5.44454C22.2685 4.3706 22.2685 2.6294 21.1945 1.55546Z"
                                fill="white"
                                fillOpacity="0"
                            />
                        </svg>
                    </div>
                )}
                <div className="slider_wrapper" ref={moveSliderRef}>
                    {slides.map((el) => (
                        <ResponsiveImage
                            key={el}
                            alt={'slide'}
                            src={el}
                            className="slide"
                        />
                    ))}
                </div>
                {totalSlides > 1 && (
                    <div
                        className="slider__control_right"
                        onClick={() => handleClick(1)}
                        role="button"
                        aria-label="Next slide"
                    >
                        <svg
                            width="22"
                            height="40"
                            viewBox="0 0 22 40"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                className="anim_svg"
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M0.805456 1.55546C1.8794 0.481514 3.6206 0.481514 4.69454 1.55546L21.1945 18.0555C22.2685 19.1294 22.2685 20.8706 21.1945 21.9445L4.69454 38.4445C3.6206 39.5185 1.8794 39.5185 0.805456 38.4445C-0.268486 37.3706 -0.268486 35.6294 0.805456 34.5555L15.3609 20L0.805456 5.44454C-0.268486 4.3706 -0.268486 2.6294 0.805456 1.55546Z"
                                fill="white"
                                fillOpacity="0"
                            />
                        </svg>
                    </div>
                )}
            </div>

            {totalSlides > 1 && (
                <div className="slider__btn_block">
                    {slides.map((_, idx) => (
                        <div
                            key={idx}
                            className={`slider_btn ${idx === clampedStep ? 'active' : ''}`}
                            onClick={() => setStep(idx)}
                            role="button"
                            aria-label={`Go to slide ${idx + 1}`}
                        />
                    ))}
                </div>
            )}
        </>
    )
}

interface ISlider {
    slides: string[]
}
