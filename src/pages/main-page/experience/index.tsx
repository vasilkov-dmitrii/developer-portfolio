import React from 'react'
import './experience.scss'
import { background, experience } from '../../../data/experience'

export const Experience = () => {
    return (
        <section className="section" id="experience" tabIndex={-1}>
            <div className="section_inner">
                <h2>Experience</h2>
                <ol className="exp_list">
                    {experience.map((item) => (
                        <li className="exp_item" key={item.company}>
                            <div className="exp_meta">
                                <h3>{item.company}</h3>
                                <p>{item.period}</p>
                            </div>
                            <div className="exp_body">
                                <p className="exp_position">{item.position}</p>
                                <p className="exp_summary">{item.summary}</p>
                                <ul className="exp_achievements">
                                    {item.achievements.map((achievement) => (
                                        <li key={achievement}>{achievement}</li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ol>

                <div className="exp_background">
                    {background.map((item) => (
                        <div key={item.title}>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
