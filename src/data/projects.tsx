// file: data/projects.ts
export interface Project {
  id: string;
  title: string;
  year: string;
  description: string;
  tech: string[];            // array of tech keywords
  coverImage: string;        // path to a representative image (from public folder)
  images?: { src: string; caption: string; }[];  // additional images for details
  demoLink?: string;
  codeLink?: string;
}

export const projects: Project[] = [
  {
    id: 'tidder',
    title: 'Tidder (ReddiT)',
    year: '2023 - 2024',
    description: 'Fully functional social media platform, a lightweight, smart, and secure alternative to Reddit. Responsive design with PWA support.',
    tech: ['Angular', 'FastAPI', 'MySQL', 'Firebase', 'Angular Material', 'RxJS', 'PWA', 'Pillow', 'GPT-3.5 Turbo', 'GPT-4 Vision', 'PyTorch', 'Microservices', 'ngrok', 'nginx'],
    coverImage: '/tidder/feed.jpg',  // representative screenshot or logo
    images: [
      { src: '/tidder/feed.jpg', caption: 'Reddit-like post and comment system, with feed customization' },
      { src: '/tidder/er.jpg', caption: 'Robust database design with efficient schema' },
      { src: '/tidder/server.jpg', caption: 'Server entirely self-hosted (using ngrok for tunneling, nginx for reverse proxy)' },
      { src: '/tidder/bot.jpg', caption: 'LLM-based bots increase user engagement by generating posts, comments, and chatting with users' },
      { src: '/tidder/chat.jpg', caption: 'Instagram-like chat system – supports text, image, video, file upload, and voice messages' }
    ],
    demoLink: 'https://tidder-by-steve.web.app',
    codeLink: 'https://github.com/yourusername/tidder-project'  // replace with actual repo URL if available
  },
  {
    id: 'yava-tanks',
    title: 'Yava Tanks',
    year: '2022',
    description: 'A customizable World of Tanks game made entirely in Java with 100% unit testing coverage.',
    tech: ['Java', 'JUnit'],
    coverImage: '/tank/logo.jpg',  // e.g., a logo or main screenshot
    images: [
      { src: '/tank/customizable.jpg', caption: 'Fully customizable gameplay – every gamer\'s dream!' },
      { src: '/tank/uml.jpg', caption: 'Peak OOP design (comprehensive UML diagrams for reference)' },
      { src: '/tank/platforms.jpg', caption: 'Available on all platforms (download, compile, and run on any machine)' },
      { src: '/tank/settings.jpg', caption: 'More settings, including adjustable difficulty levels' }
    ],
    // No demoLink for this project (game might not be hosted), only codeLink:
    codeLink: 'https://github.com/yourusername/yava-tanks'
  }
  // ...Add more project objects here for all your projects...
];
