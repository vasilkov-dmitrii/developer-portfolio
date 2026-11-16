import React from 'react'
import './gallery.scss'

export const PhoneGallery: React.FC<IPhoneGallery> = ({ slides, title }) => {
    if (!slides.length) return null

    return (
        <ul
            className="phone_gallery"
            tabIndex={0}
            aria-label={`${title} screenshots, scroll sideways for more`}
        >
            {slides.map((src, idx) => (
                <li key={src}>
                    <img
                        src={src}
                        alt={`${title}, screenshot ${idx + 1} of ${slides.length}`}
                        loading={idx < 3 ? 'eager' : 'lazy'}
                        decoding="async"
                    />
                </li>
            ))}
        </ul>
    )
}

interface IPhoneGallery {
    slides: string[]
    title: string
}
