import React, { useRef, useState } from 'react'
import { ExperienceConfigType } from './index.tsx'
import './experience-education-section.scss'
import { useIntersectionObserver } from '../../../hooks/use-intersection-observer'

export const ExpListItem: React.FC<ExperienceConfigType> = ({
    companyName,
    workPeriod,
    workPosition,
    workDescription,
    highlights,
}) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const [isIntersecting, setIsIntersecting] = useState(false)
    const onObserver = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
            setIsIntersecting(entry.isIntersecting)
        })
    }

    useIntersectionObserver(ref, onObserver)

    return (
        <div className="experience__row" key={companyName}>
            <div className="experience__name">
                <h2>{companyName}</h2>
                <span>{workPeriod}</span>
            </div>
            <div className="experience__runner" ref={ref}>
                <div
                    className={
                        isIntersecting
                            ? 'experience__circle circle_grow_anim'
                            : 'experience__circle'
                    }
                />
                <div
                    className={
                        isIntersecting
                            ? 'experience__line line_anim'
                            : 'experience__line'
                    }
                />
            </div>
            <div className="experience__more">
                <h3>{workPosition}</h3>
                <p>{workDescription}</p>
                {highlights && highlights.length > 0 && (
                    <div className="experience__highlights">
                        {highlights.map((h) => (
                            <span className="experience__highlight_badge" key={h}>
                                {h}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
