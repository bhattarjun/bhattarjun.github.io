import { useState } from "react";
import { ArrowUpRight, CircleAlert } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Reveal, SectionHeading } from "./Reveal";
import { cn } from "@/lib/utils";

type Project = {
  name: string;
  blurb: string;
  stack: string[];
  detail: string;
  span?: string;
};

const projects: Project[] = [
  {
    name: "Prioxis Company Site",
    blurb: "Marketing site for a software services company, built for speed and SEO.",
    stack: ["Next.js", "React", "REST APIs"],
    detail:
      "Public-facing corporate website: content structure, responsive layout, page performance and SEO fundamentals.",
    span: "lg:col-span-2",
  },
  {
    name: "Kunto Mobile APK",
    blurb: "Android application delivered as a distributable APK build.",
    stack: ["Mobile", ".NET Core API", "SQL Server"],
    detail: "Mobile client backed by a .NET Core API, including build and release packaging.",
  },
  {
    name: "Event Ticket Booking",
    blurb: "Ticketing flow with event listings, seat/ticket selection and order handling.",
    stack: ["React", ".NET Core", "SQL Server"],
    detail:
      "Booking domain model, availability handling and order lifecycle from selection to confirmation.",
  },
  {
    name: "Room Booking / Hotel Management",
    blurb: "Reservation and inventory management for rooms and stays.",
    stack: [".NET Core", "Angular.js", "SQL Server"],
    detail:
      "Room inventory, reservation calendar, rate handling and admin-side management screens.",
    span: "lg:col-span-2",
  },
  {
    name: "Photo & Video Editing App (Imgly)",
    blurb: "Media editing experience built on the img.ly editor SDK.",
    stack: ["React", "Imgly SDK", "Node.js"],
    detail: "Integrated the img.ly editing SDK for photo and video editing, export and asset flow.",
  },
  {
    name: "Employee Management System",
    blurb: "Internal system for employee records, roles and day-to-day HR workflows.",
    stack: [".NET MVC", "SQL Server", "jQuery"],
    detail: "Role-based access, employee records, and reporting over an internal HR dataset.",
  },
  {
    name: "Business CRM",
    blurb: "Customer, lead and pipeline management for a business team.",
    stack: [".NET Core", "React", "PostgreSQL"],
    detail: "Lead pipeline, customer records, activity tracking and role-scoped dashboards.",
  },
  {
    name: "Integrated Teams Chatbot",
    blurb: "Microsoft Teams bot wired into internal workflows and the ChatGPT API.",
    stack: ["Teams API", "ChatGPT API", ".NET Core", "Azure"],
    detail:
      "Conversational interface inside Teams, integrating an LLM API with internal business data.",
  },
  {
    name: "Tracker Flow — Maintenance Planning",
    blurb: "Planning and tracking tool for scheduled maintenance operations.",
    stack: [".NET Core", "React", "Azure"],
    detail: "Scheduling, task assignment and status tracking across maintenance workflows.",
    span: "lg:col-span-2",
  },
];

function Todo({ label }: { label: string }) {
  return (
    <div className="rounded-xl border border-dashed border-primary/40 bg-primary/5 p-3">
      <p className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-primary">
        <CircleAlert className="h-3.5 w-3.5" /> {label}
      </p>
      <p className="mt-1 text-xs text-muted-foreground">TODO — not filled in yet</p>
    </div>
  );
}

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="projects" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading index="04" title="Projects" kicker="Selected work" />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 70} className={cn(p.span)}>
              <button
                type="button"
                onClick={() => setOpen(p)}
                className="surface-card group flex h-full w-full flex-col rounded-3xl p-6 text-left transition-all hover:-translate-y-1 hover:border-primary/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold leading-snug">{p.name}</h3>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.blurb}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-surface-raised px-2 py-1 font-mono text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="mt-5 font-mono text-xs text-primary">View Details →</span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="font-display text-2xl">{open?.name}</DialogTitle>
            <DialogDescription>{open?.blurb}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm leading-relaxed text-muted-foreground">{open?.detail}</p>
            <div className="flex flex-wrap gap-1.5">
              {open?.stack.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-surface-raised px-2 py-1 font-mono text-[11px] text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <Todo label="Impact / Result" />
            <Todo label="Live Demo / GitHub link" />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
