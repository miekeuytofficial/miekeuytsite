
export const testimonials = [
    {
        quoterInfo: { name: 'Charbel Ayoub', company: 'Pathzero', role: 'Co-Founder & CTO', profileUrl: `https://www.linkedin.com/in/charbelayoub/` },
        imgUrl:
            'https://media.licdn.com/dms/image/C5603AQHPd_kkhWZxJQ/profile-displayphoto-shrink_100_100/0/1645569976613?e=1695254400&v=beta&t=PEPGq2ljH1jHC3t4z4SBombM-WiE_p1ijvQkDE6Uh2w',
        quote: `Monique joined us as an intern and quickly became an integral part of the team. She shaped our engineering culture through her curiosity and willingness to learn and apply new things. She challenges herself daily and has a strong sense of autonomy in taking on complex projects. Technically, Monique is extremely capable. She is a great communicator and a team player, always willing to support her colleagues.
It was inspiring to watch her journey as she transitioned into a software engineer role. She is dependable, mature, and would be a great addition to any team. During her time with us, Monique made significant contributions to both internal tooling and critical client-facing projects, showcasing her exceptional problem-solving skills and dedication to excellence.`
    },
    {
        quoterInfo: { name: 'Ian Glass', company: 'Pathzero', role: 'Engineering Manager', profileUrl: 'https://www.linkedin.com/in/ian-glass-01979b7b/' }, imgUrl: 'https://media.licdn.com/dms/image/C5603AQFPnWWTLyHeEA/profile-displayphoto-shrink_100_100/0/1624573234892?e=1695859200&v=beta&t=YpF-zvHmRurREHC23dzu81TgF2HuKj2PFnOKlhNLwGQ', quote: `Monique is an absolute pleasure to work with, bringing a positive attitude everyday.

Her keen eye for detail coupled with a burning passion for software development has directly led to quality work in every project she's been assigned to.

She's always keen to learn and always has a plethora of positive suggestions for not just improving her own work process, but the entire SDLC of the team.

I couldn't recommend her enough and I'm excited to see how she further grows and applies herself in the future!` },
    {
        quoterInfo: { name: 'Michael Palimaka', role: 'Senior Cloud DevOps Engineer', company: 'Pathzero' }, quote: `Monique is an exceptional engineer, with the rare ability to combine excellence in software development with a holistic product focus. She has consistently delivered significant value across the entire SDLC process, all the way through discovery, design, development, testing, and maintenance.

She has also driven numerous continuous improvement initiatives, unlocking new capabilities and efficiencies across the team.

Monique's dedication, collaboration, enthusiasm, and team spirit made it a privilege to work with her and I can't recommend highly enough`},
    {
        quoterInfo: { name: 'Carl Prins', company: 'Pathzero', role: 'Co-Founder & CEO', profileUrl: `https://www.linkedin.com/in/carlprins/` },
        imgUrl: `https://media.licdn.com/dms/image/C5603AQFlvvD_NApbCw/profile-displayphoto-shrink_100_100/0/1645741854224?e=1695254400&v=beta&t=HnNXT_XqR8QwmeoXYU46LeicnPSzjr27sYIoG7KVmZA`,
        quote: `It has been a pleasure seeing Monique develop from being an intern to fully fledged software engineer.
She has been a team player and part of building a great culture.
She has a real attention to detail and has come up with creative ways to problem solve.
I would highly recommend Monique for a software engineer role.`
    },
    {
        quoterInfo: {
            name: 'Andrew Keith Arlen',
            company: 'Pathzero',
            role: 'Principal Software Engineer',
            profileUrl: 'https://www.linkedin.com/in/andrewkeitharlen/'
        },
        imgUrl:
            'https://media.licdn.com/dms/image/C4D03AQF57KQlAMYZUA/profile-displayphoto-shrink_100_100/0/1516982075732?e=1695254400&v=beta&t=PYUlMC2z0TygTwCHRTmdZu_18l-8jsBbYj7TeXqNMlE',
        quote: `Monique brings joy and enthusiasm to everything she does. Her infectious positivity lifts her team and is rivaled by her technical software development capabilities, which is second to none. She has an eye for detail coupled with a deep well of knowledge. A very powerful combination.
Having Monique at the daily standup was the perfect start to the day.`
    },
    {
        imgUrl:
            'https://media.licdn.com/dms/image/C4D03AQFp3Wv94DkFPw/profile-displayphoto-shrink_100_100/0/1565652114100?e=1695254400&v=beta&t=7AW0nNcHQ6Yxj3X3owpcjacxKCnZc7E1Ij7nksgk1Cc',
        quoterInfo: {
            name: 'Greyden Scott',
            company: 'Pathzero',
            role: 'Senior Software Engineer',
            profileUrl: 'https://www.linkedin.com/in/greyden-scott-734122175/'
        },
        quote: `I had the pleasure of working alongside Monique as a software developer, and I must say, she is truly outstanding. Monique's ability to learn and adapt to new challenges is unparalleled. She tackles complex problems with ease and consistently delivers top-notch solutions.
But that's not all—Monique's positivity is infectious. She radiates enthusiasm, making the workplace a more enjoyable and productive environment for everyone. Her can-do attitude and collaborative spirit are truly commendable.
In summary, I highly recommend Monique to any team looking for a talented and adaptable software developer who brings positivity and energy to every project. It was a privilege to work with her, and I have no doubt she will continue to excel in all her future endeavors.`
    }
]

export const skills = [
    "Software Development",
    "Vue.js",
    "Problem Solving",
    "TypeScript",
    "NestJS",
    "Attention to Detail",
    "SCSS",
    "Storybook",
    "Communication",
    "Collaboration",
    "Positive Attitude",
    "Quick learner",
    "Product Focus",
    "Adaptability",
    "Japanese",
    "Continuous Improvement Initiatives",
    "Independent Thinking",
    "Flexible Approach",
    "Process Improvement Suggestions",
    "Technical Software Development",
    "Autonomy in Handling Complex Projects",
    "Internal Tooling",
    "Client-facing Projects",
    "Programming",
    "Java",
    "Python",
    "Design Systems",
    "Cross-cultural Communication Skills",
    "Team Motivation",
    "Dependable",
    "Team Leadership",
    "Technical Documentation",
    "Store Management",
    "Mature",
    "Web Development",
    "Technical Support",
    "Troubleshooting",
    "Object-Oriented Programming (OOP)",
    "Information Technology",
    "3D Modeling",
    "Japanese to English",
    "Project Management",
    "Computer Hardware",
    "Scala",
    "Computer Oriented",
    "3D Animation",
    "Blender",
    "Windows 10",

]

type Experience = { role: string | string[], company: string, date: string };
export const workExperience: Array<Experience>[] = [
    [{ role: 'Software Engineer', company: 'Pathzero', date: 'Jul 2022 -Jul 2023' },
    { role: 'Software Engineer Intern', company: 'Pathzero', date: 'Mar 2022 - Jul 2022' }],

    [{ role: ['Bachelor of Arts and Science:', 'Japanese Studies, Computing'], company: 'Macquarie University', date: '2016 - 2021' },
    { role: ['International Exchange:', 'Japanese Studies, Programming'], company: 'Sophia University', date: '2019 - 2020' },
    ], [{ role: 'Convenience Store Clerk', company: "FamilyMart (Japan)", date: "May 2019 - May 2020" }]
];