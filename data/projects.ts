export interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
}

export const projectFilters = [
  "All",
  "LV & MV Switchgear",
  "Critical Power Systems",
  "MCC Design",
  "Smart Building Systems",
  "Protection Systems",
  "Web Development",
  "Software Development",
];

export const projects: Project[] = [
  {
    id: "data-center-power-distribution",
    category: "LV & MV Switchgear",
    title: "Data Center Power Distribution",
    description:
      "Complete electrical switchgear system design for a 50MW data center with redundant power distribution and PLC automation controls.",
    tags: ["11KV Indoor Panels", "PLC Automation", "Redundant Systems", "24/7 Monitoring"],
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&crop=center",
    imageAlt: "Data Center Power Distribution",
  },
  {
    id: "hospital-electrical-infrastructure",
    category: "Critical Power Systems",
    title: "Hospital Electrical Infrastructure",
    description:
      "Comprehensive electrical design for a 500-bed hospital including emergency power systems, isolation panels, and life safety systems.",
    tags: ["Emergency Power", "Life Safety Systems", "Isolation Panels", "Backup Generators"],
    image:
      "https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=800&h=600&fit=crop&crop=center",
    imageAlt: "Hospital Electrical Infrastructure",
  },
  {
    id: "industrial-motor-control-center",
    category: "MCC Design",
    title: "Industrial Motor Control Center",
    description:
      "Design and implementation of a 4000A Motor Control Center with variable frequency drives and advanced protection schemes.",
    tags: ["Variable Frequency Drives", "Advanced Protection", "4000A Capacity", "Remote Monitoring"],
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop&crop=center",
    imageAlt: "Industrial Motor Control Center",
  },
  {
    id: "substation-protection-control",
    category: "Protection Systems",
    title: "Substation Protection & Control",
    description:
      "Design of protection and control schemes for 33KV/11KV substation including relay coordination and SCADA integration.",
    tags: ["Relay Coordination", "SCADA Integration", "Fault Analysis", "Remote Control"],
    image:
      "https://images.unsplash.com/photo-1581094651181-35942459ef62?w=800&h=600&fit=crop&crop=center",
    imageAlt: "Substation Protection & Control",
  },
  {
    id: "renewable-energy-integration",
    category: "Solar & Wind Systems",
    title: "Renewable Energy Integration",
    description:
      "Electrical design for 10MW solar farm including grid interconnection, protection systems, and power quality management.",
    tags: ["Grid Interconnection", "Power Quality", "MPPT Control", "Grid Compliance"],
    image:
      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800&h=600&fit=crop&crop=center",
    imageAlt: "Renewable Energy Integration",
  },
  {
    id: "ecommerce-platform-development",
    category: "Web Development",
    title: "E-Commerce Platform Development",
    description:
      "Complete e-commerce solution for a manufacturing company including custom CMS, payment integration, inventory management, and responsive design.",
    tags: ["Custom CMS", "Payment Integration", "Inventory Management", "Mobile Responsive"],
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center",
    imageAlt: "E-Commerce Platform Development",
  },
];
