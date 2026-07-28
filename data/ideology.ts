import type { LucideIcon } from "lucide-react";
import {
  HandHeart,
  Lightbulb,
  Globe2,
  HardHat,
  Users,
  BookOpen,
} from "lucide-react";

export const ideologyIntro =
  "At Keysolutus, our ideology revolves around delivering value through ownership. We believe in building lasting partnerships through innovation, excellence, and unwavering commitment to your electrical engineering success.";

export interface CorePrinciple {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const corePrinciples: CorePrinciple[] = [
  {
    icon: HandHeart,
    title: "Ownership & Accountability",
    description:
      "We take complete ownership of every project, treating your success as our own. Every team member is empowered and accountable for delivering excellence.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Through Technology",
    description:
      "We leverage cutting-edge software tools and methodologies to deliver innovative solutions that push the boundaries of electrical engineering.",
  },
  {
    icon: Globe2,
    title: "Time-Zone Agnostic Delivery",
    description:
      "Our global team enables seamless project delivery across multiple time zones, reducing overall delivery time while maintaining quality standards.",
  },
  {
    icon: HardHat,
    title: "Safety First Approach",
    description:
      "Safety is paramount in everything we do. We design systems that not only perform optimally but also prioritize the safety of people and equipment.",
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    description:
      "We work as an extension of your team, collaborating closely to understand your unique requirements and deliver tailored solutions.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description:
      "We stay at the forefront of industry trends, continuously updating our knowledge and skills to provide the most current and effective solutions.",
  },
];

export interface MethodologyStep {
  number: string;
  title: string;
  description: string;
}

export const methodologySteps: MethodologyStep[] = [
  {
    number: "01",
    title: "Discovery & Analysis",
    description:
      "We begin by thoroughly understanding your requirements, challenges, and objectives through detailed consultations and technical assessments.",
  },
  {
    number: "02",
    title: "Conceptual Design",
    description:
      "Our experts create comprehensive conceptual designs that form the foundation for efficient, scalable, and reliable electrical systems.",
  },
  {
    number: "03",
    title: "Detailed Engineering",
    description:
      "We develop detailed schematics, drawings, and specifications using industry-leading software tools for precise implementation.",
  },
  {
    number: "04",
    title: "Quality Assurance",
    description:
      "Rigorous quality checks and reviews ensure that all designs meet industry standards and your specific technical requirements.",
  },
  {
    number: "05",
    title: "Implementation Support",
    description:
      "We provide ongoing support during implementation, including factory coordination and troubleshooting assistance.",
  },
  {
    number: "06",
    title: "Commissioning & Handover",
    description:
      "Complete project handover with comprehensive documentation, training, and post-implementation support.",
  },
];

export const mission = {
  heading: "Our Mission",
  paragraph:
    "To empower organizations with world-class electrical engineering solutions that drive innovation, ensure safety, and deliver reliable power systems. We are committed to being your trusted partner in navigating the complexities of modern electrical infrastructure, from conceptual design to successful implementation and beyond.",
  values: [
    { title: "Excellence", description: "Uncompromising quality in every deliverable" },
    { title: "Innovation", description: "Pushing boundaries with cutting-edge solutions" },
    { title: "Partnership", description: "Building lasting relationships through trust" },
  ],
};
