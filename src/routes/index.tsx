import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";

const title = "Arjun Bhatt — Full-Stack Software Engineer (.NET Core, React)";
const description =
  "Arjun Bhatt builds and ships full-stack web and mobile products end-to-end — .NET Core, React, Next.js, Angular, SQL and Azure. 4 years of production experience.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Arjun Bhatt",
          jobTitle: "Full-Stack Software Engineer",
          email: "mailto:arjunbhatt97@gmail.com",
          telephone: "+91-97270-60697",
          url: "https://bhattarjun.github.io/",
          sameAs: ["https://in.linkedin.com/in/bhatt-arjun", "https://bhattarjun.github.io/"],
          address: {
            "@type": "PostalAddress",
            addressLocality: "Porbandar",
            addressRegion: "Gujarat",
            addressCountry: "IN",
          },
          knowsAbout: [".NET Core", "React", "Next.js", "Angular", "SQL Server", "Azure"],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
