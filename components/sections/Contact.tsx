import { Phone, Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { company } from "@/data/company";
import { quickResponseGuarantee } from "@/data/contact";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ContactForm from "@/components/sections/ContactForm";

export default function Contact() {
  return (
    <section id="book-service" className="relative overflow-hidden bg-mist py-28 sm:py-36">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="container-edit relative">
        <SectionHeading
          eyebrow="Book Your Service"
          title="Book Your Service"
          description="Ready to transform your electrical infrastructure? Contact us today to discuss your project requirements and get expert consultation from our electrical engineering team."
          align="center"
          className="max-w-2xl"
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="h-full rounded-[2rem] border border-gray-line bg-white p-8 shadow-card sm:p-10">
              <h3 className="font-heading text-xl font-bold text-ink">Request a Consultation</h3>
              <ContactForm />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="flex h-full flex-col gap-6">
              <div className="rounded-[2rem] border border-gray-line bg-white p-8">
                <h3 className="font-heading text-xl font-bold text-ink">Get in Touch</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate">
                  Ready to discuss your electrical engineering project? We&apos;re here to help
                  you find the perfect solution for your specific requirements.
                </p>

                <ul className="mt-8 space-y-6">
                  <li className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-pale text-blue-deep">
                      <Phone className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-heading text-xs font-semibold uppercase tracking-wider text-slate">
                        Phone
                      </p>
                      <a
                        href={`tel:${company.phone.replace(/\s+/g, "")}`}
                        className="text-sm font-medium text-ink hover:text-blue-deep"
                      >
                        {company.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-pale text-blue-deep">
                      <Mail className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-heading text-xs font-semibold uppercase tracking-wider text-slate">
                        Email
                      </p>
                      <a
                        href={`mailto:${company.email}`}
                        className="text-sm font-medium text-ink hover:text-blue-deep"
                      >
                        {company.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-pale text-blue-deep">
                      <MapPin className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-heading text-xs font-semibold uppercase tracking-wider text-slate">
                        Address
                      </p>
                      <p className="text-sm font-medium text-ink">
                        {company.address.line1}
                        <br />
                        {company.address.line2}
                        <br />
                        {company.address.line3}
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-pale text-blue-deep">
                      <Clock className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="font-heading text-xs font-semibold uppercase tracking-wider text-slate">
                        Hours
                      </p>
                      <p className="text-sm font-medium text-ink">{company.hours.weekday}</p>
                      <p className="text-sm text-slate">{company.hours.emergency}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-[2rem] bg-ink p-8">
                <h3 className="font-heading text-lg font-bold text-white">
                  Quick Response Guarantee
                </h3>
                <ul className="mt-5 space-y-3">
                  {quickResponseGuarantee.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-pale" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
