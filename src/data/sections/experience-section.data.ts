import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
  astro,
  csharp,
  dotnet,
  blazor,
  github,
  html,
  bootstrap,
  sqlServer,
  mysql,
  sqlite,
  gnubash,
  markdown,
  wordpress,
  wix,
  postman,
  javascript,
  pnpm,
  postgreSql,
  react,
  tailwindCss,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Backend developer (Working student)',
      company: 'Freelancer',
      image: import('@/assets/logos/NET-Core.png'),
      dates: [new Date('2023-01'), null],
      description: `
        - In January did some first steps as developer using some proper HTML, CSS and JavaScript. I've developed some smaller applications.        
        - Around May I've extended my knowledge in backend development by developing single page applications with .NET MVC and React.
        - Now I'm developing web apps and services with ASP.NET Core, minimal and web APIs, Blazor and Razor Pages, integrating a database with Entity Framework Core and SQL server.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [csharp(), dotnet(), blazor(), github(), sqlServer()],
      },
      links: [facebook({ url: '#' }), linkedin({ url: '#' })],
    },
    {
      role: 'Wix developer',
      company: 'Albote',
      // image: import('@/assets/logos/facebook-logo.png'),
      dates: [new Date('2023-01'), new Date('2024-02')],
      description: `
        - Describe.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [wix(), bootstrap(), javascript()],
      },
      links: [website({ url: '#' }), instagram({ url: '#' })],
    },
    {
      role: 'Wordpress developer',
      company: 'Freelancer',
      // image: import('@/assets/logos/gitlab-logo.png'),
      dates: [new Date('2018-09'), new Date('2022-10')],
      description: `
        Los buenos inicios en WP.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [wordpress(), html(), javascript()],
      },
      links: [twitter({ url: '#' }), github({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
