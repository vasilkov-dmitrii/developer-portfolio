import React, { useRef } from 'react'
import styles from './main.module.scss'
import { Header } from './header'
import { AboutSection } from './about-section'
import { Separator } from './separator'
import { Works } from './works'
import { ExperienceEducationSection } from './experience-education-section'
import { Skills } from './skills'
import { ProcessSection } from './process-section'
import { TestimonialsSection } from './testimonials-section'
import { Menu } from '../../components/menu'

export const MainPage = () => {
    const menuProps = {
        aboutRef: useRef<HTMLDivElement | null>(null),
        experienceRef: useRef<HTMLDivElement | null>(null),
        headerRef: useRef<HTMLDivElement | null>(null),
        skillsRef: useRef<HTMLDivElement | null>(null),
        worksRef: useRef<HTMLDivElement | null>(null),
    }

    return (
        <div className={styles.content}>
            <Menu {...menuProps} />
            <Header refElement={menuProps.headerRef} />
            <AboutSection refElement={menuProps.aboutRef} />
            <Works refElement={menuProps.worksRef} />
            <ExperienceEducationSection refElement={menuProps.experienceRef} />
            <Skills refElement={menuProps.skillsRef} />
            <Separator text={'How I Work'} />
            <ProcessSection />
            <Separator text={'Feedback'} />
            <TestimonialsSection />
        </div>
    )
}

export interface IWithRefChildren {
    refElement: React.RefObject<HTMLDivElement | null>
}
