import {
    HandshakeCheckIcon,
    LearningIcon,
    MultitaskingPersonIcon,
    PositiveInfluenceIcon,
    PositivityIcon,
    FistBumpIcon,
    LightbulbQuestionIcon,
    MagnifyingGlassIcon,
    WorldLanguageIcon
} from '@/components/icon-components'
import type { Experience, IconComponentItem, ImageItemsItem } from './types'


const techStack: Record<string, ImageItemsItem> = {
    vue: {
        img: 'vue',
        size: 2,
        desc: 'JavaScript framework for building user interfaces',
        similar: ['angular', 'react'],
        url: 'https://vuejs.org/'
    },
    nestjs: {
        img: 'nestjs',
        size: 2,
        desc: 'A progressive Node.js framework for building efficient and scalable server-side applications',
        similar: ['express', 'loopback'],
        url: 'https://nestjs.com/'
    },
    typescript: {
        img: 'typescript',
        size: 1,
        desc: 'Superset of JavaScript that adds static typing',
        similar: ['javascript', 'flow'],
        url: 'https://www.typescriptlang.org/'
    },
    nodejs: {
        img: 'nodejs',
        size: 1,
        desc: "JavaScript runtime built on Chrome's V8 JavaScript engine",
        similar: ['deno'],
        url: 'https://nodejs.org/'
    },
    scss: {
        img: 'scss',
        size: 1,
        desc: 'Preprocessor scripting language that is interpreted into CSS',
        similar: ['css', 'less'],
        url: 'https://sass-lang.com/'
    },
    storybook: {
        img: 'storybook',
        size: 2,
        desc: 'Open-source tool for developing UI components in isolation',
        similar: ['styleguidist'],
        url: 'https://storybook.js.org/'
    },
    react: {
        img: 'react',
        size: 1,
        desc: 'JavaScript library for building user interfaces',
        similar: ['vue', 'angular'],
        url: 'https://reactjs.org/'
    },
    axios: {
        img: 'axios',
        size: 1,
        desc: 'Promise-based HTTP client for the browser and Node.js',
        similar: ['fetch'],
        url: 'https://axios-http.com/'
    },
    docker: { img: 'docker', size: 1, desc: '', similar: [''], url: '' },
    postman: { img: 'postman', size: 1, desc: '', similar: [''], url: '' },
    postgresql: { img: 'postgresql', size: 1, desc: '', similar: [''], url: '' },
    datadog: { img: 'datadog', size: 1, desc: '', similar: [''], url: '' },
    mockserviceworker: { img: 'mockserviceworker', size: 3, desc: '', similar: [''], url: '' },
    vitest: { img: 'vitest', size: 2, desc: '', similar: [''], url: '' },
    pinia: { img: 'pinia', size: 2, desc: '', similar: [''], url: '' },
    playwright: { img: 'playwright', size: 2, desc: '', similar: [''], url: '' },
    vite: { img: 'vite', size: 2, desc: '', similar: [''], url: '' },
    prisma: { img: 'prisma', size: 2, desc: '', similar: [''], url: '' },
    loopback: { img: 'loopback', size: 2, desc: '', similar: [''], url: '' },
    launchdarkly: { img: 'launchdarkly', size: 1, desc: '', similar: [''], url: '' },
    vuex: { img: 'vuex', size: 2, desc: '', similar: [''], url: '' },
    javascript: { img: 'javascript', size: 1, desc: '', similar: [''], url: '' },
    blender: {
        img: 'blender',
        size: 2,
        desc: 'Free and open-source 3D computer graphics software toolset',
        similar: ['maya', '3ds Max'],
        url: 'https://www.blender.org/'
    },
    maya: {
        img: 'maya',
        size: 2,
        desc: '3D computer graphics application for making 3D animations, models, games and images',
        similar: ['blender', '3ds Max'],
        url: 'https://www.autodesk.com/products/maya/'
    },
    clipstudio: {
        img: 'clipstudio',
        size: 2,
        desc: 'Software application for digital art, specifically for creating comics and manga',
        similar: ['photoshop', 'procreate'],
        url: 'https://www.clipstudio.net/en'
    },
    html: {
        img: 'html',
        size: 1,
        desc: 'Markup language for creating web pages',
        similar: [],
        url: 'https://www.w3.org/html/'
    },
    css: {
        img: 'css',
        size: 1,
        desc: 'Style sheet language used for describing the look and formatting of a document',
        similar: ['scss', 'less'],
        url: 'https://www.w3.org/Style/CSS/'
    },
    java: {
        img: 'java',
        size: 2,
        desc: 'High-level, class-based, object-oriented programming language',
        similar: [],
        url: 'https://www.oracle.com/java/'
    },
    reactnative: {
        img: 'reactnative',
        size: 1,
        desc: 'Framework for building native apps using React',
        similar: ['flutter', 'xamarin'],
        url: 'https://reactnative.dev/'
    },
    python: {
        img: 'python',
        size: 2,
        desc: 'High-level, interpreted programming language with dynamic semantics',
        similar: [],
        url: 'https://www.python.org/'
    },
    scala: {
        img: 'scala',
        size: 2,
        desc: 'High-level language that fuses functional and object-oriented programming paradigms',
        similar: [],
        url: 'https://www.scala-lang.org/'
    },
    graphql: {
        img: 'graphql',
        size: 1,
        desc: 'Query language for your API, and a server-side runtime for executing queries',
        similar: ['rest'],
        url: 'https://graphql.org/'
    }
}

export const workExperience: Array<Experience> = [
    {
        role: 'Software Engineer',
        company: 'Pathzero',
        date: 'Jul 2022 -Jul 2023',
        desc: [
            "Developed front-end apps using Vue 3, Typescript, and SCSS.",
            "Managed NestJS backend, enhancing functionality and operations.",
            "Collaborated with designers to create a unified design system via Storybook, improving UI consistency.",
            "Contributed to complex projects, demonstrating strong technical and problem-solving skills.",
            "Adapted quickly across multiple teams and products, adjusting to various code environments.",
            "Known for excellent communication and team morale, encouraging collaboration.",
            "Continuously sought challenges and growth opportunities."],
        techSkills: [
            techStack.vue,
            techStack.nestjs,
            techStack.typescript,
            techStack.nodejs,
            techStack.scss,
            techStack.storybook,
            techStack.react,
            techStack.axios,
            techStack.docker,
            techStack.postman,
            techStack.postgresql,
            techStack.datadog,
            techStack.mockserviceworker,
            techStack.vitest,
            techStack.pinia,
            techStack.vite,
            techStack.playwright,
            techStack.prisma
        ]
    },
    {
        role: 'Software Engineer Intern',
        company: 'Pathzero',
        date: 'Mar 2022 - Jul 2022',
        desc: [
            "Initially joined Pathzero as a software engineer intern, quickly learning and adapting to the company's tech stack.",
            'Developed and maintained front-end applications using Vue 2, Javascript, Typescript, and SCSS, demonstrating an ability to quickly grasp new technologies.',
            'Showcased problem-solving skills and eagerness to embrace challenging tasks, leading to a promotion to a full-time software engineer role.'
        ],
        techSkills: [
            techStack.graphql,
            techStack.loopback,
            techStack.docker,
            techStack.postgresql,
            techStack.launchdarkly,
            techStack.mockserviceworker,
            techStack.vitest,
            techStack.vuex,
            techStack.vite,
            techStack.javascript,
            techStack.vue
        ]
    },
    {
        role: ['Bachelor of Arts and Science:', 'Japanese Studies, Computing'],
        company: 'Macquarie University',
        date: '2016 - 2021',
        desc: [  "Completed a Computing Industry Project with a High Distinction grade, reflecting strong practical experience and community contributions.",
            ["Achieved high grades in key subjects for both majors, including:",['Introduction to Computer Programming','Object-Oriented Programming Practices', "Introduction to 3D Modelling and Rendering (Open University)","Introduction to Games Art and Design (Open University)",'Advanced Japanese I & II','Intercultural Perspectives: Japanese and English', 'Japanese Studies in Action.']],
            "Awarded the Faculty of Arts Highest Achiever in a Unit of Study Award for 'Introduction to Video Games' in 2016.",
            "Pursued a wide array of subjects, from Computer Science and Mathematics to unique courses like 'Performance and Circus Studies' and 'Hieroglyphic Egyptian A,' showcasing a well-rounded and explorative academic approach.",
    ],
    techSkills: [
            techStack.html,
            techStack.css,
            techStack.java,
            techStack.reactnative,
            techStack.python,
            techStack.scala
        ]
    },
    {
        role: ['International Exchange:', 'Japanese Studies, Programming'],
        company: 'Sophia University',
        date: '2019 - 2020',
            techSkills: [{img:'c', size:1},{img:'japanese',size:1}],
        desc: [
            "Participated in a 1 year student exchange program at Sophia University, Japan, immersing in a new academic and cultural environment.",
           [ "Enrolled in specialized courses during the exchange, including", ["Programming Languages", "Information Fluency: C programming","Introduction to Japanese Society","Japanese 4","College Mathematics"]],
            "Enhanced language skills through intensive Japanese studies, contributing to a broader understanding of Japanese culture and society.",
            "Formed close connections with the local community, enriching the cultural experience and fostering a sense of belonging during the exchange program.",
            "Independently rented an apartment through a Japanese real estate agent, demonstrating resourcefulness and adaptability in navigating a foreign housing market."]
    },

    {
        role: 'Convenience Store Clerk',
        company: 'FamilyMart (Japan)',
        date: 'May 2019 - May 2020',
        techSkills: [{img:'famima-subtrainer-en', size:2},{img:'japanese',size:1}, {img:'famima-star-en', size:2} ,{img:'famima-staff-en',size:2}],
        desc: ["Demonstrated strong work ethic and a commitment to exceptional customer service, ensuring a positive experience for customers.",
            "Proactively acquired FamilyMart staff certificates up to the Subtrainer level, demonstrating initiative and a commitment to professional development.",
            "Leveraged strong communication skills and proficiency in the Japanese language to integrate into the team quickly and efficiently"]
    }
]

export const softSkillItems: IconComponentItem[] = [
    { key: 'dependable', icon: HandshakeCheckIcon },
    { key: 'Team motivator', icon: PositiveInfluenceIcon },
    { key: 'Learning', icon: LearningIcon },
    { key: 'Positive attitude', icon: PositivityIcon },
    { key: 'Adaptable', icon: MultitaskingPersonIcon },
    { key: 'Quick learner', icon: LightbulbQuestionIcon },
    { key: 'Attention to detail', icon: MagnifyingGlassIcon },
    { key: 'Collaboration', icon: FistBumpIcon },
    { key: 'Cross-cultural Communication Skills', icon: WorldLanguageIcon }
]

// export const skills = [
//     'Software Development',
//     'Vue.js',
//     'Problem Solving',
//     'TypeScript',
//     'NestJS',
//     'Attention to Detail',
//     'SCSS',
//     'Storybook',
//     'Communication',
//     'Collaboration',
//     'Positive Attitude',
//     'Quick learner',
//     'Product Focus',
//     'Adaptability',
//     'Japanese',
//     'Continuous Improvement Initiatives',
//     'Independent Thinking',
//     'Flexible Approach',
//     'Process Improvement Suggestions',
//     'Technical Software Development',
//     'Autonomy in Handling Complex Projects',
//     'Internal Tooling',
//     'Client-facing Projects',
//     'Programming',
//     'Java',
//     'Python',
//     'Design Systems',
//     'Cross-cultural Communication Skills',
//     'Team Motivation',
//     'Dependable',
//     'Team Leadership',
//     'Technical Documentation',
//     'Store Management',
//     'Mature',
//     'Web Development',
//     'Technical Support',
//     'Troubleshooting',
//     'Object-Oriented Programming (OOP)',
//     'Information Technology',
//     '3D Modeling',
//     'Japanese to English',
//     'Project Management',
//     'Computer Hardware',
//     'Scala',
//     'Computer Oriented',
//     '3D Animation',
//     'Blender',
//     'Windows 10'
// ]


