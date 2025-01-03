export interface BlogType {
  id: number;
  title?: string;
  text?: string;
  tags?: string[];
  image?: string;
  href: string;
}

export const BlogData: BlogType[] = [
  {
    id: 1,
    title: 'Blog 1',
    text: 'Content of blog 1',
    tags: ['Quantum', 'AI', 'Tech'],
    href: '/blog/1',
    image: '/quantum-25.avif',
  },
  {
    id: 2,
    title: 'Blog 2',
    text: 'Content of blog 2',
    tags: ['Development', 'React', 'JavaScript'],
    href: '/blog/2',
    image: '/quantum-25.avif',
  },
  {
    id: 3,
    title: 'Blog 3',
    text: 'Content of blog 3',
    tags: ['Science', 'Innovation', 'Research'],
    href: '/blog/3',
    image: '/quantum-25.avif',
  },
  {
    id: 4,
    title: 'Blog 4',
    text: 'Content of blog 4',
    tags: ['Open Source', 'Community', 'Collaboration'],
    href: '/blog/4',
    image: '/quantum-25.avif',
  },
  {
    id: 5,
    title: 'Blog 5',
    text: 'Content of blog 5',
    tags: ['Blockchain', 'Cryptography', 'Security'],
    href: '/blog/5',
    image: '/quantum-25.avif',
  },
  {
    id: 6,
    title: 'Blog 6',
    text: 'Content of blog 6',
    tags: ['Cloud', 'DevOps', 'Containers'],
    href: '/blog/6',
    image: '/quantum-25.avif',
  },
  {
    id: 7,
    title: 'Blog 7',
    text: 'Content of blog 7',
    tags: ['Machine Learning', 'Data Science', 'AI'],
    href: '/blog/7',
    image: '/quantum-25.avif',
  },
  {
    id: 8,
    title: 'Blog 8',
    text: 'Content of blog 8',
    tags: ['Software Development', 'Agile', 'Scrum'],
    href: '/blog/8',
    image: '/quantum-25.avif',
  },
  {
    id: 9,
    title: 'Blog 9',
    text: 'Content of blog 9',
    tags: ['Mobile Apps', 'iOS', 'Android'],
    href: '/blog/9',
    image: '/quantum-25.avif',
  },
  {
    id: 10,
    title: 'Blog 10',
    text: 'Content of blog 10',
    tags: ['Quantum Computing', 'Physics', 'Mathematics'],
    href: '/blog/10',
    image: '/quantum-25.avif',
  },
];
