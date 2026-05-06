import React from 'react'
import './testimonials.scss'

type Testimonial = {
    quote: string
    name: string
    role: string
    company: string
}

const testimonials: Testimonial[] = [
    {
        quote: 'Dmitry demonstrated his responsibility and discipline during our joint work on projects at MTS. Possess the technical expertise necessary to implement the assigned tasks and maintain active communication within the team. The deadlines for completing tasks were not the subject of any complaints. He is not afraid to take responsibility.',
        name: 'Michael Ternovoi',
        role: 'COO · Head of PMO',
        company: 'MTS',
    },
    {
        quote: 'Dmitry is an exceptional professional who demonstrates a high level of responsibility, responsiveness, and openness to new ideas. He is always ready to help and eager to learn new things, making him an invaluable asset to any team. His proactive approach and collaborative spirit make him an active team player who is a pleasure to work with.',
        name: 'Serhii Berezin',
        role: 'Frontend Developer',
        company: 'AccessSoftek',
    },
    {
        quote: 'When Dmitry joined our team as a professional frontend developer he immediately took on all frontend related tasks. He is a responsible, communicative person. I would work with Dmitry again and can recommend him as a Senior React Developer.',
        name: 'Mikhail Manukhin',
        role: 'Senior .NET Developer',
        company: 'AccessSoftek',
    },
]

export const TestimonialsSection = () => {
    return (
        <section className="testimonials_section">
            <h2>What People Say</h2>
            <p className="testimonials_subtitle">
                Feedback from teams I've worked with
            </p>
            <div className="testimonials_grid">
                {testimonials.map((t, idx) => (
                    <div className="testimonial_card" key={idx}>
                        <div className="testimonial_quote_mark" aria-hidden="true">"</div>
                        <blockquote className="testimonial_text">
                            {t.quote}
                        </blockquote>
                        <div className="testimonial_author">
                            <div className="testimonial_avatar" aria-hidden="true">
                                {t.name.charAt(0)}
                            </div>
                            <div>
                                <p className="testimonial_name">{t.name}</p>
                                <p className="testimonial_role">{t.role} · {t.company}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
