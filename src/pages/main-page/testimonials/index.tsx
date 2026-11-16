import React from 'react'
import './testimonials.scss'
import { testimonials } from '../../../data/testimonials'

export const Testimonials = () => {
    return (
        <section className="section" id="testimonials" tabIndex={-1}>
            <div className="section_inner">
                <h2>What colleagues say</h2>
                <ul className="testimonials_grid">
                    {testimonials.map((item) => (
                        <li className="testimonial_card" key={item.name}>
                            <figure>
                                <blockquote>{item.quote}</blockquote>
                                <figcaption>
                                    <span className="testimonial_name">
                                        {item.name}
                                    </span>
                                    <span className="testimonial_role">
                                        {item.role} · {item.company}
                                    </span>
                                </figcaption>
                            </figure>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
