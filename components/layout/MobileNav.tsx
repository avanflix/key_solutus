"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems, bookServiceItem } from "@/data/navigation";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-line bg-white text-ink"
      >
        <Menu className="h-5 w-5" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-white p-8 shadow-soft"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading text-lg font-bold text-ink">Keysolutus</span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-line text-ink"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <ul className="mt-12 flex flex-col gap-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block border-b border-gray-line py-4 font-heading text-lg font-medium text-ink"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href={bookServiceItem.href}
                onClick={() => setOpen(false)}
                className="mt-8 rounded-full bg-ink px-6 py-4 text-center font-heading text-sm font-semibold text-white"
              >
                {bookServiceItem.label}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
