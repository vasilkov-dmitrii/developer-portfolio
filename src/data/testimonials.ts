export type Testimonial = {
    quote: string
    name: string
    role: string
    company: string
}

export const testimonials: Testimonial[] = [
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
