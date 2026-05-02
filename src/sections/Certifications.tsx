import type { ReactNode } from 'react';
import { Section } from '../components/Section';
import { achievements, certifications } from '../data/certifications';

export function Certifications() {
  return (
    <Section id="certifications" eyebrow="06 · Credentials" title="Certifications & achievements">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <Column label="Certifications">
          {certifications.map((c) => (
            <CredentialCard
              key={c.name}
              meta={[c.issuer, c.year].filter(Boolean).join(' · ')}
              title={c.name}
              action={
                c.link ? (
                  <a href={c.link} target="_blank" rel="noreferrer" className="link-underline text-xs">
                    View credential ↗
                  </a>
                ) : null
              }
              badge={c.badge}
            />
          ))}
        </Column>

        <Column label="Achievements">
          {achievements.map((a) => (
            <CredentialCard
              key={a.title}
              meta={a.year ?? ''}
              title={a.title}
              description={a.description}
            />
          ))}
        </Column>
      </div>
    </Section>
  );
}

function Column({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">
        {label}
      </p>
      <ul className="flex flex-col gap-3">{children}</ul>
    </div>
  );
}

type CredentialCardProps = {
  meta: string;
  title: string;
  description?: string;
  action?: ReactNode;
  badge?: string;
};

function CredentialCard({ meta, title, description, action, badge }: CredentialCardProps) {
  return (
    <li className="card flex h-full items-start gap-4">
      {badge && (
        <img
          src={badge}
          alt=""
          loading="lazy"
          className="h-16 w-16 shrink-0 rounded-md object-contain"
        />
      )}
      <div className="flex min-w-0 flex-1 flex-col">
        <p className="text-sm font-semibold text-white">{title}</p>
        {meta && (
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
            {meta}
          </p>
        )}
        {description && (
          <p className="mt-2 text-xs leading-relaxed text-slate-400">{description}</p>
        )}
        {action && <div className="mt-auto pt-3">{action}</div>}
      </div>
    </li>
  );
}
