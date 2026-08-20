import { useState, type FormEvent } from "react";
import { Download, FileText, Github, Linkedin, Mail, Phone, Send, Twitter } from "lucide-react";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "./Reveal";
import { SOCIALS } from "./data";

export function Resume() {
  return (
    <section id="resume" className="relative bg-band section-pad">
      <div className="mx-auto max-w-6xl px-5">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
          <div className="grid gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Resume"
                title="Everything on one page."
                description="Skim the highlights here or take the full PDF with you — formatted for both ATS parsing and human eyes."
              />
              <Reveal delay={0.1}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/Arjun-Bhatt-Resume.pdf"
                    download
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
                  >
                    <Download size={17} /> Download Resume PDF
                  </a>
                  <a
                    href="/Arjun-Bhatt-Resume.pdf"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <FileText size={17} /> Open in new tab
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="relative overflow-hidden rounded-2xl border border-border bg-secondary">
                <object
                  data="/Arjun-Bhatt-Resume.pdf#toolbar=0&view=FitH"
                  type="application/pdf"
                  className="h-[420px] w-full"
                  aria-label="Resume preview for Arjun Bhatt"
                >
                  <div className="grid h-[420px] place-items-center p-6 text-center text-sm text-muted-foreground">
                    Preview unavailable on this device — use the download button to view the PDF.
                  </div>
                </object>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setSending(true);
    const subject = encodeURIComponent(`Project enquiry from ${String(data.get("name") ?? "")}`);
    const body = encodeURIComponent(
      `${String(data.get("message") ?? "")}\n\n— ${String(data.get("name") ?? "")} (${String(data.get("email") ?? "")})`,
    );
    window.location.href = `mailto:${SOCIALS.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client — talk soon!");
    setSending(false);
    form.reset();
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 section-pad">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Got something to build?"
            description="Whether you're hiring, scoping a freelance project, or just want a second opinion on an architecture — I reply within a day."
          />
          <Reveal delay={0.1}>
            <div className="mt-8 space-y-3">
              <a
                href={`mailto:${SOCIALS.email}`}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/40"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                  <Mail size={18} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                    Email
                  </span>
                  <span className="block truncate font-medium">{SOCIALS.email}</span>
                </span>
              </a>
            
              <div className="flex gap-2 pt-1">
                {[
                  { href: SOCIALS.linkedin, Icon: Linkedin, label: "LinkedIn" },
                  { href: SOCIALS.github, Icon: Github, label: "GitHub" },
                  { href: SOCIALS.twitter, Icon: Twitter, label: "Twitter / X" },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="grid h-11 w-11 place-items-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-card p-7 shadow-soft sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block text-sm font-medium">
                Name
                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/15"
                />
              </label>
              <label className="block text-sm font-medium">
                Email
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/15"
                />
              </label>
            </div>
            <label className="mt-5 block text-sm font-medium">
              Message
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about the role or project — timeline, stack, what success looks like."
                className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:border-primary focus:ring-4 focus:ring-primary/15"
              />
            </label>
            <button
              type="submit"
              disabled={sending}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5 disabled:opacity-70"
            >
              <Send size={16} /> Send message
            </button>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              Prefer email? Write directly to {SOCIALS.email}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
