import React from 'react'
import './works.scss'
import { Link } from 'react-router-dom'
import { IWithRefChildren } from '../index'
import { ResponsiveImage } from '../../../components/ResponsiveImage'
import { worksConfig } from '../../../data/projects'

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
