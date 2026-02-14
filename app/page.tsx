import { Navbar } from "./src/components/Navbar";
import { Section } from "./src/components/Section";
import { profile } from "./src/data/profile";
import { Certificates } from "./src/components/Certificates";
import { Skills } from "./src/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      <Navbar />

      {/* HERO */}
      <section className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
        <p className="text-sm text-neutral-400">{profile.location}</p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">
          {profile.name}
        </h1>

        <p className="mt-4 text-lg text-neutral-300 sm:text-xl">
          {profile.role}
        </p>

        <p className="mt-6 max-w-2xl text-neutral-400">{profile.tagline}</p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-neutral-950 hover:opacity-90"
          >
            View Projects
          </a>
          <a
            href={profile.socials.github}
            className="rounded-xl border border-neutral-800 px-5 py-2.5 text-sm font-medium text-neutral-100 hover:bg-neutral-900"
          >
            GitHub
          </a>
        </div>
      </section>

      {/* SECTIONS */}
      <Section id="about" title="About">
        <div className="space-y-3 text-neutral-400">
          {profile.about.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <Skills />
      </Section>

      <Section id="projects" title="Projects">
        <p className="text-neutral-400">Next: we’ll add professional project cards.</p>
      </Section>

      <Section id="achievements" title="Achievements">
        <p className="text-neutral-400">Next: certificates + milestones.</p>
      </Section>

      <Section id="certificates" title="Certificates">
        <Certificates />
      </Section>

      <Section id="contact" title="Contact">
        <p className="text-neutral-400">
          Email me at{" "}
          <a className="underline hover:text-neutral-200" href={profile.socials.email}>
            {profile.socials.email.replace("mailto:", "")}
          </a>
        </p>
      </Section>

      <footer className="border-t border-neutral-900 py-10">
        <div className="mx-auto max-w-5xl px-6 text-sm text-neutral-500">
          © {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
