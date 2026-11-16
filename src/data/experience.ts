export type ExperienceItem = {
    company: string
    period: string
    shortPeriod: string
    position: string
    summary: string
    achievements: string[]
}

export const experience: ExperienceItem[] = [
    {
        company: 'Access Softek',
        period: 'Aug 2022 – Present',
        shortPeriod: '2022 — now',
        position: 'Senior Frontend Developer',
        summary:
            'White-label digital banking platform serving 100+ credit unions across North America.',
        achievements: [
            'Built a Playwright end-to-end suite that cut manual QA time by 30%.',
            'Raised unit test coverage to 80%.',
            'Shipped an AI chat advisor with React and the Vercel AI SDK, deployed to AWS (S3, CloudFront, Route53) through CI/CD.',
            'Integrated the third-party ProPay service and refactored legacy code.',
        ],
    },
    {
        company: 'DomClick / Sber',
        period: 'Nov 2021 – Jul 2022',
        shortPeriod: '2021 — 2022',
        position: 'Senior Frontend Developer',
        summary:
            'B2B partner platform and integrated CRM for a real estate service, built with React and TypeScript.',
        achievements: [
            'Built an embeddable widget used by third-party services.',
            'Delivered the frontend for a microservice-based property selection product.',
            'Set up CI/CD for QA and production.',
        ],
    },
    {
        company: 'MTS Group',
        period: 'Feb 2020 – Nov 2021',
        shortPeriod: '2020 — 2021',
        position: 'Frontend Developer',
        summary:
            'Consumer telecom products: the Sounds platform, GOOD’OK and the Client World game.',
        achievements: [
            'Built and launched the Sounds platform MVP from scratch as lead frontend developer (Next.js, TypeScript).',
            'Migrated GOOD’OK to Next.js for SEO; daily traffic grew from 2,800 to 4,500 visitors.',
            'Built the MTS Client World SPA and a reusable UI component library.',
        ],
    },
    {
        company: 'Kraftway Corp.',
        period: 'Apr 2019 – Feb 2020',
        shortPeriod: '2019 — 2020',
        position: 'Frontend Developer',
        summary:
            'Angular 6 enterprise modules for infrastructure monitoring and system management.',
        achievements: [
            'Built a real-time monitoring SPA.',
            'Implemented WebSocket data feeds.',
        ],
    },
    {
        company: 'Insat LLC',
        period: 'Aug 2018 – Apr 2019',
        shortPeriod: '2018 — 2019',
        position: 'Frontend Developer',
        summary:
            'Interfaces for industrial automation products and an Angular 7 CRM frontend.',
        achievements: [
            'Built the MasterCase CRM UI.',
            'Built the MasterSCADA 4 interface.',
        ],
    },
]

export const background = [
    {
        title: 'Earlier roles · 2018',
        text: 'Markup and frontend developer at SoftlogicRus and freelance: responsive layouts, JavaScript interactions and website delivery for small businesses.',
    },
    {
        title: 'Education',
        text: 'Master’s in Firm Economics (IGKhTU, 2015–2018). Bachelor’s in Textile Technology (IvGPU, 2009–2014).',
    },
]
