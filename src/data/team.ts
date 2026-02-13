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
    name: "Bello Adamu",
    role: "Operations Director",
    image: "/images/bello.jpeg",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "muhammad@quadcoconsults.com.ng",
    },
  },
  {
    id: "t2",
    name: "Muhammad Ilu",
    role: "Managing Director",
    image: "/images/Mr-Mo.jpeg",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "muhammad.ilu@quadcoconsults.com",
    },
  },
  {
    id: "t3",
    name: "Fatima Abdullahi",
    role: "IT Solutions Lead",
    image: "/images/fatima.jpeg",
    socials: {
      linkedin: "#",
      email: "fatima@quadcoconsults.com",
    },
  },
  {
    id: "t4",
    name: "Chidi Okafor",
    role: "Cybersecurity Consultant",
    image: "/images/chidi.jpg",
    socials: {
      linkedin: "#",
      twitter: "#",
      email: "chidi@quadcoconsults.com",
    },
  },
  // {
  //   id: "t5",
  //   name: "Ngozi Eze",
  //   role: "Project Manager",
  //   image: "/images/portrait-professor-work-educational-system.jpg",
  //   socials: {
  //     linkedin: "#",
  //     twitter: "#",
  //     email: "ngozi@quadcoconsults.com",
  //   },
  // },
  // {
  //   id: "t6",
  //   name: "Tunde Adeyemi",
  //   role: "Oil & Gas Lead",
  //   image: "/images/hero-bg.jpeg",
  //   socials: {
  //     linkedin: "#",
  //     email: "tunde@quadcoconsults.com",
  //   },
  // },
];
