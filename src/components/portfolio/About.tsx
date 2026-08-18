import { Reveal, SectionHeading } from "./Reveal";

const facts = [
  { k: "4 yrs", v: "shipping production software" },
  { k: "BCA + MCA", v: "formal CS foundation" },
  { k: "Full-stack", v: ".NET Core + React/Next/Angular" },
  { k: "Azure", v: "deploys, pipelines, hosting" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <SectionHeading index="01" title="About" kicker="What I actually do" />
      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
        <Reveal className="space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>
            I&apos;m a full-stack engineer with four years of production experience building
            business software: booking and ticketing platforms, CRMs, employee and maintenance
            management systems, and mobile apps. My default stack is{" "}
            <span className="text-foreground">.NET Core on the server</span> and{" "}
            <span className="text-foreground">React, Next.js or Angular on the client</span>, backed
            by SQL Server or PostgreSQL and deployed on Azure.
          </p>
          <p>
            The problems I solve are the unglamorous ones that decide whether a product works:
            modelling messy domain data into a schema that survives change, designing REST APIs that
            multiple clients (web, mobile, third-party) can share, replacing slow manual workflows
            with automation, and integrating external services — payments, Teams, ChatGPT API,
            media pipelines — without turning the codebase into glue.
          </p>
          <p>
            I work end-to-end, so I own the piece most hand-offs drop: taking a feature from
            requirement to architecture to deployed, monitored build. With a BCA and MCA behind the
            practical work, I read unfamiliar codebases quickly and I&apos;m comfortable being the
            person who takes the whole slice.
          </p>
        </Reveal>

        <div className="grid auto-rows-min grid-cols-2 gap-3 self-start">
          {facts.map((f, i) => (
            <Reveal key={f.k} delay={i * 80}>
              <div className="surface-card h-full rounded-2xl p-4">
                <p className="font-display text-xl font-bold text-primary">{f.k}</p>
                <p className="mt-1 text-xs leading-snug text-muted-foreground">{f.v}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}