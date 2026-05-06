import React from 'react'
import './skills.scss'
import { IWithRefChildren } from '../index'

type SkillGroup = {
    category: string
    icon: string
    skills: string[]
}

const skillGroups: SkillGroup[] = [
    {
        category: 'Frontend',
        icon: '◈',
        skills: [
            'React', 'Next.js', 'TypeScript', 'Redux Toolkit',
            'Angular', 'RxJS', 'HTML5', 'CSS3',
        ],
    },
    {
        category: 'Styling & UI',
        icon: '◇',
        skills: [
            'SCSS / Sass', 'PostCSS', 'CSS-in-JS', 'Tailwind CSS',
            'Responsive Design', 'Design Systems', 'Figma → Code',
        ],
    },
    {
        category: 'Data & APIs',
        icon: '⬡',
        skills: [
            'GraphQL (Apollo)', 'REST APIs', 'WebSockets',
            'Prisma', 'Node.js', 'PostgreSQL',
        ],
    },
    {
        category: 'Testing & Quality',
        icon: '△',
        skills: [
            'Jest', 'React Testing Library', 'Playwright',
            'Cypress', 'Code Review', 'CI/CD Pipelines', 'Linting / Prettier',
        ],
    },
    {
        category: 'AI & Productivity',
        icon: '✦',
        skills: [
            'Cursor IDE', 'GitHub Copilot', 'ChatGPT / GPT-4',
            'Vercel AI SDK', 'AI-assisted Code Review',
            'Prompt Engineering',
        ],
    },
    {
        category: 'Tools & DevOps',
        icon: '⊞',
        skills: [
            'Git / GitHub', 'Vite', 'Webpack', 'Docker',
            'Vercel', 'AWS (S3, Lambda)', 'GitHub Actions',
        ],
    },
    {
        category: 'Soft Skills',
        icon: '◎',
        skills: [
            'Technical Communication', 'Cross-team Collaboration',
            'Mentoring', 'Product Thinking', 'Agile / Scrum',
        ],
    },
]

export const Skills: React.FC<IWithRefChildren> = ({ refElement }) => {
    return (
        <section className="skills_section" ref={refElement}>
            <h2>Skills & Tools</h2>
            <p className="skills_subtitle">Technologies I use daily and the ones I know well</p>
            <div className="skills_grid">
                {skillGroups.map((group) => (
                    <div className="skill_group" key={group.category}>
                        <div className="skill_group_header">
                            <span className="skill_group_icon">{group.icon}</span>
                            <h3>{group.category}</h3>
                        </div>
                        <div className="skill_badges">
                            {group.skills.map((skill) => (
                                <span className="skill_badge" key={skill}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
