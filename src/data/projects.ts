import type { ProjectData } from "@/types";

export const projects: ProjectData[] = [
  {
    id: "p1",
    slug: "erp-ahni",
    title: "ERP Tool Deployment",
    client: "Achieving Health Nigeria Initiative (AHNi)",
    shortDescription:
      "Full development and deployment of an Enterprise Resource Planning tool to optimize operational needs.",
    fullDescription:
      "Quadco Consults was engaged by AHNi to develop and deploy a comprehensive Enterprise Resource Planning (ERP) tool tailored to the organization's unique operational requirements. The solution streamlined workflows across multiple departments, improving data visibility and decision-making capabilities.",
    challenge:
      "AHNi needed a centralized system to manage their complex operations across multiple states in Nigeria, replacing fragmented manual processes that led to data silos and inefficiencies.",
    solution:
      "We developed a custom ERP solution with modules for finance, HR, procurement, and project management. The system was deployed across all AHNi offices with comprehensive staff training.",
    results:
      "40% reduction in operational costs, 2x improvement in reporting speed, and unified data access across all organizational units.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    tags: ["Software", "ERP", "Healthcare"],
    serviceId: "it-trans",
    seoDescription:
      "ERP deployment case study for Achieving Health Nigeria Initiative by Quadco Consults - custom enterprise resource planning solution.",
  },
  {
    id: "p2",
    slug: "video-wall-nnpc",
    title: "Video Wall Upgrade",
    client: "NNPC Limited Command Center",
    shortDescription:
      "Upgrade of display systems and command-and-control infrastructure for national energy monitoring.",
    fullDescription:
      "Quadco Consults delivered a comprehensive video wall upgrade for the NNPC Limited Command Center, enhancing the national energy monitoring capabilities with state-of-the-art display technology and integrated command-and-control systems.",
    challenge:
      "The existing command center display infrastructure was outdated, limiting real-time monitoring capabilities and hindering rapid decision-making for national energy operations.",
    solution:
      "We designed and installed a modern video wall system with high-resolution displays, integrated with real-time data feeds from pipeline monitoring systems, SCADA interfaces, and security cameras.",
    results:
      "Enhanced situational awareness for national energy operations, 99.9% system uptime, and improved response time for incident management.",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200",
    tags: ["Hardware", "Infrastructure", "Energy"],
    serviceId: "infra-ops",
    seoDescription:
      "NNPC Command Center video wall upgrade case study by Quadco Consults - display systems and command-and-control infrastructure.",
  },
  {
    id: "p3",
    slug: "solar-nddc",
    title: "Solar Streetlight Installation",
    client: "Niger Delta Development Commission (NDDC)",
    shortDescription:
      "Emergency installation of solar-powered lighting systems in Tuomo community and environs.",
    fullDescription:
      "Quadco Consults executed an emergency solar streetlight installation project for NDDC in the Tuomo community and surrounding areas, bringing reliable, sustainable lighting to underserved communities in the Niger Delta region.",
    challenge:
      "The Tuomo community and environs lacked reliable public lighting infrastructure, creating safety concerns and limiting economic activity after dark.",
    solution:
      "We designed and installed solar-powered streetlight systems using high-efficiency panels and LED fixtures, engineered to withstand the challenging Niger Delta climate conditions.",
    results:
      "Improved community safety, extended productive hours for local businesses, and zero ongoing electricity costs through sustainable solar power.",
    image:
      "https://images.unsplash.com/photo-1509391366360-fe5bb65858bb?auto=format&fit=crop&q=80&w=1200",
    tags: ["Engineering", "Energy", "Sustainability"],
    serviceId: "engineering",
    seoDescription:
      "Solar streetlight installation case study for NDDC by Quadco Consults - sustainable energy solutions for Nigerian communities.",
  },
  {
    id: "p4",
    slug: "audit-shafa",
    title: "Information Systems Audit",
    client: "A.Y.M. Shafa Limited",
    shortDescription:
      "Comprehensive audit of organizational IT infrastructure to identify risks and improve security posture.",
    fullDescription:
      "Quadco Consults conducted a thorough information systems audit for A.Y.M. Shafa Limited, evaluating their entire IT infrastructure, policies, and procedures to identify vulnerabilities and provide actionable recommendations for improving their security posture.",
    challenge:
      "A.Y.M. Shafa Limited needed an independent assessment of their IT systems to identify potential security vulnerabilities and ensure compliance with industry standards.",
    solution:
      "We performed a comprehensive audit covering network infrastructure, access controls, data management practices, and business continuity plans, benchmarked against ISO 27001 standards.",
    results:
      "Identified and remediated critical security gaps, achieved compliance readiness, and established an ongoing security monitoring framework.",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1200",
    tags: ["Security", "Audit", "Finance"],
    serviceId: "security",
    seoDescription:
      "IT security audit case study for A.Y.M. Shafa Limited by Quadco Consults - comprehensive information systems audit and compliance.",
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getAllProjectTags(): string[] {
  const tags = new Set(projects.flatMap((p) => p.tags));
  return Array.from(tags);
}
