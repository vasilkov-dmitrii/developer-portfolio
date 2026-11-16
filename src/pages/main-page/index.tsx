import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Nav } from '../../components/nav'
import type { SectionState } from '../../components/scroll-to-top'
import { scrollToSection } from '../../utils/scroll'
import { Hero } from './hero'
import { Works } from './works'
import { Experience } from './experience'
import { Skills } from './skills'
import { Testimonials } from './testimonials'
import { Contact } from './contact'

export const MainPage = () => {
    const section = (useLocation().state as SectionState)?.section

    useEffect(() => {
        if (!section) return
        const frame = window.requestAnimationFrame(() =>
            scrollToSection(section, true)
        )
        return () => window.cancelAnimationFrame(frame)
    }, [section])

    return (
        <>
            <Nav />
            <main id="content" tabIndex={-1}>
                <Hero />
                <Works />
                <Experience />
                <Skills />
                <Testimonials />
                <Contact />
            </main>
        </>
    )
}
