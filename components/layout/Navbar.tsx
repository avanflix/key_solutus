"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { navItems, bookServiceItem } from "@/data/navigation";
import MobileNav from "@/components/layout/MobileNav";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-gray-line/80 bg-white/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(226,231,236,0.8)]"
          : "bg-transparent"
      }`}
    >
      <nav className="container-edit flex h-20 items-center justify-between">
        <Link href="#home" className="flex items-center gap-2.5">
          <span className="relative flex h-15 w-15 items-center justify-center ">
            <Image
              src="/images/hero/keysolutus.png"
              alt="Keysolutus"
              width={40}
              height={40}
              // className="invert"
            />
          </span>
          <span className="font-heading text-lg font-bold tracking-tight text-ink">
            Keysolutus
          </span>
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="font-heading text-[0.9rem] font-medium text-slate transition-colors hover:text-blue-deep"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href={bookServiceItem.href}
            className="rounded-full bg-ink px-6 py-3 font-heading text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-deep hover:shadow-soft hover:-translate-y-0.5"
          >
            {bookServiceItem.label}
          </Link>
        </div>

        <MobileNav />
      </nav>
    </motion.header>
  );
}
