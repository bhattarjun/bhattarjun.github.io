import { useState, type FormEvent } from "react";
import { Github, Globe, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "./Reveal";

const details = [
  { icon: Mail, label: "arjunbhatt97@gmail.com", href: "mailto:arjunbhatt97@gmail.com" },
  { icon: MapPin, label: "Ahmedabad, Gujarat, India" },
  { icon: Linkedin, label: "Bhatt-Arjun", href: "https://in.linkedin.com/in/bhatt-arjun" },
  { icon: Globe, label: "bhattarjun.github.io", href: "https://bhattarjun.github.io/" },
];

export function Contact() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    if (!name || !email || !message) {
      toast.error("Please fill in your name, email and message.");
      return;
    }
    setSending(true);
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    window.location.href = `mailto:arjunbhatt97@gmail.com?subject=${encodeURIComponent(
      `Portfolio enquiry from ${name}`,
    )}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email client with the message ready to send.");
    form.reset();
    setSending(false);
  }

  const field =
    "w-full rounded-xl border border-border bg-surface-raised px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <SectionHeading index="05" title="Let's build something" kicker="Contact" />
      <div className="grid gap-8 md:grid-cols-[1fr_1.1fr]">
        <Reveal className="space-y-3">
          {details.map((d) => {
            const content = (
              <span className="flex items-center gap-3 text-sm">
                <span className="rounded-lg bg-secondary p-2 text-primary">
                  <d.icon className="h-4 w-4" />
                </span>
                <span className="text-muted-foreground">{d.label}</span>
              </span>
            );
            return d.href ? (
              <a
                key={d.label}
                href={d.href}
                target={d.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="surface-card block rounded-2xl p-3 transition-colors hover:border-primary/40"
              >
                {content}
              </a>
            ) : (
              <div key={d.label} className="surface-card rounded-2xl p-3">
                {content}
              </div>
            );
          })}
        </Reveal>

        <Reveal delay={100}>
          <form onSubmit={onSubmit} className="surface-card space-y-4 rounded-3xl p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-1.5 block text-xs text-muted-foreground">
                  Name
                </label>
                <input id="name" name="name" className={field} placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-xs text-muted-foreground">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={field}
                  placeholder="you@company.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-xs text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className={field}
                placeholder="What are you building?"
              />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="w-full rounded-full px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 disabled:opacity-60"
              style={{ background: "var(--gradient-warm)" }}
            >
              Send message
            </button>
            <p className="text-center font-mono text-[11px] text-muted-foreground">
              Sends via your mail app — or email me directly.
            </p>
          </form>
        </Reveal>
      </div>

      <footer className="mt-20 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 font-mono text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Arjun Bhatt</span>
        <a
          href="https://github.com/BhattArjun"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 hover:text-primary"
        >
          <Github className="h-3.5 w-3.5" /> Github.com/BhattArjun
        </a>
      </footer>
    </section>
  );
}
