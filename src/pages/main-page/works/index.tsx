import React from 'react'
import './works.scss'
import { Link } from 'react-router-dom'
import {
    earlierWorks,
    featuredWorks,
    type WorkItem,
} from '../../../data/projects'

const ProjectCard = ({ project }: { project: WorkItem }) => (
    <li className="work_card">
        <div className="work_cover">
            <img
                src={project.labelImg}
                alt=""
                loading="lazy"
                decoding="async"
            />
        </div>
        <div className="work_body">
            <p className="work_role">{project.role}</p>
            <h3 className="work_name">
                {project.linkTo ? (
                    <Link to={`/${project.linkTo}`} className="work_main_link">
                        {project.name}
                    </Link>
                ) : (
                    project.name
                )}
            </h3>
            <p className="work_desc">{project.description}</p>
            {project.outcome && (
                <p className="work_outcome">{project.outcome}</p>
            )}
            <ul className="work_stack" aria-label="Stack">
                {project.stack.map((tech) => (
                    <li key={tech} className="chip">
                        {tech}
                    </li>
                ))}
            </ul>
            <div className="work_actions">
                {project.linkTo && (
                    <span className="work_action" aria-hidden="true">
                        Case study →
                    </span>
                )}
                {project.externalReference && (
                    <a
                        href={project.externalReference}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="work_action work_live"
                        aria-label={`${project.name} live site`}
                    >
                        Live site ↗
                    </a>
                )}
            </div>
        </div>
    </li>
)

const EarlierRow = ({ project }: { project: WorkItem }) => {
    const title = project.linkTo ? (
        <Link to={`/${project.linkTo}`} className="text_link">
            {project.name}
        </Link>
    ) : project.externalReference ? (
        <a
            href={project.externalReference}
            target="_blank"
            rel="noreferrer noopener"
            className="text_link"
        >
            {project.name} ↗
        </a>
    ) : (
        project.name
    )

    return (
        <li className="earlier_row">
            <h4>{title}</h4>
            <p>{project.description}</p>
            <span>{project.stack.join(' · ')}</span>
        </li>
    )
}

export const Works = () => {
    return (
        <section className="section" id="works" tabIndex={-1}>
            <div className="section_inner">
                <h2>Selected projects</h2>
                <p className="section_lead">
                    Production work for banks and telecom, plus two products I
                    built end to end.
                </p>
                <ul className="work_grid">
                    {featuredWorks.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </ul>

                <h3 className="earlier_title">Earlier work</h3>
                <ul className="earlier_list">
                    {earlierWorks.map((project) => (
                        <EarlierRow key={project.slug} project={project} />
                    ))}
                </ul>
            </div>
        </section>
    )
}
