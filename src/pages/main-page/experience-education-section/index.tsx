import React from 'react'
import './experience-education-section.scss'

import { IWithRefChildren } from '../index'
import { ExpListItem } from './exp-list-item.tsx'

export type ExperienceConfigType = {
    companyName: string
    workPeriod: string
    workPosition: string
    workDescription: string
    highlights?: string[]
}

const experienceConfig: ExperienceConfigType[] = [
    {
        companyName: 'Access Softek',
        workPeriod: 'Aug 2022 – Present · 3 yr 10 mo',
        workPosition: 'Senior Frontend Developer',
        workDescription:
            'Built AI-powered chat interfaces with React and Vercel AI SDK, deployed to AWS via CI/CD. Integrated third-party services, refactored legacy code, and drove quality improvements across the frontend.',
        highlights: [
            'AI chat UI with Vercel AI SDK',
            'E2E tests with Playwright (−30% QA time)',
            '80% unit test coverage',
            'AWS deploy: S3 + CloudFront + Route53',
            'ProPay integration',
        ],
    },
    {
        companyName: 'DomClick / Sber',
        workPeriod: 'Nov 2021 – Jul 2022 · 9 mo',
        workPosition: 'Senior Frontend Developer',
        workDescription:
            'Developed a B2B partner platform and integrated CRM using React and TypeScript. Built embeddable widgets for third-party integration and delivered microservice-based property selection frontend.',
        highlights: [
            'B2B partner platform',
            'Embeddable cross-service widget',
            'Microservice frontend architecture',
            'CI/CD setup for QA & production',
        ],
    },
    {
        companyName: 'MTS Group',
        workPeriod: 'Feb 2020 – Nov 2021 · 1 yr 10 mo',
        workPosition: 'Frontend Developer',
        workDescription:
            'Built and launched the MVP of the Sounds platform from scratch using Next.js and TypeScript as lead frontend developer. Developed MTS Client World SPA for internal marketing campaigns.',
        highlights: [
            'Sounds platform MVP (Next.js)',
            'MTS Client World SPA',
            'Reusable UI component library',
        ],
    },
    {
        companyName: 'Kraftway Corp.',
        workPeriod: 'Apr 2019 – Feb 2020',
        workPosition: 'Frontend Developer',
        workDescription:
            'Developed Angular 6 enterprise application modules for infrastructure monitoring and system management.',
        highlights: [
            'Built real-time monitoring SPA',
            'Implemented WebSocket data feeds',
        ],
    },
    {
        companyName: 'Insat LLC',
        workPeriod: 'Aug 2018 – Apr 2019',
        workPosition: 'Frontend Developer',
        workDescription:
            'Delivered pixel-perfect interfaces for industrial automation products and built Angular 7 CRM frontend.',
        highlights: ['Built MasterCase CRM UI', 'MasterSCADA 4 interface'],
    },
    {
        companyName: 'Earlier Roles',
        workPeriod: '2018',
        workPosition: 'Markup / Frontend Developer',
        workDescription:
            'SoftlogicRus and freelance — responsive layouts, JavaScript interactions, end-to-end website delivery for small businesses.',
    },
    {
        companyName: 'Education',
        workPeriod: '2009 – 2018',
        workPosition: "Master's & Bachelor's Degrees",
        workDescription:
            "Master's in Firm Economics (IGKhTU, 2015–2018). Bachelor's in Textile Technology (IvGPU, 2009–2014).",
    },
]

export const ExperienceEducationSection: React.FC<IWithRefChildren> = ({
    refElement,
}) => {
    return (
        <section className="experience" ref={refElement}>
            <h2>Experience</h2>
            <p className="experience_subtitle">
                Where I've worked and what I've built
            </p>
            <div className="experience_list">
                {experienceConfig.map((el) => (
                    <ExpListItem {...el} key={`${el.companyName}-${el.workPeriod}`} />
                ))}
            </div>
        </section>
    )
}
