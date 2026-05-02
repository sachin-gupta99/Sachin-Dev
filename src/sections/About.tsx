import { Section } from '../components/Section';
import { profile } from '../data/profile';

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 · About"
      title="A bit about me"
      kicker="SDE at JPMorganChase, building internal financial applications end-to-end."
    >
      <div className="grid grid-cols-1 gap-14 md:grid-cols-[1.35fr_1fr]">
        <div className="space-y-5 text-[15px] leading-relaxed text-slate-400">
          <p>{profile.summary}</p>
          <p>
            At JPMorganChase I own the UI for internal financial applications end-to-end — from
            design translation to production — and regularly cross into backend work on Spring Boot
            services, real-time features on WebSockets and Redis Streams, and infrastructure
            managed with Terraform on AWS ECS.
          </p>
          <p>
            Outside day-job work, I contribute to open-source projects in the Java AI ecosystem
            (Spring AI, LangChain4j) and build side projects end-to-end. I care about test
            coverage, clean architecture, and trimming infra bills.
          </p>
        </div>

        <div>
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.25em] text-slate-500">
            Currently exploring
          </p>
          <ul className="mb-10 space-y-2 text-sm text-slate-300">
            {profile.learning.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 inline-block h-1 w-1 rounded-full bg-accent" />
                {item}
              </li>
            ))}
          </ul>

          <div className="space-y-4">
            <SkillRow label="Languages" items={profile.skills.languages} />
            <SkillRow label="Frameworks" items={profile.skills.frameworks} />
            <SkillRow label="Databases" items={profile.skills.databases} />
            <SkillRow label="Tools" items={profile.skills.tools} />
          </div>
        </div>
      </div>
    </Section>
  );
}

function SkillRow({ label, items }: { label: string; items: readonly string[] }) {
  return (
    <div>
      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
        {label}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span key={item} className="pill">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
