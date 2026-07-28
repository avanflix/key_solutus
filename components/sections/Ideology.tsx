import {
  ideologyIntro,
  corePrinciples,
  methodologySteps,
  mission,
} from "@/data/ideology";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { SingleLineDivider } from "@/components/ui/SingleLineMotif";

export default function Ideology() {
  return (
    <section id="ideology" className="relative bg-mist py-28 sm:py-36">
      <div className="container-edit">
        <SectionHeading
          eyebrow="Our Ideology"
          title="Our Ideology"
          description={ideologyIntro}
        />

        <div className="mt-16">
          <Reveal>
            <h3 className="font-heading text-xl font-bold text-ink sm:text-2xl">
              Our Core Principles
            </h3>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {corePrinciples.map((p, i) => {
              const Icon = p.icon;
              return (
                <Reveal key={p.title} delay={i * 0.06}>
                  <div className="h-full rounded-3xl border border-gray-line bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-card">
                    <Icon className="h-6 w-6 text-blue-deep" strokeWidth={1.75} />
                    <h4 className="mt-5 font-heading text-base font-semibold text-ink">
                      {p.title}
                    </h4>
                    <p className="mt-3 text-sm leading-relaxed text-slate">{p.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <SingleLineDivider className="my-20" />

        <div>
          <Reveal>
            <h3 className="font-heading text-xl font-bold text-ink sm:text-2xl">
              Our Methodology
            </h3>
          </Reveal>

          <div className="relative mt-12">
            <div className="absolute left-[27px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gray-line sm:block" />
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {methodologySteps.map((step, i) => (
                <Reveal key={step.number} delay={i * 0.05}>
                  <div className="relative flex gap-5 sm:pl-0">
                    <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-gray-line bg-white font-heading text-sm font-bold text-blue-deep shadow-card">
                      {step.number}
                    </span>
                    <div>
                      <h4 className="font-heading text-base font-semibold text-ink">
                        {step.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-slate">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-24 rounded-[2rem] bg-ink px-8 py-14 sm:px-16">
            <span className="eyebrow text-blue-pale">Our Mission</span>
            <h3 className="mt-4 max-w-3xl font-heading text-2xl font-bold text-white sm:text-3xl">
              {mission.paragraph.split(".")[0]}.
            </h3>
            <p className="mt-5 max-w-3xl text-white/70">
              {mission.paragraph.split(".").slice(1).join(".").trim()}
            </p>
            <div className="mt-10 grid grid-cols-1 gap-6 border-t border-white/15 pt-10 sm:grid-cols-3">
              {mission.values.map((v) => (
                <div key={v.title}>
                  <h4 className="font-heading text-lg font-semibold text-white">{v.title}</h4>
                  <p className="mt-2 text-sm text-white/60">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
