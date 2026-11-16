import React from 'react'
import { Link } from 'react-router-dom'
import './hero.scss'
import { getStats, profile } from '../../../data/profile'
import { worksConfig } from '../../../data/projects'
import { scrollToSection } from '../../../utils/scroll'

const previews = ['event-ruta', 'spendly'].flatMap((slug) =>
    worksConfig.filter((item) => item.slug === slug && item.linkTo)
)

export const Hero = () => {
    return (
        <section className="hero">
            <div className="hero_inner">
                <div className="hero_copy">
                    <p className="hero_status">
                        <i aria-hidden="true" />
                        {profile.availability} · {profile.location}, remote
                    </p>
                    <h1 className="hero_name">{profile.name}</h1>
                    <p className="hero_role">{profile.role}</p>
                    <p className="hero_tagline">{profile.tagline}</p>

                    <div className="hero_cta">
                        <a
                            className="btn btn_primary"
                            href={profile.cv}
                            download={profile.cvFileName}
                        >
                            Download CV
                        </a>
                        <button
                            type="button"
                            className="btn"
                            onClick={() => scrollToSection('works')}
                        >
                            View projects
                        </button>
                    </div>

                    <ul className="hero_links">
                        <li>
                            <a
                                className="text_link"
                                href={profile.linkedin}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a
                                className="text_link"
                                href={profile.github}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a className="text_link" href={`mailto:${profile.email}`}>
                                {profile.email}
                            </a>
                        </li>
                    </ul>

                    <dl className="hero_stats">
                        {getStats().map((stat) => (
                            <div key={stat.label}>
                                <dt>{stat.value}</dt>
                                <dd>{stat.label}</dd>
                            </div>
                        ))}
                    </dl>
                </div>

                <ul className="hero_preview" aria-label="Featured projects">
                    {previews.map((project) => (
                        <li key={project.slug}>
                            <Link
                                to={`/${project.linkTo}`}
                                className="hero_preview_card"
                            >
                                <img
                                    src={project.labelImg}
                                    alt=""
                                    width={1080}
                                    height={1920}
                                    decoding="async"
                                />
                                <span className="hero_preview_caption">
                                    <strong>{project.name}</strong>
                                    <span>Case study →</span>
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
