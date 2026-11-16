import cv from '../assets/cv.pdf'

const careerStartYear = 2018

export const yearsOfExperience = () =>
    new Date().getFullYear() - careerStartYear

export const profile = {
    name: 'Dmitrii Vasilkov',
    role: 'Senior Frontend Engineer',
    tagline:
        'I build fast, accessible web applications with React, TypeScript and Next.js, from banking platforms to AI-driven interfaces.',
    location: 'Spain',
    availability: 'Open to senior frontend roles',
    email: 'vasilkov.dmitrii24@gmail.com',
    linkedin: 'https://www.linkedin.com/in/dmitrii-vasilkov-a12b98172/',
    github: 'https://github.com/vasilkov-dmitrii',
    cv,
    cvFileName: 'Dmitrii-Vasilkov-CV.pdf',
}

export type Stat = { value: string; label: string }

export const getStats = (): Stat[] => [
    { value: `${yearsOfExperience()}+`, label: 'years building frontend' },
    { value: '100+', label: 'credit unions on my current platform' },
    { value: '−30%', label: 'manual QA time after my Playwright E2E suite' },
]
