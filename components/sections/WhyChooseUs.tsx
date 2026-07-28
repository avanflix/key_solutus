import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { whyChooseUsIntro, whyChooseUsItems, statsBand } from "@/data/whyChooseUs";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import { SingleLineDivider } from "@/components/ui/SingleLineMotif";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="relative bg-white py-28 sm:py-36">
      <div className="container-edit">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why Choose Keysolutus?"
          description={whyChooseUsIntro}
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUsItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={i * 0.06}>
                <div
                  className={`group h-full rounded-3xl border border-gray-line bg-mist/60 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-blue/40 hover:bg-white hover:shadow-card ${
                    i % 5 === 0 ? "sm:mt-0" : i % 3 === 1 ? "lg:mt-8" : ""
                  }`}
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-blue-deep shadow-card transition-colors group-hover:bg-blue-deep group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-6 font-heading text-lg font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[0.95rem] leading-relaxed text-slate">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-20 rounded-[2rem] border border-gray-line bg-sky/50 px-8 py-12 sm:px-14">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
              {statsBand.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="font-heading text-4xl font-extrabold text-blue-deep sm:text-5xl">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-slate">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <SingleLineDivider className="my-20" />

        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 rounded-[2rem] bg-ink px-8 py-14 sm:px-14 lg:flex-row lg:items-center">
            <div className="max-w-xl">
              <h3 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                Ready to Transform Your Electrical Infrastructure?
              </h3>
              <p className="mt-4 text-white/70">
                Partner with Keysolutus for unparalleled electrical excellence. Contact us to
                discuss your project requirements and experience the expertise that sets us
                apart.
              </p>
            </div>
            <Link
              href="#book-service"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-8 py-4 font-heading text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-pale"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
