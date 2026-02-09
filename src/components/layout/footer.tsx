import Link from "next/link";
import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/logo";
import { COMPANY } from "@/data/company";
import { NAVIGATION_LINKS } from "@/data/navigation";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 - Brand */}
          <div className="space-y-6">
            <Logo variant="full" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              {COMPANY.tagline}
            </p>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-black/5 text-muted-foreground transition-colors duration-300 hover:bg-emerald-500/10 hover:text-emerald-600"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-black/5 text-muted-foreground transition-colors duration-300 hover:bg-emerald-500/10 hover:text-emerald-600"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-emerald-600">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-emerald-600">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-emerald-600">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span className="text-sm text-muted-foreground">
                  {COMPANY.address.full}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-emerald-600" />
                <a
                  href={`tel:${COMPANY.phone.office}`}
                  className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  {COMPANY.phone.office}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-emerald-600" />
                <a
                  href={`mailto:${COMPANY.email.general}`}
                  className="text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                >
                  {COMPANY.email.general}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} Quadco Consults Limited. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            {COMPANY.rc} &middot; {COMPANY.tin}
          </p>
        </div>
      </div>
    </footer>
  );
}
