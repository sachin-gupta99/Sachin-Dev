import { Section } from '../components/Section';
import { education } from '../data/education';

export function Education() {
  return (
    <Section id="education" eyebrow="04 · Education" title="Where I studied">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {education.map((e) => (
          <div key={`${e.institution}-${e.start}`} className="card">
            <h3 className="text-base font-semibold text-white">{e.institution}</h3>
            <p className="mt-1 text-sm text-accent">{e.degree}</p>
            <p className="mt-2 font-mono text-xs text-slate-500">
              {e.start} — {e.end}
            </p>
            {e.details && <p className="mt-3 text-sm text-slate-400">{e.details}</p>}
          </div>
        ))}
      </div>
    </Section>
  );
}
