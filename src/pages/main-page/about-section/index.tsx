import React from 'react'
import './about.scss'
import { IWithRefChildren } from '../index'

const highlights = [
    { label: '7+', desc: 'Years of experience' },
    { label: '25+', desc: 'Projects shipped' },
    { label: '5', desc: 'Enterprise clients' },
]

export const AboutSection: React.FC<IWithRefChildren> = ({ refElement }) => {
    return (
        <section className="about" ref={refElement}>
            <h2>About me</h2>
            <p className="about__subtitle">The short version of a long journey</p>
            <div className="about__wrapper">
                <div className="about__text">
                    <div className="about__text_body">
                        <div className="text_block">
                            <span>
                                I'm a senior frontend engineer who specializes in
                                building web applications that people actually enjoy
                                using — fast, accessible, and thoughtfully designed.
                            </span>
                            <span>
                                Over 7 years I've worked on banking platforms,
                                telecom products, CRM systems, and AI-powered
                                interfaces. I care about architecture as much as
                                pixel-perfect UI, and I treat every component as a
                                contract between the product and its users.
                            </span>
                            <span>
                                My daily stack is TypeScript, React, Next.js, and
                                GraphQL. I write tests before I write excuses, and
                                I actively use AI tooling — Cursor, GitHub Copilot,
                                and ChatGPT — to move faster without cutting corners.
                            </span>
                            <span>
                                What sets me apart: I think in systems, communicate
                                clearly with designers and PMs, and ship production
                                code that doesn't come back as a bug ticket.
                            </span>
                        </div>
                    </div>
                </div>

                <div className="about__highlights">
                    {highlights.map((h) => (
                        <div className="highlight_card" key={h.label}>
                            <span className="highlight_number">{h.label}</span>
                            <span className="highlight_desc">{h.desc}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
