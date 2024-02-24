import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, mockups, website } from '../helpers/links';
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
  postgreSql,
  react,
  tailwindCss,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    //  {
    //   name: 'Golden Bulls',
    //   image: import('@/assets/portfolio/project-1.jpeg'),
    //   dates: [new Date('2020-03'), null],
    //   details: [
    //     { label: 'Team size', value: '1 person' },
    //     { label: 'My role', value: ['Front-end Developer', 'Designer'] },
    //     { label: 'Company', value: 'None' },
    //     { label: 'Category', value: ['Web app', 'Open source'] },
    //   ],
    //   pdfDetails: [
    //     { label: 'Demo', value: 'https://golden-bulls-d73jd7.netlify.app', url: '#' },
    //     { label: 'Repository', value: 'https://github.com/mark-freeman/golden-bulls', url: '#' },
    //   ],
    //   screenshots: [
    //     { src: import('@/assets/portfolio/project-1-screenshot-1.jpg'), alt: 'First screenshot' },
    //     { src: import('@/assets/portfolio/project-1-screenshot-2.jpg'), alt: 'Second screenshot' },
    //     { src: import('@/assets/portfolio/project-1-screenshot-3.jpg'), alt: 'Third screenshot' },
    //   ],
    //   description:
    //     'In tristique vulputate augue vel egestas. Quisque ac imperdiet tortor, at lacinia ex. Duis vel ex hendrerit, commodo odio sed, aliquam enim. Ut arcu nulla, tincidunt eget arcu eget, molestie vulputate nisi. Nunc malesuada leo et est iaculis facilisis.',
    //   tagsList: {
    //     title: 'Technologies',
    //     tags: [nextJs(), sass(), pnpm(), eslint(), prettier()],
    //   },
    //   links: [mockups({ url: '#' }), demo({ url: '#' })],
    // },
    {
      name: 'Gestión Del Patrimonio',
      image: import('@/assets/portfolio/project-egdp.jpeg'),
      dates: [new Date('2018-01'), new Date('2020-12')],
      details: [
        { label: 'Team size', value: '3 people' },
        { label: 'My role', value: ['Wordpress Developer', 'SysAdmin'] },
        { label: 'Company', value: 'EGDP' },
        { label: 'Category', value: ['Web page'] },
      ],
      pdfDetails: [
        { label: 'Gestión Del Patrimonio', value: 'https://egdp.ohc.cu/', url: 'https://egdp.ohc.cu/' },
      ],
      description:
        'Contribuimos de manera sostenible en la obtención de recursos financieros, mediante  gestiones de  comercio, arrendamiento, administración de espacios, gastronomía y recreación dentro del Centro Histórico de La Habana, brindando un servicio de calidad, profesionalidad, singularidad y seguridad, centrado en los valores históricos y patrimoniales de una ciudad viva.',
      tagsList: {
        title: 'Technologies',
        tags: [wordpress(), javascript(), mysql()],
      },
      links: [website({ url: 'https://egdp.ohc.cu/' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
