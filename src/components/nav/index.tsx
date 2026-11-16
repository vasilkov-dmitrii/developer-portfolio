import React, { useState } from 'react'
import './nav.scss'
import { profile } from '../../data/profile'
import { scrollToSection } from '../../utils/scroll'

const links = [
    { id: 'works', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' },
]

export const Nav = () => {
    const [open, setOpen] = useState(false)

    const go = (id: string) => {
        setOpen(false)
        scrollToSection(id)
    }

    return (
        <header className="nav">
            <button
                type="button"
                className="skip_link"
                onClick={() => scrollToSection('content', true)}
            >
                Skip to content
            </button>
            <div className="nav_inner">
                <button
                    type="button"
                    className="nav_brand"
                    onClick={() => {
                        setOpen(false)
                        window.scrollTo({ top: 0 })
                    }}
                >
                    {profile.name}
                </button>
                <button
                    type="button"
                    className="nav_toggle"
                    aria-expanded={open}
                    aria-controls="nav-links"
                    onClick={() => setOpen((value) => !value)}
                >
                    {open ? 'Close' : 'Menu'}
                </button>
                <nav
                    id="nav-links"
                    className={open ? 'nav_links nav_links_open' : 'nav_links'}
                    aria-label="Sections"
                >
                    {links.map((link) => (
                        <button
                            key={link.id}
                            type="button"
                            className="nav_link"
                            onClick={() => go(link.id)}
                        >
                            {link.label}
                        </button>
                    ))}
                    <a
                        className="btn btn_small nav_cv"
                        href={profile.cv}
                        download={profile.cvFileName}
                    >
                        Download CV
                    </a>
                </nav>
            </div>
        </header>
    )
}
