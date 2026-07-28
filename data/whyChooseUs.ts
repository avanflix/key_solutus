import type { LucideIcon } from "lucide-react";
import {
  ShieldCheck,
  Gauge,
  Workflow,
  Cpu,
  MonitorSmartphone,
  CircuitBoard,
} from "lucide-react";

export interface WhyChooseUsItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const whyChooseUsIntro =
  "We deliver unparalleled electrical excellence through expertise, innovation, and commitment to delivering value through ownership in every project.";

export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    icon: CircuitBoard,
    title: "Expert Switchgear Design",
    description:
      "Comprehensive electrical switchgear design solutions ensuring safe, reliable, and efficient power distribution with profound understanding of electrical systems.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Reliability",
    description:
      "Adherence to relevant industry standards and guidelines, ensuring the safety and reliability of electrical installations and equipment.",
  },
  {
    icon: Gauge,
    title: "Flexible Capacity",
    description:
      "Instantaneous capacity addition and appropriate people for your dynamic requirements, solving fluctuating workload challenges effectively.",
  },
  {
    icon: Workflow,
    title: "End-to-End Solutions",
    description:
      "Complete project lifecycle support from conceptual design to commissioning, with factory coordination and seamless project management.",
  },
  {
    icon: Cpu,
    title: "PLC Automation",
    description:
      "Expert design and programming of PLC automation controls for LV and MV switchgear systems, perfect for data centers and hospitals.",
  },
  {
    icon: MonitorSmartphone,
    title: "IT Services",
    description:
      "Comprehensive web development, custom software solutions, and digital transformation services to modernize your business operations and enhance user experiences.",
  },
];

export const statsBand = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Projects Completed" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Support Available" },
];
