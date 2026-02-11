export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  socials?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: "t1",
    name: "Muhammad Suleiman Ilu",
    role: "Managing Director",
    image:
      "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800&h=1000",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "muhammad@quadcoconsults.com.ng",
    },
  },
  {
    id: "t2",
    name: "Bello Muhammad",
    role: "Head of Engineering",
    image:
      "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?auto=format&fit=crop&q=80&w=800&h=1000",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "bello@quadcoconsults.com.ng",
    },
  },
  {
    id: "t3",
    name: "Fatima Abdullahi",
    role: "IT Solutions Lead",
    image:
      "https://images.unsplash.com/photo-1589156280159-27698a70f29e?auto=format&fit=crop&q=80&w=800&h=1000",
    socials: {
      linkedin: "#",
      email: "fatima@quadcoconsults.com",
    },
  },
  {
    id: "t4",
    name: "Chidi Okafor",
    role: "Security Consultant",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=1000",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "chidi@quadcoconsults.com",
    },
  },
  {
    id: "t5",
    name: "Ngozi Eze",
    role: "Project Manager",
    image:
      "https://images.unsplash.com/photo-1611432579699-484f7990b127?auto=format&fit=crop&q=80&w=800&h=1000",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "ngozi@quadcoconsults.com",
    },
  },
  {
    id: "t6",
    name: "Tunde Adeyemi",
    role: "Oil & Gas Lead",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800&h=1000",
    socials: {
      linkedin: "#",
      email: "tunde@quadcoconsults.com",
    },
  },
];
