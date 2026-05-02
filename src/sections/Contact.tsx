import { Section } from '../components/Section';
import { profile } from '../data/profile';

export function Contact() {
  return (
    <Section id="contact" eyebrow="07 · Contact" title="Let's get in touch">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-slate-400">
          I'm open to conversations about interesting work, open-source collaboration, or
          just trading notes on the Java + AI ecosystem.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-md border border-accent/40 bg-accent/10 px-6 py-3 font-mono text-sm text-accent-soft transition hover:bg-accent/20 hover:shadow-glow"
        >
          {profile.email}
        </a>

        <p className="mt-4 font-mono text-xs text-slate-500">
          {profile.location}
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
          <a className="link-underline" href={profile.socials.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a className="link-underline" href={profile.socials.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a className="link-underline" href={profile.socials.resume} target="_blank" rel="noreferrer">
            Resume ↗
          </a>
        </div>
      </div>
    </Section>
  );
}
