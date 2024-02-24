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
  wordpress,
  wix,
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
      image: import('@/assets/logos/NET-Core2.jpg'),
      dates: [new Date('2023-01'), null],
      description: `
        - In January did some first steps as developer using some proper HTML, CSS and JavaScript. I've developed some smaller applications.        
        - Around May I've extended my knowledge in backend development by developing single page applications with .NET MVC and React.
        - Now I'm developing web apps and services with ASP.NET Core, minimal and web APIs, Blazor and Razor Pages, integrating a database with Entity Framework Core and SQL server.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [csharp(), dotnet(), blazor(), github(), sqlServer(), astro(), tailwindCss(), react()],
      },
      links: [facebook({ url: '#' }), linkedin({ url: '#' })],
    },
    {
      role: 'Wix developer',
      company: 'Albote',
      // image: import('@/assets/logos/facebook-logo.png'),
      dates: [new Date('2023-01'), new Date('2024-02')],
      description: `
      Looking for fast deployment solutions and focused on e-commerce, I decided to work with platforms like WiX, 
      finding in this one the necessary to satisfy several customers looking for a good platform to promote and sell their products and services. 
      I have been working with WiX for a year now, I have built 4 sites on the platform and I maintain two of them. 
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
      I started working with Wordpress as a hobby, we had a metropolitan network in the city and I was dedicated to set up my servers and publish articles for the local intranet. 
      Over the years I worked in a magazine where I got involved in both roles of editor/administrator. 
      In the last official jobs I had to develop from scratch several institutional sites for the entities I worked for. 
      `,
      tagsList: {
        title: 'Technologies',
        tags: [wordpress(), html(), javascript(), sqlite(), mysql()],
      },
      links: [twitter({ url: '#' }), github({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
