export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  detailedDescription: string;
  image: React.ReactNode;
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
}
