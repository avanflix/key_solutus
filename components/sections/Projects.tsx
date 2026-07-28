"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { projects, projectFilters } from "@/data/projects";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="past-works" className="relative bg-white py-28 sm:py-36">
      <div className="container-edit">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Portfolio"
            title="Our Past Works"
            description="Explore our portfolio of successful electrical engineering projects, showcasing our expertise in switchgear design, automation, and power systems."
          />
        </div>

        <div className="mt-10 flex flex-wrap gap-2.5">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActive(filter)}
              className={cn(
                "rounded-full border px-5 py-2.5 font-heading text-sm font-medium transition-all duration-300",
                active === filter
                  ? "border-ink bg-ink text-white"
                  : "border-gray-line bg-white text-slate hover:border-blue hover:text-blue-deep"
              )}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group overflow-hidden rounded-3xl border border-gray-line bg-mist/40 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3.5 py-1.5 font-heading text-xs font-semibold text-blue-deep backdrop-blur">
                    {project.category}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="font-heading text-lg font-semibold text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-gray-line bg-white px-3 py-1 text-xs text-slate"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="#book-service"
                    className="mt-6 inline-flex items-center gap-1.5 font-heading text-sm font-semibold text-blue-deep"
                  >
                    Learn More
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-8 rounded-[2rem] border border-gray-line bg-sky/40 px-8 py-12 sm:px-14 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <h3 className="font-heading text-2xl font-bold text-ink sm:text-3xl">
              Ready to Start Your Project?
            </h3>
            <p className="mt-4 text-slate">
              Join hundreds of satisfied clients who have transformed their electrical
              infrastructure with our expert engineering solutions.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-4">
            <Link
              href="#book-service"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-heading text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-deep"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#ideology"
              className="inline-flex items-center gap-2 rounded-full border border-gray-line bg-white px-7 py-3.5 font-heading text-sm font-semibold text-ink transition-all duration-300 hover:border-blue hover:text-blue-deep"
            >
              Learn About Our Process
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
