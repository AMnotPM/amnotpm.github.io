import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, linkedin, twitter } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/my-image.jpeg'),
  fullName: 'Miguel Gutierrez',
  role: 'Junior Developer in ASP.NET Core',
  details: [
    { label: 'Telegram', value: '@AMnotPM', url: 'https://t.me/AMnotPM' },
    { label: 'Email', value: 'handsomejack91@duck.com', url: 'mailto:handsomejack91@duck.com' },
    { label: 'From', value: 'Havana, Cuba' },
    // { label: 'Salary range', value: '18 000 - 25 000 PLN' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '+53 5 361 2159' },
    { label: 'Email', value: 'handsomejack91@duck.com' },
    { label: 'LinkedIn', value: '/in/mark-freeman', url: 'https://www.linkedin.com/in/amnotpm' },
    { label: 'GitHub', value: '/mark-freeman', url: 'https://www.github.com/amnotpm/' },
    { label: 'Website', value: 'https://amnotpm.github.io/', url: '/', fullRow: true },
  ],
  description:
    'I love keeping up with the latest technology trends and always looking to learn new skills and techniques to improve my work. In my free time, I enjoy creating personal projects and experimenting with new technologies. If you are interested in working together or learn more about my experience and skills, please contact me.',
  tags: [{ name: 'Open for freelance' }, { name: 'Working on side project' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV-Miguel_Gutierrez.pdf',
  },
  links: [facebook({ url: '#' }), github({ url: '#' }), linkedin({ url: '#' }), twitter({ url: '#' })],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
