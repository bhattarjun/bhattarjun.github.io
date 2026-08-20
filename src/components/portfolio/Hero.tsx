import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, MapPin, Twitter } from "lucide-react";
import { SOCIALS } from "./data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="mesh-hero absolute inset-0 -z-20" aria-hidden />
      <div className="grid-lines absolute inset-0 -z-10" aria-hidden />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-1.5 text-xs font-semibold text-accent-foreground backdrop-blur"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-gradient-brand" />
            Open to freelance projects & senior roles
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.06 }}
            className="mt-6 text-5xl font-bold leading-[0.98] sm:text-6xl lg:text-7xl"
          >
            Arjun Bhatt
            <span className="mt-3 block text-2xl font-semibold sm:text-3xl lg:text-4xl">
              <span className="text-gradient">Full Stack Software Engineer</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.14 }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            .NET Core &amp; React/Next.js specialist — I turn complex business workflows into fast,
            reliable products shipped on Azure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22 }}
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={16} className="text-primary" /> Ahmedabad, India — remote friendly
            </span>
            <span className="hidden h-4 w-px bg-border sm:block" />
            <span>4+ years building production software</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="/Arjun-Bhatt-Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:-translate-y-0.5"
            >
              <Download size={17} /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold shadow-soft transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Let's Talk <ArrowRight size={17} />
            </a>

            <div className="ml-1 flex items-center gap-2">
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
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-6 -z-10 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
          <div className="relative aspect-square overflow-hidden rounded-full border-8 border-card shadow-lift">
            <img
              src="/dp.png"
              alt="Portrait of Arjun Bhatt, Full Stack Software Engineer"
              className="h-full w-full object-cover"
              width={696}
              height={696}
            />
          </div>
          <div className="absolute -bottom-4 left-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-soft">
            <p className="font-display text-xl font-bold">8+</p>
            <p className="text-xs text-muted-foreground">products shipped</p>
          </div>
          <div className="absolute -right-2 top-6 rounded-2xl border border-border bg-card px-4 py-3 shadow-soft">
            <p className="font-display text-xl font-bold">.NET + React</p>
            <p className="text-xs text-muted-foreground">end-to-end delivery</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}