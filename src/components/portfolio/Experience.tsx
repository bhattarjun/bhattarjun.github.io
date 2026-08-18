import { Reveal, SectionHeading } from "./Reveal";

const roles = [
  {
    role: "Software Engineer",
    company: "Pozitive Energy (PE Solutions) | Business Energy Supplier",
    dates: "Jan 2026 — Present",
    current: true,
    bullets: [
      "Developing and maintaining enterprise-grade energy supply applications using C#, .NET Core, ASP.NET MVC, Angular, SQL Server, and RESTful APIs.",
      "Building and enhancing Electricity and Gas customer journey workflows, implementing business validations, dashboard features, and production bug fixes.",
      "Collaborating with cross-functional teams to deliver new features, perform code reviews, optimize data flows, and support Azure-hosted applications.",
    ],
  },
  {
    role: "Software Engineer",
    company: "Prioxis Technologies Pvt. Ltd.",
    dates: "Aug 2022 — Dec 2025",
    bullets: [
      "Designed and delivered full-stack web applications using C#, .NET Core, ASP.NET MVC, React.js, Next.js, Angular, Node.js, SQL Server, and PostgreSQL.",
      "Built and integrated RESTful APIs, optimized relational databases, and deployed production applications on Microsoft Azure using Azure Git.",
      "Developed multiple business-critical solutions including CRM Systems, Employee Management, Maintenance Planning, AI-powered Microsoft Teams Chatbot, React Native mobile apps, and corporate websites while participating in requirement analysis, testing, deployment, and client support.",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Casepoint LLC",
    dates: "May 2022 — Jun 2022",
    bullets: [
      "Contributed to enterprise software development using .NET Core, React.js, Next.js, HTML, CSS, and Bootstrap during an intensive engineering engagement.",
      "Supported feature development, software testing, bug resolution, and collaborative development practices within an Agile engineering team.",
    ],
  },
];

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28"
    >
      <SectionHeading
        index="03"
        title="Experience"
        kicker="Where I've built"
      />

      <ol className="relative ml-3 border-l border-border pl-6 sm:pl-10">
        {roles.map((r, i) => (
          <li key={r.company} className="relative pb-10 last:pb-0">
            <span
              className="absolute -left-[calc(1.5rem+7px)] top-2 h-3.5 w-3.5 rounded-full border-2 border-background sm:-left-[calc(2.5rem+7px)]"
              style={{
                background: r.current
                  ? "var(--gradient-warm)"
                  : "var(--surface-raised)",
                boxShadow: r.current
                  ? "var(--glow-primary)"
                  : undefined,
              }}
            />

            <Reveal delay={i * 80}>
              <div className="surface-card rounded-2xl p-5 sm:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold">{r.role}</h3>
                    <p className="text-sm text-primary">{r.company}</p>
                  </div>

                  <span className="font-mono text-xs text-muted-foreground">
                    {r.dates}
                  </span>
                </div>

                <ul className="mt-4 space-y-2">
                  {r.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}