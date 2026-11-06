import React from 'react'
import './footer.scss'
import cv from '../../assets/cv.pdf'

export const Footer = () => {
    return (
        <footer className="status_bar">
            <span className="status_id">
                <i />
                dmitrii@portfolio
            </span>
            <span className="status_loc">Spain · remote</span>
            <span className="status_links">
                <a href="mailto:vasilkov.dmitrii24@gmail.com">email</a>
                <a
                    href="https://www.linkedin.com/in/dmitrii-vasilkov-a12b98172/"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    linkedin
                </a>
                <a href={cv} target="_blank" rel="noreferrer" download>
                    cv
                </a>
            </span>
        </footer>
    )
}
