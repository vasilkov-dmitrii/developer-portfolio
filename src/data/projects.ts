import { Routes } from '../routes'
import goodokLabel from '../img/goodok.webp'
import cwmtsLabel from '../img/cw_title.webp'
import gsmLabel from '../img/gsm.webp'
import msc from '../img/mastercase.webp'
import masterscada from '../img/masterscada.webp'
import kngdy from '../img/kingdy.webp'
import mpoc from '../img/masteropc.webp'
import header from '../img/header.webp'
import investing from '../img/investing.webp'
import softek from '../img/softek.webp'
import aiChatCover from '../img/ai-chat-cover.svg'
import dcCms from '../img/dc_cms.webp'
import dcPartners from '../img/dc_partners.webp'
import spendlyCover from '../img/spendly-01-home.webp'
import eventRutaCover from '../img/event-ruta-01-events.webp'

export type WorkItem = {
    name: string
    slug: string
    description: string
    outcome?: string
    role: string
    stack: string[]
    linkTo?: string
    externalReference?: string
    labelImg: string
    featured?: boolean
}

export const worksConfig: WorkItem[] = [
    {
        name: 'EventRuta',
        slug: 'event-ruta',
        description:
            'Full-stack AI guide to local events. Search any city, then browse concerts and festivals on a calendar, map, and detail pages.',
        outcome: 'Built end to end and live as an installable PWA.',
        role: 'Full Stack Engineer',
        stack: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL'],
        linkTo: Routes.EVENT_RUTA,
        externalReference: 'https://event-ruta.uk/',
        labelImg: eventRutaCover,
        featured: true,
    },
    {
        name: 'Spendly — AI Receipt Scanner',
        slug: 'spendly',
        description:
            'Full-stack AI expense tracker. Scan a receipt, import a bank statement, set budgets, and see spending on a live dashboard.',
        outcome: 'Designed and shipped as a full product; live on web and Android.',
        role: 'Full Stack Engineer',
        stack: ['Next.js', 'Node.js', 'Prisma', 'PostgreSQL'],
        linkTo: Routes.SPENDLY,
        externalReference: 'https://getspendly.click/',
        labelImg: spendlyCover,
        featured: true,
    },
    {
        name: 'Access Digital® Banking',
        slug: 'banking',
        description:
            'White-label digital banking platform serving 100+ credit unions across North America.',
        outcome:
            'Playwright E2E suite cut manual QA time by 30%; unit coverage raised to 80%.',
        role: 'Senior Frontend Developer',
        stack: ['React', 'TypeScript', 'GraphQL', 'Apollo'],
        linkTo: Routes.D_BANKING,
        labelImg: softek,
        featured: true,
    },
    {
        name: 'AI-Powered Chat Interface',
        slug: 'ai-chat',
        description:
            'Enterprise conversational UI with streaming responses, context memory, and multi-model support.',
        outcome:
            'Shipped as an isolated microservice embedded into the banking app.',
        role: 'Frontend Lead',
        stack: ['React', 'Vercel AI SDK', 'AWS', 'TypeScript'],
        linkTo: Routes.AI_CHAT,
        labelImg: aiChatCover,
        featured: true,
    },
    {
        name: "MTS GOOD'OK",
        slug: 'goodok',
        description:
            'MTS ringback tone service — subscribers replace the standard dial tone with a melody. Built from prototype to production.',
        outcome:
            'Next.js migration for SEO grew daily traffic from 2,800 to 4,500 visitors.',
        role: 'Senior Frontend Developer',
        stack: ['Next.js', 'React', 'TypeScript'],
        linkTo: Routes.GOODOK,
        externalReference: 'https://goodok.mts.ru/',
        labelImg: goodokLabel,
        featured: true,
    },
    {
        name: 'Client’s World Game MVP',
        slug: 'clients-world',
        description:
            'Browser game that introduces users to MTS Group products — daily quests, an in-game store with promo codes, and a virtual assistant chat.',
        outcome: 'MVP delivered in six months, with 100+ tracked in-game events.',
        role: 'Frontend Developer',
        stack: ['React', 'Effector', 'WebSockets'],
        linkTo: Routes.CLIENT_WORLD,
        labelImg: cwmtsLabel,
        featured: true,
    },
    {
        name: 'Global System Monitoring',
        slug: 'gsm',
        description:
            'Real-time infrastructure monitoring SPA with live data visualization and alert management.',
        role: 'Frontend Developer',
        stack: ['Angular 6', 'RxJS', 'WebSockets'],
        linkTo: Routes.GSM,
        labelImg: gsmLabel,
    },
    {
        name: 'MasterCase CRM Modules',
        slug: 'mastercase',
        description:
            'Mail and authentication modules for enterprise CRM — role-based access, templating, notifications.',
        role: 'Frontend Developer',
        stack: ['Angular 7', 'TypeScript', 'SCSS'],
        linkTo: Routes.CRM_SYSTEM,
        labelImg: msc,
    },
    {
        name: 'Investment Evaluator',
        slug: 'investing',
        description:
            'Prototype tool for evaluating company investment attractiveness using financial data APIs.',
        role: 'Solo Developer',
        stack: ['Next.js', 'Chart.js', 'REST API'],
        externalReference:
            'https://investing-next-js.vercel.app/company-profile/AAPL',
        labelImg: investing,
    },
    {
        name: 'DomClick Partner Portal',
        slug: 'domclick',
        description:
            "Partner-facing portal for Russia's largest real estate platform — onboarding, docs, analytics.",
        role: 'Senior Frontend Developer',
        stack: ['React', 'TypeScript', 'GraphQL'],
        labelImg: dcPartners,
    },
    {
        name: 'COMPAS 2.0 CRM',
        slug: 'compas',
        description:
            'Internal CRM for DomClick sales team — lead management, pipeline tracking, reporting.',
        role: 'Senior Frontend Developer',
        stack: ['React', 'TypeScript', 'GraphQL'],
        labelImg: dcCms,
    },
    {
        name: 'MasterSCADA Product Site',
        slug: 'masterscada',
        description: 'Flagship product website for industrial automation software company.',
        role: 'Frontend Developer',
        stack: ['HTML5', 'CSS3', 'JavaScript'],
        labelImg: masterscada,
    },
    {
        name: 'Kingdy Partner Site',
        slug: 'kingdy',
        description: 'Corporate partner portal for industrial panel PC manufacturer.',
        role: 'Markup Developer',
        stack: ['HTML5', 'SCSS', 'jQuery'],
        labelImg: kngdy,
    },
    {
        name: 'MasterOPC Presentation',
        slug: 'masteropc',
        description: 'Product presentation site for OPC server software suite.',
        role: 'Markup Developer',
        stack: ['HTML5', 'CSS3', 'JavaScript'],
        labelImg: mpoc,
    },
    {
        name: 'Engineering Systems Site',
        slug: 'engineer',
        description: 'Corporate website for engineering systems installation company.',
        role: 'Freelance Developer',
        stack: ['HTML5', 'CSS3', 'PHP'],
        labelImg: header,
        externalReference: 'http://engineer37.ru/',
    },
]

export const featuredWorks = worksConfig.filter((item) => item.featured)
export const earlierWorks = worksConfig.filter((item) => !item.featured)
