import React from 'react'
import './footer.scss'
import arrowUp from '../../img/up-arrow.svg'
import cv from '../../assets/cv.pdf'

export const Footer = () => {
    return (
        <footer id="contact">
            <div className="footer_inner">
                <div className="footer_cta">
                    <h2>Let's Build Something</h2>
                    <p className="footer_tagline">
                        I'm currently open to senior frontend roles, consulting, and
                        interesting side projects. If you're building something that
                        matters — let's talk.
                    </p>
                </div>

                <div className="contacts_row">
                    <a
                        href="mailto:vasilkov.dmitrii24@gmail.com"
                        className="contact_link"
                    >
                        vasilkov.dmitrii24@gmail.com
                    </a>
                    <p className="contact_location">
                        Based in Spain · Open to remote roles worldwide
                    </p>
                </div>

                <div className="social_row">
                    <a
                        href="https://www.linkedin.com/in/dmitrii-vasilkov-a12b98172/"
                        className="footer_links"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        <span>LinkedIn</span>
                    </a>

                    <a
                        href={cv}
                        className="footer_links footer_cv"
                        target="_blank"
                        rel="noreferrer"
                        download
                    >
                        <span>Download CV ↓</span>
                    </a>
                </div>

                <p className="footer_copyright">
                    © {new Date().getFullYear()} Dmitrii Vasilkov · Crafted with React & TypeScript
                </p>
            </div>

            <img
                className="arrow_up"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                src={arrowUp as string}
                alt="Back to top"
                loading="lazy"
            />
        </footer>
    )
}
