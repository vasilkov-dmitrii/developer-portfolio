import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './work-page.scss'
import { Slider } from '../../../components/slider'
import { PhoneGallery } from '../../../components/gallery'
import { worksConfig } from '../../../data/projects'
import { Routes } from '../../../routes'
import { IWorkPage } from '../index'

const caseStudies = worksConfig.filter((item) => item.linkTo)

const BackLink = () => (
    <Link to={Routes.MAIN} state={{ section: 'works' }} className="case_back">
        ← All projects
    </Link>
)

export const WorkPage: React.FC<IWorkPage> = ({
    slides,
    gallery,
    projectTitle,
    projectDescription,
    technologiesTitle,
    technologiesList,
    contributionsToProjectList,
    projectLink,
}) => {
    const { id } = useParams()
    const index = caseStudies.findIndex((item) => item.linkTo === id)
    const project = index >= 0 ? caseStudies[index] : undefined
    const next =
        caseStudies.length > 1
            ? caseStudies[(index + 1) % caseStudies.length]
            : undefined

    return (
        <main id="content" className="case">
            <article className="case_inner">
                <nav className="case_top" aria-label="Breadcrumb">
                    <BackLink />
                    <p className="case_path" aria-hidden="true">
                        <span>~</span>
                        <span>projects</span>
                        <span className="current">{id}</span>
                    </p>
                </nav>

                <header className="case_header">
                    <h1>{projectTitle}</h1>
                    <p className="case_lead">{projectDescription}</p>
                    <div className="case_meta">
                        {project && (
                            <div>
                                <span className="case_meta_label">Role</span>
                                <span>{project.role}</span>
                            </div>
                        )}
                        {project && (
                            <div>
                                <span className="case_meta_label">Stack</span>
                                <span>{project.stack.join(' · ')}</span>
                            </div>
                        )}
                        {projectLink && (
                            <a
                                className="btn btn_primary"
                                href={projectLink}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                Visit live site ↗
                            </a>
                        )}
                    </div>
                </header>

                {gallery === 'phone' ? (
                    <PhoneGallery slides={slides} title={projectTitle} />
                ) : (
                    <Slider slides={slides} title={projectTitle} />
                )}

                <div className="case_columns">
                    <section className="case_section">
                        <h2>What I did</h2>
                        {project?.outcome && (
                            <p className="case_outcome">
                                <span>Result</span>
                                {project.outcome}
                            </p>
                        )}
                        <ul className="case_list">
                            {contributionsToProjectList.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </section>

                    <section className="case_section">
                        <h2>Stack</h2>
                        <p className="case_text">{technologiesTitle}</p>
                        <ul className="case_stack">
                            {technologiesList.map((item) => (
                                <li key={item} className="chip">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>

                <footer className="case_footer">
                    <BackLink />
                    {next?.linkTo && next.linkTo !== id && (
                        <Link to={`/${next.linkTo}`} className="case_next">
                            <span>Next project</span>
                            {next.name} →
                        </Link>
                    )}
                </footer>
            </article>
        </main>
    )
}
