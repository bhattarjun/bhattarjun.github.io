import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About, Education, Experience, Footer, Projects, Skills } from "@/components/portfolio/Sections";
import { Contact, Resume } from "@/components/portfolio/ResumeContact";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Arjun Bhatt — Full Stack Software Engineer" },
      {
        name: "description",
        content:
          "Arjun Bhatt is a full stack software engineer building products with React, Next.js and .NET Core, deployed on Microsoft Azure.",
      },
      { property: "og:title", content: "Arjun Bhatt — Full Stack Software Engineer" },
      {
        property: "og:description",
        content:
          "Full stack engineer specialising in .NET Core, React and Next.js. 4+ years shipping production platforms on Azure.",
      },
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
          jobTitle: "Full Stack Software Engineer",
          knowsAbout: [".NET Core", "React.js", "Next.js", "Azure", "ASP.NET Web API"],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
