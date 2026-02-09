import type { ServiceData } from "@/types";

export const services: ServiceData[] = [
  {
    id: "it-trans",
    slug: "it-transformation",
    title: "IT Transformation",
    shortDescription:
      "A value-driven approach to digital transformation that unifies digital possibilities for organizational survival and growth.",
    fullDescription:
      "We help organizations navigate the complex landscape of digital transformation with a strategic, value-driven approach. Our team unifies digital possibilities across your enterprise, ensuring that technology investments translate directly into business outcomes. From IT strategy and data governance to organizational design and service management, we provide end-to-end transformation services.",
    seoDescription:
      "Quadco Consults IT Transformation services - digital strategy, data governance, organizational design and service management in Nigeria.",
    icon: "Cpu",
    category: "Consulting",
    subServices: [
      "IT Strategy",
      "Data Governance",
      "Organizational Design",
      "Service Management",
    ],
    keyBenefits: [
      "Unified digital roadmap aligned with business goals",
      "Reduced operational costs through process optimization",
      "Scalable architecture designed for growth",
      "Data-driven decision making framework",
    ],
    relatedProjects: ["erp-ahni"],
  },
  {
    id: "infra-ops",
    slug: "infrastructure-operations",
    title: "Infrastructure & Operations",
    shortDescription:
      "Managing hybrid environments with consistent, repeatable services to improve delivery and reduce operational gridlock.",
    fullDescription:
      "Our Infrastructure & Operations practice delivers reliable, scalable environments that keep your business running. We specialize in cloud strategy, disaster recovery planning, service desk standardization, and change management. Our approach ensures consistent, repeatable service delivery while reducing operational complexity.",
    seoDescription:
      "Infrastructure and operations consulting - cloud strategy, disaster recovery, service desk management in Nigeria by Quadco Consults.",
    icon: "Network",
    category: "Cloud",
    subServices: [
      "Cloud Strategy",
      "Disaster Recovery",
      "Service Desk Standardization",
      "Change Management",
    ],
    keyBenefits: [
      "99.9% uptime through robust infrastructure",
      "Seamless hybrid cloud management",
      "Standardized service delivery processes",
      "Reduced Mean Time to Resolution (MTTR)",
    ],
    relatedProjects: ["video-wall-nnpc"],
  },
  {
    id: "engineering",
    slug: "multi-disciplinary-engineering",
    title: "Multi-Disciplinary Engineering",
    shortDescription:
      "Expertise across Civil, Chemical, Mechanical, and Electrical domains for large-scale industrial projects.",
    fullDescription:
      "Quadco Consults brings together expertise across multiple engineering disciplines to deliver comprehensive solutions for large-scale industrial projects. Our engineers are graduates of top institutes with years of industry experience, capable of handling complex civil, chemical, mechanical, and electrical engineering challenges.",
    seoDescription:
      "Multi-disciplinary engineering services - civil, chemical, mechanical, electrical engineering for industrial projects in Nigeria.",
    icon: "Compass",
    category: "Development",
    subServices: [
      "Civil Engineering",
      "Mechanical Systems",
      "Chemical Process Design",
      "Electrical Infrastructure",
    ],
    keyBenefits: [
      "Cross-discipline integration for complex projects",
      "COREN-certified engineering professionals",
      "Large-scale project management expertise",
      "Compliance with Nigerian and international standards",
    ],
    relatedProjects: ["solar-nddc"],
  },
  {
    id: "oil-gas",
    slug: "oil-gas-solutions",
    title: "Oil & Gas Solutions",
    shortDescription:
      "Comprehensive platform support including wellhead services, drilling testing, and automation systems.",
    fullDescription:
      "We provide comprehensive oil and gas solutions covering the full spectrum of upstream and downstream operations. From wellhead services and drilling support to automation, calibration, and waste management, our NUPRC-certified team delivers reliable solutions that meet the demanding requirements of the energy sector.",
    seoDescription:
      "Oil and gas solutions in Nigeria - wellhead services, drilling support, automation, waste management by Quadco Consults.",
    icon: "Fuel",
    category: "Consulting",
    subServices: [
      "Wellhead Services",
      "Automation & Calibration",
      "Welding & Fabrication",
      "Waste Management",
    ],
    keyBenefits: [
      "NUPRC-certified operations",
      "End-to-end platform support capabilities",
      "HSE-compliant processes and procedures",
      "Experienced field operations team",
    ],
  },
  {
    id: "security",
    slug: "security-resilience",
    title: "Security & Resilience",
    shortDescription:
      "Leading-edge cybersecurity consulting to build cyber resilience from the inside out and protect critical assets.",
    fullDescription:
      "Our Security & Resilience practice helps organizations build robust defenses against evolving cyber threats. We take a holistic approach to cybersecurity, combining strategy development, incident management, and data privacy operations to create comprehensive protection for your critical assets and data.",
    seoDescription:
      "Cybersecurity consulting and IT security services in Nigeria - security strategy, incident management, data privacy by Quadco Consults.",
    icon: "ShieldCheck",
    category: "Security",
    subServices: [
      "Security Strategy",
      "Incident Management",
      "Data Privacy Operations",
    ],
    keyBenefits: [
      "ISO 27001-aligned security frameworks",
      "Proactive threat detection and response",
      "Comprehensive data privacy compliance",
      "Security awareness training programs",
    ],
    relatedProjects: ["audit-shafa"],
  },
  {
    id: "advisory",
    slug: "advisory-risk",
    title: "Advisory & Risk",
    shortDescription:
      "Helping clients manage risk and increase operational effectiveness through systematic investment approaches.",
    fullDescription:
      "Our Advisory & Risk practice provides strategic guidance to help organizations navigate uncertainty and make informed decisions. We combine risk management expertise with investment advisory services and business strategy consulting to help clients achieve sustainable growth while managing exposure.",
    seoDescription:
      "Business advisory and risk management consulting in Nigeria - strategy, investment, risk management by Quadco Consults.",
    icon: "Briefcase",
    category: "Consulting",
    subServices: [
      "Risk Management",
      "Discretionary Investment",
      "Business Strategy",
    ],
    keyBenefits: [
      "Data-driven risk assessment frameworks",
      "Strategic investment advisory",
      "Business continuity planning",
      "Regulatory compliance guidance",
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
