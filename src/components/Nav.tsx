import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const items = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#community', label: 'Community' },
  { href: '#certifications', label: 'Credentials' },
  { href: '#contact', label: 'Contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>('about');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = items
      .map((i) => document.querySelector(i.href))
      .filter((el): el is Element => !!el);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors ${
        scrolled || open ? 'border-b border-white/5 bg-ink-950/80 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="font-heading text-sm font-semibold tracking-tight text-white"
        >
          sachin<span className="text-accent">.dev</span>
        </a>

        <ul className="hidden gap-7 text-sm text-slate-400 md:flex">
          {items.map((item) => {
            const isActive = active === item.href.slice(1);
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative py-1 transition-colors ${
                    isActive ? 'text-white' : 'hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-0.5 left-0 h-px w-full bg-accent/60" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="relative flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.02] text-slate-300 transition hover:border-white/20 hover:text-white md:hidden"
        >
          <span className="sr-only">Toggle menu</span>
          <span aria-hidden className="relative block h-3 w-4">
            <span
              className={`absolute left-0 block h-px w-4 bg-current transition-transform duration-300 ${
                open ? 'top-1.5 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-px w-4 bg-current transition-opacity duration-200 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 block h-px w-4 bg-current transition-transform duration-300 ${
                open ? 'top-1.5 -rotate-45' : 'top-3'
              }`}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="md:hidden"
          >
            <ul className="mx-auto max-w-5xl px-6 pb-6 pt-2">
              {items.map((item) => {
                const isActive = active === item.href.slice(1);
                return (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between border-b border-white/5 py-3 text-base transition ${
                        isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="font-mono text-[11px] text-slate-600">
                        {String(items.indexOf(item) + 1).padStart(2, '0')}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
