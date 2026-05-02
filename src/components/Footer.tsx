import { profile } from '../data/profile';

export function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-6 py-10 text-xs text-slate-500">
      <div className="flex flex-col items-start justify-between gap-2 border-t border-white/5 pt-8 md:flex-row md:items-center">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind, and R3F.
        </p>
        <p className="font-mono">
          <a className="hover:text-slate-300" href={profile.socials.github}>
            github.com/sachin-gupta99
          </a>
        </p>
      </div>
    </footer>
  );
}
