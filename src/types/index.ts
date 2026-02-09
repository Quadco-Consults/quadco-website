export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  seoDescription: string;
  icon: string;
  category: "Consulting" | "Development" | "Security" | "Cloud";
  subServices: string[];
  keyBenefits: string[];
  relatedProjects?: string[];
}

export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  client: string;
  shortDescription: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  results: string;
  image: string;
  tags: string[];
  serviceId?: string;
  seoDescription: string;
}

export interface BlogMeta {
  title: string;
  description: string;
  date: string;
  author: string;
  tags: string[];
  image?: string;
  published: boolean;
  slug: string;
  readingTime: string;
}

export interface NavLink {
  name: string;
  path: string;
}

export interface Certification {
  name: string;
  type: string;
}
