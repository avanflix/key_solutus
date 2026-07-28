import Image from "next/image";
import { Quote } from "lucide-react";
import {
  aboutIntro,
  aboutPurpose,
  expertiseAreas,
  softwareTools,
} from "@/data/about";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { SLDNode } from "@/components/ui/SingleLineMotif";

export default function About() {
  return (
    <section id="about" className="relative bg-mist py-28 sm:py-36">
      <div className="container-edit">
        <SectionHeading
          eyebrow="About Keysolutus"
          title="About Keysolutus"
          description={aboutIntro}
        />

        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <Reveal>
              <h3 className="font-heading text-2xl font-bold text-ink">
                {aboutPurpose.heading}
              </h3>
            </Reveal>
            <div className="mt-6 space-y-5">
              {aboutPurpose.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.06 * (i + 1)}>
                  <p className="text-base leading-relaxed text-slate">{p}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.2}>
              <blockquote className="relative mt-10 rounded-3xl border border-gray-line bg-white p-8 pl-14 shadow-card">
                <Quote className="absolute left-6 top-7 h-6 w-6 text-blue-pale" fill="currentColor" />
                <p className="font-heading text-lg italic leading-relaxed text-ink">
                  &ldquo;{aboutPurpose.quote}&rdquo;
                </p>
              </blockquote>
            </Reveal>
          </div>

          <div className="relative lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-[2rem] border border-gray-line shadow-soft">
                <Image
                  src={aboutPurpose.image.src}
                  alt={aboutPurpose.image.alt}
                  width={640}
                  height={760}
                  className="h-full w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-28">
          <Reveal>
            <span className="eyebrow">Engineering Expertise</span>
            <h3 className="mt-4 font-heading text-2xl font-bold text-ink sm:text-3xl">
              Our Areas of Expertise
            </h3>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-[2rem] border border-gray-line bg-gray-line sm:grid-cols-2">
            {expertiseAreas.map((area, i) => (
              <Reveal key={area.title} delay={i * 0.06}>
                <div className="h-full bg-white p-9 transition-colors hover:bg-sky/40">
                  <SLDNode className="h-6 w-6 text-blue" />
                  <h4 className="mt-5 font-heading text-lg font-semibold text-ink">
                    {area.title}
                  </h4>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-slate">
                    {area.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <Reveal>
            <span className="eyebrow">Industry-Leading Tools & Software</span>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {softwareTools.map((tool, i) => (
              <Reveal key={tool.name} delay={i * 0.05}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-gray-line bg-white p-6 text-center transition-all hover:-translate-y-1 hover:shadow-card">
                  <p className="font-heading text-base font-bold text-ink">{tool.name}</p>
                  <p className="mt-2 text-xs uppercase tracking-wider text-blue">
                    {tool.category}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
