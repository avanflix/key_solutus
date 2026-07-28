import Link from "next/link";
import { Linkedin, Twitter, Facebook, Phone, Mail, MapPin } from "lucide-react";
import { company } from "@/data/company";
import { footerQuickLinks, footerServices } from "@/data/contact";
import { SLDNode } from "@/components/ui/SingleLineMotif";

export default function Footer() {
  return (
    <footer className="border-t border-gray-line bg-mist">
      <div className="container-edit py-20">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink">
                <SLDNode className="h-4 w-4 text-white" />
              </span>
              <span className="font-heading text-lg font-bold text-ink">Keysolutus</span>
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-slate">
              {company.tagline}. Expert electrical switchgear design and engineering solutions
              for safe, reliable, and efficient power distribution.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={company.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Keysolutus on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-line bg-white text-slate transition-colors hover:border-blue hover:text-blue-deep"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={company.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Keysolutus on Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-line bg-white text-slate transition-colors hover:border-blue hover:text-blue-deep"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Keysolutus on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-line bg-white text-slate transition-colors hover:border-blue hover:text-blue-deep"
              >
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-ink">
              Quick Links
            </h3>
            <ul className="mt-5 space-y-3">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate transition-colors hover:text-blue-deep"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-ink">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {footerServices.map((service) => (
                <li key={service} className="text-sm text-slate">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-semibold uppercase tracking-wider text-ink">
              Contact Info
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-slate">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
                <span>
                  {company.address.line1}
                  <br />
                  {company.address.line2}
                  <br />
                  {company.address.line3}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-blue" />
                <a href={`tel:${company.phone.replace(/\s+/g, "")}`} className="hover:text-blue-deep">
                  {company.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-blue" />
                <a href={`mailto:${company.email}`} className="hover:text-blue-deep">
                  {company.email}
                </a>
              </li>
              <li className="pt-1 text-xs leading-relaxed text-slate/80">
                {company.hours.weekday}
                <br />
                {company.hours.emergency}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-gray-line pt-8 sm:flex-row">
          <p className="text-xs text-slate">{company.copyright}</p>
          <div className="flex items-center gap-6">
            {company.legal.map((item) => (
              <Link key={item.href} href={item.href} className="text-xs text-slate hover:text-blue-deep">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
