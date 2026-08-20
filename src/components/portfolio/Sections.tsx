import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  Building2,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { COMPANIES, EDUCATION, EXPERIENCE, PROJECTS, SKILL_GROUPS, SOCIALS } from "./data";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 section-pad">
      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto w-full max-w-xs">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border border-primary/30" />
            <img
              src="/dp.png"
              alt="Arjun Bhatt working as a full stack engineer"
              loading="lazy"
              className="relative aspect-square w-full rounded-2xl border border-border object-cover shadow-soft"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            eyebrow="About"
            title="Engineer who owns the whole stack."
            description="I'm a full stack software engineer with around 4 years of experience building business-critical web platforms — from database schema to pixel-level UI."
          />
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              On the backend I work in C#, .NET Core, ASP.NET MVC and Web API, backed by MS SQL
              Server and PostgreSQL. On the frontend I build with React.js, Next.js and Angular.
              Everything I ship is deployed and hosted on Microsoft Azure, with clean CI, monitoring
              and documentation so teams can move fast without breaking things.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                { k: "4+", v: "Years experience" },
                { k: "8+", v: "Products delivered" },
                { k: "3", v: "Companies" },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                  <p className="font-display text-3xl font-bold text-gradient">{s.k}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative bg-band section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Skills"
          title="The toolkit behind the delivery."
          description="Depth in the Microsoft stack, fluency in modern JavaScript — and the cloud know-how to run it in production."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.06}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lift">
                <h3 className="text-lg font-bold">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-secondary px-3 py-1.5 text-sm font-medium text-foreground/80 transition-colors group-hover:bg-accent group-hover:text-accent-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 section-pad">
      <SectionHeading
        eyebrow="Experience"
        title="Four years, shipped end to end."
        description="Promoted, trusted with client-facing delivery, and consistently on the hook for production systems."
      />
      <Reveal delay={0.06}>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Trusted by
          </span>
          {COMPANIES.map((c) => (
            <span
              key={c.name}
              className="inline-flex items-center gap-2.5 rounded-2xl border border-border bg-card px-4 py-2.5 shadow-soft"
            >
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-primary text-xs font-bold text-primary-foreground">
                {c.initials}
              </span>
              <span className="text-sm font-semibold">{c.name}</span>
            </span>
          ))}
        </div>
      </Reveal>
      <div className="relative mt-14 pl-6 sm:pl-10">
        <div className="absolute left-0 top-2 h-full w-px bg-gradient-to-b from-primary via-primary/40 to-transparent sm:left-3" />
        {EXPERIENCE.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.08}>
            <article className="relative mb-10 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-lift sm:p-8">
              <span className="absolute -left-6 top-9 grid h-5 w-5 place-items-center rounded-full bg-gradient-brand ring-4 ring-background sm:-left-[2.4rem]">
                <Briefcase size={11} className="text-primary-foreground" />
              </span>
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-4 sm:flex sm:justify-between">
                <div className="min-w-0">
                  <h3 className="text-lg font-bold sm:text-xl">{job.role}</h3>
                  <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    <Building2 size={15} className="shrink-0" /> {job.company}
                  </p>
                </div>
                <span
                  className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold ${
                    job.current
                      ? "bg-gradient-brand text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {job.period}
                </span>
              </div>
              <ul className="mt-5 space-y-2.5">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative bg-band section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work that shipped."
          description="Client platforms, internal tools and mobile apps — built, deployed and maintained in production."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.title} delay={(i % 3) * 0.06}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-soft"
              >
                <div className="absolute inset-x-0 top-0 h-1 scale-x-0 bg-gradient-brand transition-transform duration-300 group-hover:scale-x-100" />
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-bold leading-snug">{project.title}</h3>
                  <ArrowUpRight
                    size={20}
                    className="shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary"
                  />
                </div>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                >
                  View details <ArrowUpRight size={15} />
                </a>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 section-pad">
      <SectionHeading eyebrow="Education" title="Formal foundations." />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {EDUCATION.map((e, i) => (
          <Reveal key={e.degree} delay={i * 0.08}>
            <div className="flex h-full gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-1 hover:border-primary/40">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent text-accent-foreground">
                <GraduationCap size={22} />
              </span>
              <div className="min-w-0">
                <h3 className="text-base font-bold sm:text-lg">{e.degree}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.school}</p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-primary">
                  {e.period}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:flex sm:justify-between">
        <p className="min-w-0 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Arjun Bhatt — Full Stack Software Engineer
        </p>
        <div className="flex shrink-0 items-center gap-4 text-sm text-muted-foreground">
          <a href={`mailto:${SOCIALS.email}`} className="hover:text-primary">
            <Mail size={16} />
          </a>
    
          <span className="inline-flex items-center gap-1.5">
            <MapPin size={16} /> India
          </span>
        </div>
      </div>
    </footer>
  );
}