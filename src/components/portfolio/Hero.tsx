import { ArrowDown, MapPin } from "lucide-react";
import headshot from "@/assets/arjun-bhatt.png.asset.json";
export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 md:pb-28">
      <div className="grid-backdrop pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <div
        className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full blur-3xl"
        style={{ background: "var(--gradient-warm)", opacity: 0.12 }}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-[1.35fr_1fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-highlight" />
            Available for freelance work
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-[0.95] sm:text-6xl md:text-7xl">
            Arjun
            <br />
            <span className="text-gradient-warm">Bhatt</span>
          </h1>

          <p className="mt-5 max-w-xl font-display text-lg text-foreground/90 sm:text-xl">
            Software Engineer — Full-Stack{" "}
            <span className="text-muted-foreground">(.NET Core, React / Next.js / Angular.js)</span>
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            I build and ship full-stack web and mobile products end-to-end — from database schema
            and API architecture to the React front end and the Azure pipeline that deploys it.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
              style={{ background: "var(--gradient-warm)", boxShadow: "var(--glow-primary)" }}
            >
              View Projects
              <ArrowDown className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold transition-colors hover:border-primary/50 hover:text-primary"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> Ahmedabad, Gujarat, India
            </span>
            <span>4 yrs experience</span>
            <span>BCA + MCA</span>
          </div>
        </div>

        <div className="group relative mx-auto w-full max-w-xs">
          <div
            className="absolute inset-0 -rotate-6 rounded-[2.5rem] opacity-40 transition-transform duration-500 group-hover:rotate-3"
            style={{ background: "var(--gradient-warm)" }}
          />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-surface transition-transform duration-500 group-hover:-translate-y-2">
            <img
              src='/arjun-bhatt.png'
              width={1129}
              height={1129}
              alt="Arjun Bhatt, full-stack software engineer"
              className="aspect-square w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
