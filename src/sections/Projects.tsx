import { useRef } from 'react';
import { Section } from '../components/Section';
import { projects, type Project } from '../data/projects';

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="03 · Projects"
      title="Selected work"
      kicker="Full-stack, real-time systems, and AI tooling."
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLElement>(null);
  const githubLinks = Array.isArray(project.links.github)
    ? project.links.github
    : project.links.github
      ? [project.links.github]
      : [];

  const handleMove = (e: React.MouseEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`);
    el.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`);
  };

  return (
    <article ref={ref} onMouseMove={handleMove} className="card group flex h-full flex-col">
      <div className="relative z-[1] flex items-start justify-between gap-3">
        <div>
          <h3 className="font-heading text-base font-semibold text-white">{project.name}</h3>
          {project.featured && (
            <span className="mt-1 inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-mint-400">
              featured
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 text-xs text-slate-400">
          {githubLinks.length === 1 && (
            <a href={githubLinks[0]} target="_blank" rel="noreferrer" className="transition hover:text-white">
              GitHub ↗
            </a>
          )}
          {project.links.live && (
            <a href={project.links.live} target="_blank" rel="noreferrer" className="transition hover:text-white">
              Live ↗
            </a>
          )}
        </div>
      </div>

      <p className="relative z-[1] mt-3 text-sm text-slate-300">{project.summary}</p>
      <p className="relative z-[1] mt-2 text-sm leading-relaxed text-slate-400">
        {project.description}
      </p>

      {githubLinks.length > 1 && (
        <div className="relative z-[1] mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs">
          {githubLinks.map((link) => {
            const label = link.split('/').pop() ?? link;
            return (
              <a key={link} href={link} target="_blank" rel="noreferrer" className="link-underline font-mono">
                {label} ↗
              </a>
            );
          })}
        </div>
      )}

      <div className="relative z-[1] mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <span key={t} className="pill">
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}
