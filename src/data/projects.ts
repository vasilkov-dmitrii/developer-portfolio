import { Routes } from '../routes'
import goodokLabel from '../img/goodok.jpg'
import cwmtsLabel from '../img/cw_title.png'
import gsmLabel from '../img/gsm.jpg'
import msc from '../img/mastercase.jpg'
import masterscada from '../img/masterscada.jpg'
import kngdy from '../img/kingdy.jpg'
import mpoc from '../img/masteropc.jpg'
import header from '../img/header.webp'
import investing from '../img/investing.png'
import softek from '../img/softek.png'
import dcCms from '../img/dc_cms.jpg'
import dcPartners from '../img/dc_partners.jpg'
import spendlyCover from '../img/spendly-01-home.png'
import eventRutaCover from '../img/event-ruta-01-events.png'

export type WorkItem = {
    name: string
    slug: string
    description: string
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
        role: 'Full Stack Engineer',
        stack: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL'],
        linkTo: Routes.EVENT_RUTA,
        labelImg: eventRutaCover,
        featured: true,
    },
    {
        name: 'Spendly — AI Receipt Scanner',
        slug: 'spendly',
        description:
            'Full-stack AI expense tracker. Scan a receipt, import a bank statement, set budgets, and see spending on a live dashboard.',
        role: 'Full Stack Engineer',
        stack: ['Next.js', 'Node.js', 'Prisma', 'PostgreSQL'],
        linkTo: Routes.SPENDLY,
        labelImg: spendlyCover,
        featured: true,
    },
    {
        name: 'AI-Powered Chat Interface',
        slug: 'ai-chat',
        description:
            'Enterprise conversational UI with streaming responses, context memory, and multi-model support.',
        role: 'Frontend Lead',
        stack: ['React', 'Vercel AI SDK', 'AWS', 'TypeScript'],
        linkTo: Routes.AI_CHAT,
        labelImg: softek,
        featured: true,
    },
    {
        name: 'Access Digital® Banking',
        slug: 'banking',
        description:
            'White-label digital banking platform serving 100+ credit unions across North America.',
        role: 'Senior Frontend Developer',
        stack: ['React', 'TypeScript', 'GraphQL', 'Apollo'],
        linkTo: Routes.D_BANKING,
        labelImg: softek,
        featured: true,
    },
    {
        name: "GOOD'OK Music Service",
        slug: 'goodok',
        description:
            'Music streaming service for MTS telecom — subscription management, playback, and content discovery.',
        role: 'Senior Frontend Developer',
        stack: ['Next.js', 'React', 'SSR'],
        linkTo: Routes.GOODOK,
        labelImg: goodokLabel,
    },
    {
        name: 'Clients World MVP',
        slug: 'clients-world',
        description:
            'Customer engagement platform with analytics dashboard and campaign management tools.',
        role: 'Frontend Developer',
        stack: ['React', 'TypeScript', 'REST API'],
        linkTo: Routes.CLIENT_WORLD,
        labelImg: cwmtsLabel,
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

export const projectAliases: Record<string, string> = {
    ruta: 'event-ruta',
    events: 'event-ruta',
    spendly: 'spendly',
    chat: 'ai-chat',
    softek: 'banking',
    'digital-banking': 'banking',
    crm: 'mastercase',
    clients: 'clients-world',
}
