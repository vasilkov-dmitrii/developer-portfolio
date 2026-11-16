export type SkillGroup = {
    key: string
    category: string
    skills: string[]
}

export const skillGroups: SkillGroup[] = [
    {
        key: 'core',
        category: 'Core',
        skills: ['TypeScript', 'React', 'Next.js', 'Redux Toolkit', 'Angular', 'RxJS'],
    },
    {
        key: 'ui',
        category: 'UI',
        skills: ['SCSS', 'Tailwind CSS', 'CSS-in-JS', 'Design systems', 'Responsive layout'],
    },
    {
        key: 'data',
        category: 'Data & APIs',
        skills: ['GraphQL (Apollo)', 'REST', 'WebSockets', 'Node.js', 'Prisma', 'PostgreSQL'],
    },
    {
        key: 'testing',
        category: 'Testing',
        skills: ['Jest', 'React Testing Library', 'Playwright', 'Cypress'],
    },
    {
        key: 'delivery',
        category: 'Build & delivery',
        skills: ['Vite', 'Webpack', 'Docker', 'GitHub Actions', 'AWS (S3, CloudFront)', 'Vercel'],
    },
    {
        key: 'ai',
        category: 'AI tooling',
        skills: ['Vercel AI SDK', 'Cursor', 'GitHub Copilot'],
    },
]
