export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  project: string;
}

export const testimonialsIntro =
  "Don't just take our word for it. Here's what our clients have to say about working with Keysolutus on their electrical engineering projects.";

export const testimonials: Testimonial[] = [
  {
    quote:
      "Keysolutus delivered exceptional electrical design for our data center expansion. Their expertise in LV/MV switchgear and PLC automation was instrumental in achieving our uptime requirements. The team's attention to detail and proactive approach made the entire project smooth and successful.",
    name: "Praveen T",
    role: "Engineering Director",
    company: "TechData Solutions",
    project: "Data Center Electrical Infrastructure",
  },
  {
    quote:
      "Working with Keysolutus on our hospital's electrical systems was outstanding. Their understanding of critical power requirements and life safety systems gave us complete confidence. The project was delivered on time, within budget, and exceeded our expectations.",
    name: "Priyanka K",
    role: "Operations Manager",
    company: "Metro Healthcare Systems",
    project: "Hospital Power Distribution System",
  },
  {
    quote:
      "The Motor Control Center design provided by Keysolutus transformed our manufacturing operations. Their knowledge of protection schemes and variable frequency drives optimized our energy efficiency while ensuring operational reliability. Excellent collaboration throughout.",
    name: "Lokesh V",
    role: "Plant Manager",
    company: "Industrial Dynamics Ltd",
    project: "Industrial MCC & VFD Systems",
  },
];
