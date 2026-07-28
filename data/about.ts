export const aboutIntro =
  "Delivering value through ownership, we provide flexible, customized, and reliable engineering, design, drafting, and programming solutions to help organizations overcome fluctuating workloads and accelerate their time to market.";

export const aboutPurpose = {
  heading: "Our Purpose & Expertise",
  paragraphs: [
    "Electrical switchgear design lies at the heart of Keysolutus' expertise. We possess a profound understanding of switchgear systems, enabling us to deliver comprehensive design solutions that ensure the safe, reliable, and efficient distribution of electrical power.",
    "We solve the major challenge of managing fluctuating workloads by providing instantaneous capacity addition and appropriate people for your dynamic requirements. Whether you want to design innovative products faster or improve time to market, we help you make a difference for your customers.",
  ],
  quote:
    "We provide instantaneous capacity addition and appropriate people for your dynamic requirements.",
  image: {
    // Replace with Keysolutus' own switchgear/engineering photography for production.
    src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=900&h=1100&fit=crop&crop=center",
    alt: "Keysolutus electrical engineers reviewing switchgear design",
  },
};

export interface ExpertiseArea {
  title: string;
  description: string;
}

export const expertiseAreas: ExpertiseArea[] = [
  {
    title: "Conceptual Design",
    description:
      "Proficient in electrical control circuits, schematic diagrams, single-line diagrams, and General Arrangements for various electrical systems.",
  },
  {
    title: "Switchgear Systems",
    description:
      "Designing Variable Voltage Variable Frequency Drives, 11KV & 33KV PC VCBs, Indoor Panels, Capacitor Bank Panels, and Control & Relay Panels.",
  },
  {
    title: "Automation Solutions",
    description:
      "Expertly drafting LV and MV switchgear systems with PLC automation controls for data centers and hospital buildings.",
  },
  {
    title: "IED Programming",
    description:
      "Proficient in programming and designing Intelligent Electronic Devices to enhance substation protection and controls.",
  },
];

export interface SoftwareTool {
  name: string;
  category: string;
}

export const softwareTools: SoftwareTool[] = [
  { name: "Promis-e v8i", category: "Electrical Design" },
  { name: "AutoCAD Electrical", category: "CAD Software" },
  { name: "EPLAN", category: "Engineering Software" },
  { name: "Solidworks Electrical", category: "3D Design" },
];
