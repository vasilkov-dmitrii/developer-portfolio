import React from 'react'
import './works.scss'
import { Link } from 'react-router-dom'
import { IWithRefChildren } from '../index'
import { Routes } from '../../../routes'
import goodokLabel from '../../../img/goodok.jpg'
import cwmtsLabel from '../../../img/cw_title.png'
import gsmLabel from '../../../img/gsm.jpg'
import msc from '../../../img/mastercase.jpg'
import masterscada from '../../../img/masterscada.jpg'
import kngdy from '../../../img/kingdy.jpg'
import mpoc from '../../../img/masteropc.jpg'
import header from '../../../img/header.webp'
import { ResponsiveImage } from '../../../components/ResponsiveImage'
import investing from '../../../img/investing.png'
import softek from '../../../img/softek.png'
import dcCms from '../../../img/dc_cms.jpg'
import dcPartners from '../../../img/dc_partners.jpg'
import tgChatBot from '../../../img/spendly_1.webp'


type WorkItem = {
    name: string
    description: string
    role: string
    stack: string[]
    linkTo?: string
    externalReference?: string
    labelImg: string
    featured?: boolean
}

const worksConfig: WorkItem[] = [
    {
        name: 'Telegram Finance Assistant',
        description: 'Full-stack finance tracker with Telegram bot integration, budget analytics, and spending insights.',
        role: 'Lead Developer',
        stack: ['Next.js', 'Node.js', 'Prisma', 'PostgreSQL'],
        linkTo: Routes.TG_CHAT_BOT,
        labelImg: tgChatBot,
        featured: true,
    },
    {
        name: 'AI-Powered Chat Interface',
        description: 'Enterprise conversational UI with streaming responses, context memory, and multi-model support.',
        role: 'Frontend Lead',
        stack: ['React', 'Vercel AI SDK', 'AWS', 'TypeScript'],
        linkTo: Routes.AI_CHAT,
        labelImg: softek,
        featured: true,
    },
    {
        name: 'Access Digital® Banking',
        description: 'White-label digital banking platform serving 100+ credit unions across North America.',
        role: 'Senior Frontend Developer',
        stack: ['React', 'TypeScript', 'GraphQL', 'Apollo'],
        linkTo: Routes.D_BANKING,
        labelImg: softek,
        featured: true,
    },
    {
        name: "GOOD'OK Music Service",
        description: 'Music streaming service for MTS telecom — subscription management, playback, and content discovery.',
        role: 'Frontend Developer',
        stack: ['Next.js', 'React', 'SSR'],
        linkTo: Routes.GOODOK,
        labelImg: goodokLabel,
    },
    {
        name: 'Clients World MVP',
        description: 'Customer engagement platform with analytics dashboard and campaign management tools.',
        role: 'Frontend Developer',
        stack: ['React', 'TypeScript', 'REST API'],
        linkTo: Routes.CLIENT_WORLD,
        labelImg: cwmtsLabel,
    },
    {
        name: 'Global System Monitoring',
        description: 'Real-time infrastructure monitoring SPA with live data visualization and alert management.',
        role: 'Frontend Developer',
        stack: ['Angular 6', 'RxJS', 'WebSockets'],
        linkTo: Routes.GSM,
        labelImg: gsmLabel,
    },
    {
        name: 'MasterCase CRM Modules',
        description: 'Mail and authentication modules for enterprise CRM — role-based access, templating, notifications.',
        role: 'Frontend Developer',
        stack: ['Angular 7', 'TypeScript', 'SCSS'],
        linkTo: Routes.CRM_SYSTEM,
        labelImg: msc,
    },
    {
        name: 'Investment Evaluator',
        description: 'Prototype tool for evaluating company investment attractiveness using financial data APIs.',
        role: 'Solo Developer',
        stack: ['Next.js', 'Chart.js', 'REST API'],
        externalReference: 'https://investing-next-js.vercel.app/company-profile/AAPL',
        labelImg: investing,
    },
    {
        name: 'DomClick Partner Portal',
        description: 'Partner-facing portal for Russia\'s largest real estate platform — onboarding, docs, analytics.',
        role: 'Senior Frontend Developer',
        stack: ['React', 'TypeScript', 'GraphQL'],
        labelImg: dcPartners,
    },
    {
        name: 'COMPAS 2.0 CRM',
        description: 'Internal CRM for DomClick sales team — lead management, pipeline tracking, reporting.',
        role: 'Senior Frontend Developer',
        stack: ['React', 'TypeScript', 'GraphQL'],
        labelImg: dcCms,
    },
    {
        name: 'MasterSCADA Product Site',
        description: 'Flagship product website for industrial automation software company.',
        role: 'Frontend Developer',
        stack: ['HTML5', 'CSS3', 'JavaScript'],
        labelImg: masterscada,
    },
    {
        name: 'Kingdy Partner Site',
        description: 'Corporate partner portal for industrial panel PC manufacturer.',
        role: 'Markup Developer',
        stack: ['HTML5', 'SCSS', 'jQuery'],
        labelImg: kngdy,
    },
    {
        name: 'MasterOPC Presentation',
        description: 'Product presentation site for OPC server software suite.',
        role: 'Markup Developer',
        stack: ['HTML5', 'CSS3', 'JavaScript'],
        labelImg: mpoc,
    },
    {
        name: 'Engineering Systems Site',
        description: 'Corporate website for engineering systems installation company.',
        role: 'Freelance Developer',
        stack: ['HTML5', 'CSS3', 'PHP'],
        labelImg: header,
        externalReference: 'http://engineer37.ru/',
    },
]

export const Works: React.FC<IWithRefChildren> = ({ refElement }) => {
    return (
        <section className="work_section" ref={refElement} id="works">
            <div className="works_header">
                <h2>Selected Projects</h2>
                <p className="works_subtitle">
                    A mix of enterprise products, side projects, and experiments —
                    each one taught me something new
                </p>
            </div>
            <div className="workWrapper">
                {worksConfig.map((el) => (
                    <div
                        className={`work__prev ${el.featured ? 'work__featured' : ''}`}
                        key={el.name}
                    >
                        <ResponsiveImage src={el.labelImg as string} alt={el.name} />
                        <div className="work_overlay">
                            <div className="work_stack">
                                {el.stack.map((tech) => (
                                    <span key={tech} className="work_stack_badge">{tech}</span>
                                ))}
                            </div>
                            <div className="work_tech_block">
                                <p className="work_name">{el.name}</p>
                                <p className="work_desc">{el.description}</p>
                                <span className="work_role">{el.role}</span>
                            </div>
                            <div className="work_actions">
                                {el.linkTo && (
                                    <Link to={el.linkTo} className="work_btn">
                                        <span>Case Study →</span>
                                    </Link>
                                )}
                                {el.externalReference && (
                                    <a
                                        href={el.externalReference}
                                        target="_blank"
                                        className="work_btn work_btn_outline"
                                        rel="noreferrer"
                                    >
                                        <span>Live Demo ↗</span>
                                    </a>
                                )}
                            </div>
                        </div>
                        {el.linkTo && (
                            <Link to={el.linkTo} className="prev_link" aria-label={`View ${el.name}`} />
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}
