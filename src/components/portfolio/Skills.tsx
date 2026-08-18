import { Cloud, Code2, Database, Server, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const groups = [
  { icon: Code2, title: "Frontend", items: ["React", "Next.js", "Angular.js", "jQuery"] },
  { icon: Server, title: "Backend", items: [".NET Core", ".NET MVC", "Node.js", "PHP"] },
  { icon: Database, title: "Database", items: ["SQL Server", "PostgreSQL", "MySQL"] },
  { icon: Cloud, title: "Cloud / DevOps", items: ["Azure", "Azure Git", "GitLab", "GitHub"] },
  { icon: Sparkles, title: "Other", items: ["REST APIs", "ChatGPT API integration"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index="02" title="Skills" kicker="Toolkit" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 70}>
              <div className="surface-card group h-full rounded-3xl p-6 transition-colors hover:border-primary/40">
                <div className="flex items-center gap-3">
                  <span className="rounded-xl bg-secondary p-2.5 text-primary transition-transform group-hover:scale-110">
                    <g.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold">{g.title}</h3>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-border bg-surface-raised px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
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