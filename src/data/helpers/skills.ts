import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const apolloGraphql = createSkillFactory({
  name: 'Apollo GraphQL',
  icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  url: 'https://www.apollographql.com/',
});

export const astro = createSkillFactory({
  name: 'Astro',
  icon: 'simple-icons:astro',
  iconColor: '#FF5D01',
  url: 'https://astro.build/',
});

export const chakraUi = createSkillFactory({
  name: 'Chakra UI',
  icon: 'simple-icons:chakraui',
  iconColor: '#319795',
  url: 'https://chakra-ui.com/',
});

export const cypress = createSkillFactory({
  name: 'Cypress',
  icon: 'simple-icons:cypress',
  iconColor: '#17202C',
  url: 'https://www.cypress.io/',
});

export const eslint = createSkillFactory({
  name: 'ESLint',
  icon: 'simple-icons:eslint',
  iconColor: '#4B32C3',
  url: 'https://eslint.org/',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'simple-icons:firebase',
  iconColor: '#FFCA28',
  url: 'https://firebase.google.com/',
});

export const jest = createSkillFactory({
  name: 'Jest',
  icon: 'simple-icons:jest',
  iconColor: '#C21325',
  url: 'https://jestjs.io/',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const nestJs = createSkillFactory({
  name: 'NestJS',
  icon: 'simple-icons:nestjs',
  iconColor: '#E0234E',
  url: 'https://nestjs.com/',
});

export const nextJs = createSkillFactory({
  name: 'Next.js',
  icon: 'simple-icons:nextdotjs',
  iconColor: '#000000',
  url: 'https://nextjs.org/',
});

export const nx = createSkillFactory({
  name: 'Nx',
  icon: 'simple-icons:nx',
  iconColor: '#143055',
  url: 'https://nx.dev/',
});

export const pnpm = createSkillFactory({
  name: 'pnpm',
  icon: 'simple-icons:pnpm',
  iconColor: '#F69220',
  url: 'https://pnpm.io/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const prettier = createSkillFactory({
  name: 'Prettier',
  icon: 'simple-icons:prettier',
  iconColor: '#F7B93E',
  url: 'https://prettier.io/',
});

export const react = createSkillFactory({
  name: 'React.js',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const reactQuery = createSkillFactory({
  name: 'React Query',
  icon: 'simple-icons:reactquery',
  iconColor: '#FF4154',
  url: 'https://tanstack.com/query',
});

export const sass = createSkillFactory({
  name: 'SASS',
  icon: 'simple-icons:sass',
  iconColor: '#CC6699',
  url: 'https://sass-lang.com/',
});

export const supabase = createSkillFactory({
  name: 'Supabase',
  icon: 'simple-icons:supabase',
  iconColor: '#3ECF8E',
  url: 'https://supabase.io/',
});

export const tailwindCss = createSkillFactory({
  name: 'Tailwind CSS',
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  url: 'https://tailwindcss.com/',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

export const vue = createSkillFactory({
  name: 'Vue.js',
  icon: 'simple-icons:vuedotjs',
  iconColor: '#4FC08D',
  url: 'https://vuejs.org/',
});

/// mine

export const csharp = createSkillFactory({
  name: 'C Sharp (C#)',
  icon: 'simple-icons:csharp',
  iconColor: '#684D95',
  url: 'https://docs.microsoft.com/en-us/dotnet/csharp/index',
});

export const dotnet = createSkillFactory({
  name: '.NET Core',
  icon: 'simple-icons:dotnet',
  iconColor: '#621EE5',
  url: 'https://dotnet.microsoft.com/',
});

export const blazor = createSkillFactory({
  name: 'Blazor',
  icon: 'simple-icons:blazor',
  iconColor: '#512BD4',
  url: 'https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor',
});

export const javascript = createSkillFactory({
  name: 'JavaScript',
  icon: 'simple-icons:javascript',
  iconColor: '#E7A42B',
  url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
});

export const github = createSkillFactory({
  name: 'Github',
  icon: 'simple-icons:github',
  iconColor: '#161614',
  url: 'https://github.com/',
});

export const html = createSkillFactory({
  name: 'Html',
  icon: 'simple-icons:html',
  iconColor: '#E34E26',
  url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
});

export const bootstrap = createSkillFactory({
  name: 'Bootstrap',
  icon: 'simple-icons:bootstrap',
  iconColor: '#7952B3',
  url: 'https://getbootstrap.com/',
});

export const sqlServer = createSkillFactory({
  name: 'SqlServer',
  icon: 'simple-icons:microsoftsqlserver',
  iconColor: '#A91D22',
  url: 'https://www.microsoft.com/',
});

export const mysql = createSkillFactory({
  name: 'MySQL',
  icon: 'simple-icons:mysql',
  iconColor: '#00688F',
  url: 'https://www.mysql.com/',
});

/* export const postgresql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#326690',
  url: 'https://www.postgresql.org/',
}); */

export const sqlite = createSkillFactory({
  name: 'SQLite',
  icon: 'simple-icons:sqlite',
  iconColor: '#003B57',
  url: 'https://www.sqlite.org/',
});

export const gnubash = createSkillFactory({
  name: 'Bash',
  icon: 'simple-icons:gnubash',
  iconColor: '#1B1B1F',
  url: 'https://www.gnu.org/software/bash',
});

export const markdown = createSkillFactory({
  name: 'Markdown',
  icon: 'simple-icons:markdown',
  iconColor: '#989898',
  url: 'https://daringfireball.net/projects/markdown',
});

export const wordpress = createSkillFactory({
  name: 'Wordpress',
  icon: 'simple-icons:wordpress',
  iconColor: '#00749A',
  url: 'https://wordpress.org/',
});

export const wix = createSkillFactory({
  name: 'Wix',
  icon: 'simple-icons:wix',
  iconColor: '#000000',
  url: 'https://wix.com/',
});

export const postman = createSkillFactory({
  name: 'Postman',
  icon: 'simple-icons:postman',
  iconColor: '#FFA841',
  url: 'https://www.postman.com/',
});

export const insomnia = createSkillFactory({
  name: 'Insomnia',
  icon: 'simple-icons:insomnia',
  iconColor: '#800080',
  url: 'https://insomnia.rest/',
});