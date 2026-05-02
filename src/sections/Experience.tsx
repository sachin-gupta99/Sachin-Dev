import { Section } from '../components/Section';
import { experience } from '../data/experience';

export function Experience() {
  return (
    <Section id="experience" eyebrow="02 · Experience" title="Where I've worked">
      <ol className="relative space-y-10 border-l border-white/10 pl-6">
        {experience.map((entry) => (
          <li key={`${entry.company}-${entry.start}`} className="relative">
            <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border border-accent bg-ink-950" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-white">
                {entry.role} <span className="text-accent">@ {entry.company}</span>
              </h3>
              <span className="font-mono text-xs text-slate-500">
                {entry.start} — {entry.end}
              </span>
            </div>
            {entry.location && (
              <p className="mt-0.5 text-xs text-slate-500">{entry.location}</p>
            )}
            <ul className="mt-3 space-y-2 text-sm text-slate-400">
              {entry.highlights.map((h, i) => (
                <li key={i} className="flex gap-2">
                  <span className="mt-2 inline-block h-1 w-1 rounded-full bg-accent/70" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            {entry.stack && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {entry.stack.map((s) => (
                  <span key={s} className="pill">
                    {s}
                  </span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ol>
    </Section>
  );
}
