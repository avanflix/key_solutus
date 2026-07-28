"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowLeft, ArrowRight as ArrowRightIcon, Quote } from "lucide-react";
import { testimonials, testimonialsIntro } from "@/data/testimonials";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const testimonial = testimonials[index] ?? testimonials[0]!;

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative bg-white py-28 sm:py-36">
      <div className="container-edit">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Clients Say"
          description={testimonialsIntro}
        />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div className="relative lg:col-span-8">
            <Quote className="h-10 w-10 text-blue-pale" fill="currentColor" />
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4 }}
              >
                <p className="mt-6 font-heading text-xl font-medium leading-relaxed text-ink sm:text-2xl">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-pale font-heading text-sm font-bold text-blue-deep">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-heading text-sm font-semibold text-ink">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-slate">
                      {testimonial.role}, {testimonial.company}
                    </p>
                    <p className="text-xs text-blue">{testimonial.project}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-10 flex items-center gap-3">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-line text-ink transition-colors hover:border-blue hover:text-blue-deep"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-line text-ink transition-colors hover:border-blue hover:text-blue-deep"
              >
                <ArrowRightIcon className="h-4 w-4" />
              </button>
              <div className="ml-2 flex gap-1.5">
                {testimonials.map((t, i) => (
                  <button
                    key={t.name}
                    onClick={() => setIndex(i)}
                    aria-label={`Show testimonial from ${t.name}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-6 bg-blue-deep" : "w-1.5 bg-gray-line"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-[2rem] border border-gray-line bg-sky/40 p-10">
              <h3 className="font-heading text-xl font-bold text-ink">
                Ready to Join Our Success Stories?
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-slate">
                Experience the Keysolutus difference. Contact us today to discuss your
                electrical engineering project and see why our clients rate us 5 stars.
              </p>
              <Link
                href="#book-service"
                className="group mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-heading text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-deep"
              >
                Start Your Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
