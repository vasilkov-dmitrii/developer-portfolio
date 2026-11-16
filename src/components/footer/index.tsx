import React from 'react'
import './footer.scss'
import { profile } from '../../data/profile'

export const Footer = () => {
    return (
        <footer className="status_bar">
            <span className="status_id">
                <i aria-hidden="true" />
                dmitrii@portfolio
            </span>
            <span className="status_loc">{profile.location} · remote</span>
            <span className="status_links">
                <a href={`mailto:${profile.email}`}>email</a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer noopener">
                    linkedin
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer noopener">
                    github
                </a>
                <a href={profile.cv} download={profile.cvFileName}>
                    cv
                </a>
            </span>
        </footer>
    )
}
