export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "About", href: "#about" },
  { label: "Past Works", href: "#past-works" },
  { label: "Ideology", href: "#ideology" },
  { label: "Testimonials", href: "#testimonials" },
];

export const bookServiceItem: NavItem = { label: "Book Service", href: "#book-service" };
