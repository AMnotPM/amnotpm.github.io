import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'IT Technician',
      institution: 'Osvaldo Herrera Technical High School',
      // image: import('@/assets/logos/wroclaw-university-of-technology.jpg'),
      dates: [new Date('2006.09'), new Date('2009.06')],
      description: 'My first steps in informatics earning a technical degree at it.',
      links: [website({ url: '#' })],
    },
    {
      title: 'Graduate in Information Sciences',
      institution: 'Faculty of Communication of the University of Havana',
      // image: import('@/assets/logos/wroclaw-university-of-technology.jpg'),
      dates: [new Date('2016.9'), new Date('2022.10')],
      description: "Bachelor's degree. A lifelong learning in the information and communication fields in the context of the information society.",
      links: [website({ url: '#' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
