export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string | null;
  featured: boolean;
}

export interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  slug: string;
  content: string;
  tags: string[];
}
