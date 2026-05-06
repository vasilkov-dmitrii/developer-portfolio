import React, { useEffect } from 'react'
import styles from './header.module.scss'
import { IWithRefChildren } from '../index'
import cv from '../../../assets/cv.pdf'

export const Header: React.FC<IWithRefChildren> = ({ refElement }) => {
    const [scrollY, setScrollY] = React.useState(0)

    useEffect(() => {
        const handleScroll = () => {
            if (!refElement.current) return
            const { bottom } = refElement.current.getBoundingClientRect()
            if (bottom <= 0) return
            setScrollY(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [refElement])

    const parallaxStyle = {
        transform: `translateY(${scrollY * 0.15}px)`,
        opacity: Math.max(1 - scrollY / 800, 0),
    }

    return (
        <header id="start" ref={refElement} data-render={true}>
            {/* Floating code card visual */}
            <div className={styles.visual_element} aria-hidden="true">
                <div className={styles.code_card}>
                    <div className={styles.code_dots}>
                        <span /><span /><span />
                    </div>
                    <pre className={styles.code_text}>
{`const developer = {
  name: "Dmitrii Vasilkov",
  stack: ["React", "TypeScript",
          "Next.js", "Angular"],
  tools: ["Cursor", "Copilot"],
  focus: "UI that scales",
};`}
                    </pre>
                </div>
            </div>

            <div className={styles.hero_content} style={parallaxStyle}>
                <p className={styles.greeting}>Hi, I'm</p>
                <h1 className={styles.name}>Dmitrii Vasilkov</h1>
                <p className={styles.role}>Senior Frontend Engineer</p>
                <p className={styles.tagline}>
                    I turn complex product requirements into fast, accessible,
                    and visually polished web applications — from banking
                    platforms to AI-driven interfaces.
                </p>

                <div className={styles.cta_group}>
                    <a href="#works" className={styles.cta_primary}
                       onClick={(e) => {
                           e.preventDefault()
                           document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })
                       }}>
                        View Projects
                    </a>
                    <a href="#contact" className={styles.cta_secondary}
                       onClick={(e) => {
                           e.preventDefault()
                           window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
                       }}>
                        Contact Me
                    </a>
                    <a href={cv} className={styles.cta_ghost}
                       target="_blank" rel="noreferrer" download>
                        Download CV ↓
                    </a>
                </div>
            </div>

            <div className={styles.scroll_indicator} aria-hidden="true">
                <span className={styles.scroll_line} />
                <span className={styles.scroll_label}>Scroll</span>
            </div>
        </header>
    )
}
