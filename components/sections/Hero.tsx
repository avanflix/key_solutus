"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import { heroPills, heroStats } from "@/data/contact";
import GlassCard from "@/components/ui/GlassCard";
import { HeroSchematic, SLDNode } from "@/components/ui/SingleLineMotif";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-mist pb-16 pt-16 sm:pb-24 sm:pt-20"
    >
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-pale/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-sky/70 blur-3xl" />

      <div className="container-edit relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 rounded-full border border-gray-line bg-white/80 px-4 py-2 backdrop-blur"
          >
            <SLDNode className="h-3.5 w-3.5 text-blue" />
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.18em] text-slate">
              Electrical Engineering, Delivered With Ownership
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 font-heading text-[2.3rem] font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.5rem]"
          >
            Powering Your
            <br />
            <span className="text-blue-deep">Electrical Future</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-slate"
          >
            Expert electrical switchgear design and engineering solutions. Delivering value
            through ownership with comprehensive electrical services for safe, reliable, and
            efficient power distribution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {heroPills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-gray-line bg-white px-4 py-2 font-heading text-xs font-semibold text-slate"
              >
                {pill}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Link
              href="#book-service"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 font-heading text-sm font-semibold text-white shadow-card transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-deep hover:shadow-soft"
            >
              Get Started Today
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="#about"
              className="group inline-flex items-center gap-2 rounded-full border border-gray-line bg-white/60 px-8 py-4 font-heading text-sm font-semibold text-ink backdrop-blur transition-all duration-300 hover:border-blue hover:text-blue-deep"
            >
              <Play className="h-4 w-4" />
              Learn More
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 flex gap-8 border-t border-gray-line pt-6"
          >
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <div className="font-heading text-3xl font-extrabold text-ink sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-slate">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="relative lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="relative"
          >
            <GlassCard className="relative aspect-[4/5] w-[92%] mx-auto overflow-hidden p-6">

              {/* Blueprint Background */}
              <div className="absolute inset-0 opacity-10">
                <HeroSchematic />
              </div>

              {/* Main Engineering Image */}
              <div className="relative z-10 flex h-full items-center justify-center">

                <div className="relative h-[82%] w-[82%] overflow-hidden rounded-[30px] border border-white/60 bg-white shadow-2xl">

                  <Image
                    src="/images/hero/keysolutus.png"
                    alt="Keysolutus Engineering Logo"
                    fill
                    priority
                    className="object-contain p-4 -translate-y-9"
                    sizes="(min-width:1024px) 100px, 40vw"
                  />

                </div>

              </div>

              {/* Bottom Brand Card */}
              <div className="absolute bottom-6 left-6 right-6 z-20 rounded-2xl border border-white/70 bg-white/90 p-5 backdrop-blur-xl shadow-xl">

                <p className="font-heading text-xs uppercase tracking-[0.2em] text-blue-deep">
                  KEYSOLUTUS
                </p>

                <h4 className="mt-1 font-heading text-lg font-bold text-ink">
                  Engineering Excellence Since 2009
                </h4>

                <p className="mt-2 text-sm text-slate">
                  Delivering value through ownership across Electrical Engineering,
                  Switchgear Design and Industrial Automation.
                </p>

              </div>

            </GlassCard>

            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-8 hidden rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-card backdrop-blur sm:block"
            >
              <p className="font-heading text-2xl font-extrabold text-ink">500+</p>
              <p className="text-xs text-slate">Projects</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-5 bottom-12 hidden rounded-2xl border border-white/70 bg-white/90 px-5 py-4 shadow-card backdrop-blur sm:block"
            >
              <p className="font-heading text-2xl font-extrabold text-ink">15+</p>
              <p className="text-xs text-slate">Years Experience</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
