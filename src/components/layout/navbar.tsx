"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/logo";
import { CtaButton } from "@/components/shared/cta-button";
import { NAVIGATION_LINKS } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-500",
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/5"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" aria-label="Quadco Consults home">
          <span className="hidden md:inline-flex">
            <Logo variant="full" />
          </span>
          <span className="inline-flex md:hidden">
            <Logo variant="icon" />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAVIGATION_LINKS.map((link) => {
            const isActive =
              pathname === link.path ||
              (link.path !== "/" && pathname.startsWith(link.path));

            return (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors duration-300",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-primary" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Trigger */}
        <div className="flex items-center gap-4">
          {/* Mobile Menu */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full border-border bg-background sm:max-w-sm">
              <SheetHeader className="border-b border-border pb-4">
                <SheetTitle>
                  <Logo variant="full" />
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col gap-2 px-4 pt-6">
                {NAVIGATION_LINKS.map((link) => {
                  const isActive =
                    pathname === link.path ||
                    (link.path !== "/" && pathname.startsWith(link.path));

                  return (
                    <SheetClose asChild key={link.path}>
                      <Link
                        href={link.path}
                        className={cn(
                          "rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200",
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:bg-black/5 hover:text-foreground"
                        )}
                      >
                        {link.name}
                      </Link>
                    </SheetClose>
                  );
                })}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
