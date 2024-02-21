import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  apolloGraphql,
  eslint,
  firebase,
  mongoDb,
  supabase,
  typescript,
  angular,
  vue,
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

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        csharp({
          level: 4,
          description:
            'Desc.',
        }),
        dotnet({ level: 3 }),        
        blazor({
          level: 2,
          description:
            'Desc.',
        }),
        astro({
          level: 2,
          description: 'Desc.',
        }),
        html({
          level: 4,
          description: 'Desc.',
        }),
        javascript({ level: 3 }),
        react({ level: 2 }),
        tailwindCss({ level: 2 }),
        bootstrap({ level: 5 }),
        github({
          level: 3,
          description:
            'Desc.',
        }),
        sqlServer({
          level: 2,
          description:
            'Desc.',
        }),
        postgreSql({ level: 2 }),
        mysql({ level: 1 }),
        sqlite({ level: 3 }),
        wordpress({
          level: 4,
          description:
            'Desc.',
        }),
        wix({
          level: 4,
          description:
            'Desc.',
        }),
      ],
    },
    {
      title: 'I want to learn',
      skills: [apolloGraphql(), typescript(), supabase(), firebase(), mongoDb(), eslint(), vue(), angular()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:es-variant', name: 'Spanish - native' },
        { icon: 'circle-flags:us', name: 'English - C1' }
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
