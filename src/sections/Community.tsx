import { Section } from '../components/Section';
import { contributions } from '../data/community';

const kindLabel: Record<string, string> = {
  issue: 'Issue',
  pr: 'Pull Request',
  discussion: 'Discussion',
  talk: 'Talk',
  post: 'Writing',
};

export function Community() {
  return (
    <Section id="community" eyebrow="05 · Community" title="Open source & writing">
      <div className="space-y-3">
        {contributions.map((c, idx) => (
          <div key={idx} className="card flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
                {c.project} · {kindLabel[c.kind] ?? c.kind}
              </p>
              <h3 className="mt-1 text-base font-semibold text-white">{c.title}</h3>
              <p className="mt-1 text-sm text-slate-400">{c.description}</p>
            </div>
            {c.link && (
              <a href={c.link} target="_blank" rel="noreferrer" className="link-underline text-sm">
                View ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
