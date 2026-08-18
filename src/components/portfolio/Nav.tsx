import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export function Nav() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    ["hero", ...links.map((l) => l.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "backdrop-blur-xl" : "",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 transition-all sm:px-6",
          scrolled ? "border-b border-border bg-background/75" : "border-b border-transparent",
        )}
      >
        <a href="#hero" className="font-display text-sm font-bold tracking-tight">
          <span className="text-gradient-warm">arjun</span>
          <span className="text-muted-foreground">.bhatt()</span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={cn(
                "rounded-full px-3 py-1.5 text-sm transition-colors",
                active === l.id
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full border border-primary/40 px-3.5 py-1.5 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          Hire me
        </a>
      </div>

      {/* mobile section pills */}
      <div className="flex gap-1 overflow-x-auto border-b border-border bg-background/75 px-4 py-2 md:hidden">
        {links.map((l) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className={cn(
              "whitespace-nowrap rounded-full px-3 py-1 text-xs transition-colors",
              active === l.id
                ? "bg-secondary text-foreground"
                : "text-muted-foreground",
            )}
          >
            {l.label}
          </a>
        ))}
      </div>
    </header>
  );
}