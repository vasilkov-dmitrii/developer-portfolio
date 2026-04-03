import { Routes } from '../../routes'
import { IWorkPage } from './index'
import good_okSlide1 from '../../img/goodok_slide1.jpg'
import good_okSlide2 from '../../img/goodok_slide2.jpg'
import good_okSlide3 from '../../img/goodok_slide3.jpg'
import cwSlide1 from '../../img/cw1.png'
import cwSlide2 from '../../img/cw2.png'
import cwSlide3 from '../../img/cw3.png'
import cwSlide4 from '../../img/cw4.png'
import cwSlide5 from '../../img/cw5.png'
import gsm from '../../img/gsm.jpg'
import crmSlide1 from '../../img/crmSlide1.jpg'
import crmSlide2 from '../../img/crmSlide2.jpg'
import aiChatCover from '../../img/softek.png'
import spendly from '../../img/spendly_1.webp';
import tg_bot_1 from '../../img/tg_bot_1.webp'
import tg_bot_2 from '../../img/tg_bot_2.webp'
import tg_bot_3 from '../../img/tg_bot_3.webp'
import tg_bot_4 from '../../img/tg_bot_4.webp'
import tg_bot_5 from '../../img/tg_bot_5.webp'
import tg_bot_6 from '../../img/tg_bot_6.webp'


export const projectsConfig: Partial<Record<Routes, IWorkPage>> = {
    [Routes.GOODOK]: {
        projectTitle: "MTS GOOD'OK",
        projectDescription:
            'A new service by MTS that allows users to set a melody instead of a standard dial tone.',
        slides: [good_okSlide1, good_okSlide2, good_okSlide3],
        technologiesTitle:
            'The project is built using Next.js, React, TypeScript',
        technologiesList: [
            'Next.js',
            'React',
            'React Hooks',
            'Styled Components',
            'TypeScript',
            'ES6+, axios, REST API',
            'Git',
            'React state management (useRedux, useContext)',
        ],
        contributionsToProjectList: [
            'Developed a prototype of the new service from scratch within three months, laying the foundation for the project architecture.',
            'Successfully brought the project to production release.',
            'Implemented a complex internal routing system within the application.',
            'Integrated lazy loading for application components, optimizing traffic and reducing the bundle size.',
            'Configured Google Analytics to track over 40 different events.',
            'Developed a custom promotional widget specifically for the website, which was featured on the main MTS website.',
            'Migrated the existing front-end to Next.js to enhance SEO accessibility. As a result, daily traffic increased from 2,800 to 4,500 visitors and continues to grow.',
        ],
        projectLink: 'https://goodok.mts.ru/',
    },
    [Routes.CLIENT_WORLD]: {
        projectTitle: 'MVP Version of "Client’s World" Game',
        projectDescription:
            'An MVP version of the "Client’s World" game, introducing users to the products and services of the MTS Group.',
        slides: [cwSlide1, cwSlide2, cwSlide3, cwSlide4, cwSlide5],
        technologiesTitle: 'The project is built using React and TypeScript',
        technologiesList: [
            'React',
            'Effector',
            'Styled Components',
            'TypeScript',
            'ES6+, Centrifuge (WebSocket), REST API',
            'Git',
        ],
        contributionsToProjectList: [
            'Developed a browser-based MVP version of the game for MTS within six months. The game provides users with an interactive way to explore company services, complete daily quests, purchase discount promo codes, and chat with a virtual assistant.',
            'Built an in-game store module from scratch. Implemented the purchasing logic for in-game items (coupons, MTS promo codes) using WebSockets and REST requests.',
            'Configured and integrated WebSockets, establishing backend communication via the WS protocol.',
            'Implemented lazy loading for application components, optimizing traffic and reducing the bundle size.',
            'Created complex CSS animations (keyframes + CSS transitions).',
            'Implemented a sound and music system within the application, including a custom component for managing sound notifications.',
            'Developed multiple custom and reusable React hooks for use throughout the application.',
            'Implemented marker and tooltip functionality within the game.',
            'Configured Google Analytics to track over 100 in-game events.',
        ],
    },
    [Routes.GSM]: {
        projectTitle: 'Global System Monitoring',
        projectDescription:
            'A system for monitoring and controlling the status of servers, switches, and other equipment.',
        slides: [gsm],
        technologiesTitle:
            'The project is built using Angular 6 and TypeScript. The backend is powered by C#.',
        technologiesList: [
            'Angular 6',
            'RxJS',
            'SCSS',
            'TypeScript',
            'SignalR (WebSocket)',
            'BPMN.js',
            'Chart.js',
            'ES6',
            'REST API',
        ],
        contributionsToProjectList: [
            'Enhanced and improved existing application functionality.',
            'Developed multiple components, including a user dashboard, a component for adjusting device sensor threshold ranges (using nouislider), a network map, an automation section, access label management, an event log, and more.',
            'Configured and integrated WebSockets, establishing backend communication via the WS protocol.',
            'Implemented an access control system (roles) within the application, mapping backend permissions using role-based guards (roleGuard).',
            'Created complex CSS animations (keyframes + CSS transitions).',
            'Configured and refined the role-based access control system within the application.',
            'Developed a graphical interface for visualizing devices on a schematic map.',
        ],
    },
    [Routes.CRM_SYSTEM]: {
        projectTitle: 'CRM System "MasterCase" (Mail Module)',
        projectDescription:
            'A corporate CRM system designed to automate routine tasks for small and medium-sized businesses.',
        slides: [crmSlide1, crmSlide2],
        technologiesTitle:
            'The project is built using Angular 7 and TypeScript. The backend is powered by Node.js.',
        technologiesList: [
            'Angular 7 (CLI)',
            'RxJS',
            'SCSS',
            'TypeScript',
            'Socket.IO',
            'Drag & Drop, SVG animation, Icon Fonts',
        ],
        contributionsToProjectList: [
            'Implemented the authentication functionality for system login. The mail module is currently in beta testing and actively being improved.',
            'At present, the core features of the mail client are functioning smoothly.',
        ],
    },
    [Routes.AI_CHAT]: {
        projectTitle: 'AI Chat Advisor Microservice',
        projectDescription:
            'Built an AI-powered conversational advisor embedded into the existing app via iframe for seamless handoff.',
        slides: [aiChatCover],
        technologiesTitle:
            'The project is built using React, TypeScript, and the Vercel AI SDK v5, deployed on AWS.',
        technologiesList: [
            'React',
            'TypeScript',
            'Vercel AI SDK v5 (useChat)',
            'AWS (S3, CloudFront, Route53)',
            'GitLab CI/CD',
            'REST and streaming responses',
            'Iframe-based integration',
        ],
        contributionsToProjectList: [
            'Implemented a responsive chat interface with real-time streaming replies using the Vercel AI SDK v5 useChat hook.',
            'Shipped the feature as an isolated microservice and embedded it into the host application through a secure iframe.',
            'Set up GitLab CI/CD to build, and deploy to AWS S3 with CloudFront and Route53 for global delivery.',
            'Hardened the integration with graceful fallback states and connectivity checks for iframe communication.',
        ],
        projectLink: '',
    },
    [Routes.D_BANKING]: {
        projectTitle: 'Access Softek · Frontend Engineer',
        projectDescription:
            'Frontend developer on the Internal Transfers team, owning UI delivery and integration quality for Access Softek clients.',
        slides: [aiChatCover],
        technologiesTitle:
            'The project is built using React and TypeScript with GraphQL.',
        technologiesList: [
            'TypeScript',
            'React',
            'Apollo GraphQL',
            'LLM Integration (Vercel AI SDK)',
            'React Testing Library',
            'Jest',
            'Code Review',
            'playwright/test (E2E)',
            'Webpack',
            'Vite',
        ],
        contributionsToProjectList: [
            'Integrated the 3rd-party ProPay service while keeping the system stable and seamless for end users.',
            'Built an end-to-end Playwright test suite that cut manual QA time by 30% and caught UI regressions early.',
            'Raised automated test coverage to 80%, reducing reliance on manual regression passes.',
            'Refactored and optimized the existing codebase to improve maintainability and stability.',
            'Led and contributed in team brainstorming sessions to identify improvements and unblock delivery.',
        ],
        projectLink: '',
    },
    [Routes.TG_CHAT_BOT]: {
        projectTitle: 'Telegram Finance Assistant · Full Stack Engineer',
        projectDescription:
            'Built a Telegram-first personal finance assistant with a Next.js dashboard, delivering expense capture, limits management, analytics, and savings forecasts.',
        slides: [spendly,tg_bot_2, tg_bot_1, tg_bot_3, tg_bot_4, tg_bot_5, tg_bot_6],
        technologiesTitle:
            'The project is built using Next.js, React, and TypeScript with Prisma and PostgreSQL powering the bot and dashboard.',
        technologiesList: [
            'TypeScript',
            'Next.js (App Router)',
            'React',
            'Prisma ORM',
            'PostgreSQL',
            'Telegram Bot API (Telegraf)',
            'Node.js',
            'REST/Next API Routes',
        ],
        contributionsToProjectList: [
            'Implemented Telegram bot flows for tagging and categorizing expenses, syncing them to Prisma/PostgreSQL.',
            'Added analytics for categories and tags, including 10-entry trend detection and month-ahead savings outlook.',
            'Optimized expense aggregation by batching Prisma queries instead of per-item fetches to reduce DB load.',
            'Built the dashboard pages for monthly summaries, limits management, and detailed expense breakdowns.',
            'Hardened API error handling and edge-case coverage to keep the bot and dashboard stable in production.',
        ],
        projectLink: 'https://spendly-dashboard-mu.vercel.app/',
    }

}
