import { motion } from 'framer-motion';
import { HeroScene } from '../components/HeroScene';
import { profile } from '../data/profile';

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto flex min-h-[100svh] max-w-5xl items-center px-6 pb-10 pt-28 md:pt-24"
    >
      <div className="grid w-full grid-cols-1 items-center gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.2, 0.65, 0.3, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-400 md:text-[11px]">
            <span className="h-1.5 w-1.5 rounded-full bg-mint-400" />
            Available for conversations
          </div>

          <h1 className="font-heading text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            {profile.name}
          </h1>

          <p className="mt-3 font-heading text-lg font-medium tracking-tight text-slate-400 sm:text-xl md:mt-4 md:text-2xl">
            {profile.role} · {profile.location}
          </p>

          <div className="mt-5 max-w-xl space-y-1 text-sm leading-relaxed text-slate-400 sm:text-base md:mt-6">
            {profile.tagline.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3 md:mt-8">
            <a href="#projects" className="btn-primary">
              See projects
            </a>
            <a
              href={profile.socials.resume}
              target="_blank"
              rel="noreferrer"
              className="btn-ghost"
            >
              Resume ↗
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-400 md:mt-10">
            <a className="link-underline" href={profile.socials.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="link-underline" href={profile.socials.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="link-underline" href={`mailto:${profile.email}`}>
              Email
            </a>
          </div>
        </motion.div>

        <div className="relative order-first h-56 w-full sm:h-64 md:order-none md:h-[26rem]">
          <HeroScene />
        </div>
      </div>
    </section>
  );
}
