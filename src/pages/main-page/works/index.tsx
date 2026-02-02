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

type WorkItem = {
    name: string
    activeTitle?: string
    linkTo?: string
    externalReference?: string
    labelImg: string
}

const worksConfig: WorkItem[] = [
    {
        activeTitle: 'Application · React · Vercel AI SDK · AWS',
        name: 'AI-powered chat interface',
        externalReference: '',
        linkTo: Routes.AI_CHAT,
        labelImg: softek,
    },
    {
        activeTitle: 'Application · React · TypeScript · GraphQL',
        name: 'Access Digital® Banking platform',
        linkTo: Routes.D_BANKING,
        labelImg: softek,
    },
    {
        activeTitle: 'Application · Next.js · Production',
        name: "GOOD'OK music service (MTS)",
        linkTo: Routes.GOODOK,
        labelImg: goodokLabel,
    },
    {
        activeTitle: 'Application · Beta · Released',
        name: 'Clients World MVP',
        linkTo: Routes.CLIENT_WORLD,
        labelImg: cwmtsLabel,
    },
    {
        activeTitle: 'Application · Angular 6 · RxJS',
        name: 'Global System Monitoring SPA',
        linkTo: Routes.GSM,
        labelImg: gsmLabel,
    },
    {
        activeTitle: 'Application · MasterCase SRM',
        name: 'Mail & auth modules for MasterCase CRM',
        linkTo: Routes.CRM_SYSTEM,
        labelImg: msc,
    },
    {
        activeTitle: 'Application · Next.js prototype',
        name: 'Investment attractiveness evaluator',
        externalReference:
            'https://investing-next-js.vercel.app/company-profile/AAPL',
        labelImg: investing,
    },
    {
        activeTitle: 'Application · React · TypeScript',
        name: 'DomClick partner portal',
        linkTo: '',
        labelImg: dcPartners,
    },
    {
        activeTitle: 'Application · React · TypeScript · GraphQL',
        name: 'COMPAS 2.0 CRM for DomClick',
        linkTo: '',
        labelImg: dcCms,
    },
    {
        name: 'MasterSCADA flagship product site',
        activeTitle: 'Website · Product site',
        linkTo: '',
        labelImg: masterscada,
    },
    {
        name: "Kingdy partner site",
        activeTitle: 'Website · Partner site',
        linkTo: '',
        labelImg: kngdy,
    },
    {
        name: 'MasterOPC product presentation',
        activeTitle: 'Website · Product site',
        linkTo: '',
        labelImg: mpoc,
    },
    {
        name: 'Engineering systems installation website',
        activeTitle: 'Website · Corporate site',
        linkTo: '',
        labelImg: header,
        externalReference: 'http://engineer37.ru/',
    },
]

export const Works: React.FC<IWithRefChildren> = ({ refElement }) => {
    const works = React.useMemo<WorkItem[]>(() => worksConfig, [])

    return (
        <section className="work_section" ref={refElement}>
            <div className={'workWrapper'}>
                {works.map((el) => (
                    <div className={'work__prev'} key={el.name}>
                        <ResponsiveImage src={el.labelImg as string} alt={el.name} />
                        {el.activeTitle && (
                            <div className="work_title active">
                                {el.activeTitle}
                            </div>
                        )}
                        <div className="work_tech_block">
                            <p>{el.name}</p>
                        </div>
                        {el.linkTo && (
                            <Link
                                to={el.linkTo}
                                className="work_btn btn_bottom"
                            >
                                <span>More</span>
                            </Link>
                        )}
                        {el.linkTo && (
                            <Link to={el.linkTo} className="prev_link"></Link>
                        )}
                        {el.externalReference && (
                            <a
                                href={el.externalReference}
                                target={'_blank'}
                                className="work_btn btn_bottom"
                                rel="noreferrer"
                            >
                                <span>Open project</span>
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}
