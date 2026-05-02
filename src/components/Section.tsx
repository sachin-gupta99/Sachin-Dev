import type { PropsWithChildren } from 'react';
import { Reveal } from './Reveal';

type Props = PropsWithChildren<{
  id: string;
  eyebrow: string;
  title: string;
  kicker?: string;
}>;

export function Section({ id, eyebrow, title, kicker, children }: Props) {
  return (
    <section id={id} className="section scroll-mt-24">
      <Reveal>
        <div className="section-heading">
          <span>{eyebrow}</span>
        </div>
        <div className="mb-12 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="display-title">{title}</h2>
          {kicker && (
            <p className="max-w-md text-sm text-slate-400 md:text-right">{kicker}</p>
          )}
        </div>
      </Reveal>
      <Reveal delay={0.08}>{children}</Reveal>
    </section>
  );
}
