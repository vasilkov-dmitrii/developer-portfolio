import React from 'react'
import './skills.scss'
import { skillGroups } from '../../../data/skills'

export const Skills = () => {
    return (
        <section className="section" id="skills" tabIndex={-1}>
            <div className="section_inner">
                <h2>Skills</h2>
                <p className="section_lead">
                    What I use in production, grouped by where it sits in the
                    stack.
                </p>
                <dl className="skills_list">
                    {skillGroups.map((group) => (
                        <div className="skills_row" key={group.key}>
                            <dt>{group.category}</dt>
                            <dd>
                                {group.skills.map((skill) => (
                                    <span className="chip" key={skill}>
                                        {skill}
                                    </span>
                                ))}
                            </dd>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    )
}
