import React from 'react'
import './process.scss'

const steps = [
    {
        number: '01',
        title: 'Understand',
        desc: 'I start by asking the right questions — what problem are we solving, who are the users, and what does success look like? No code before clarity.',
    },
    {
        number: '02',
        title: 'Architect',
        desc: 'I map out component structure, data flow, and state management before writing a single line. Good architecture prevents 80% of future bugs.',
    },
    {
        number: '03',
        title: 'Build',
        desc: 'Clean TypeScript, small composable components, proper error boundaries. I write code that my future self — and my teammates — can read.',
    },
    {
        number: '04',
        title: 'Polish',
        desc: 'Transitions, loading states, edge cases, accessibility. The difference between "works" and "feels great" lives in the details.',
    },
    {
        number: '05',
        title: 'Test',
        desc: 'Unit tests, integration tests, visual regression. I verify behavior, not implementation — so refactors don\'t break the suite.',
    },
    {
        number: '06',
        title: 'Iterate',
        desc: 'Ship, measure, learn. I treat every deploy as a conversation with users and every sprint as a chance to improve the system.',
    },
]

export const ProcessSection = () => {
    return (
        <section className="process_section">
            <h2>How I Work</h2>
            <p className="process_subtitle">
                Building great UI is a system, not a checklist
            </p>
            <div className="process_grid">
                {steps.map((step) => (
                    <div className="process_card" key={step.number}>
                        <span className="process_number">{step.number}</span>
                        <h3>{step.title}</h3>
                        <p>{step.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

