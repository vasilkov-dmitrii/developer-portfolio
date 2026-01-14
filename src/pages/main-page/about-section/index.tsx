import React from 'react'
import './about.scss'
import { IWithRefChildren } from '../index'

export const AboutSection: React.FC<IWithRefChildren> = ({ refElement }) => {
    return (
        <section className="about" ref={refElement}>
            <h2>About me</h2>
            <div className="about__wrapper">
                <div className="about__text">
                    <div className="about__text_body">
                        <span className="line_l"></span>
                        <div className="text_block">
                            <span>
                                I am a senior Frontend Developer with 7+ years of
                                experience building performant, accessible web
                                applications that scale.
                            </span>
                            <span>
                                My toolkit centers on TypeScript, React, Next.js,
                                Redux Toolkit, and GraphQL; I pair these with
                                robust testing using Jest and React Testing
                                Library.
                            </span>
                            <span>
                                I’m comfortable across styling approaches—SCSS,
                                PostCSS, CSS-in-JS—and modern build tooling like
                                Vite and Webpack.
                            </span>
                            <span>
                                I regularly use AI assistants such as GitHub
                                Copilot and ChatGPT to accelerate delivery and
                                maintain quality. Let’s talk if you need someone
                                who ships clean, reliable UI.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
