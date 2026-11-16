import React from 'react'
import './contact.scss'
import { profile } from '../../../data/profile'

export const Contact = () => {
    return (
        <section className="section contact" id="contact" tabIndex={-1}>
            <div className="section_inner contact_inner">
                <div>
                    <h2>Let’s talk</h2>
                    <p className="contact_text">
                        {profile.availability}. Based in {profile.location},
                        working remotely.
                    </p>
                    <a className="contact_email" href={`mailto:${profile.email}`}>
                        {profile.email}
                    </a>
                </div>
                <div className="contact_actions">
                    <a className="btn btn_primary" href={`mailto:${profile.email}`}>
                        Email me
                    </a>
                    <a
                        className="btn"
                        href={profile.linkedin}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        LinkedIn ↗
                    </a>
                    <a
                        className="btn"
                        href={profile.github}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        GitHub ↗
                    </a>
                    <a
                        className="btn"
                        href={profile.cv}
                        download={profile.cvFileName}
                    >
                        Download CV
                    </a>
                </div>
            </div>
        </section>
    )
}
