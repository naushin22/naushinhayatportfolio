import { ArrowUp } from 'lucide-react';
import { usePortfolioContent } from '../lib/PortfolioProvider';

const footerLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const { content } = usePortfolioContent();
  return (
    <footer className="border-t border-border px-6 py-12 md:px-10">
      <div className="mx-auto max-w-editorial">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <a
              href="#top"
              className="font-display text-[15px] font-semibold tracking-tight text-primary transition-colors hover:text-accent"
            >
              {content.profile.name.toUpperCase()}
            </a>
            <p className="mt-2 font-body text-[12px] font-light text-muted">
              {content.profile.role} · {content.profile.location}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-[12px] font-medium tracking-wide text-secondary transition-colors hover:text-accent"
              >
                {link.label.toUpperCase()}
              </a>
            ))}
          </div>

          <a
            href="#top"
            className="group inline-flex items-center gap-2 font-body text-[12px] font-medium tracking-wide text-secondary transition-colors hover:text-accent"
          >
            BACK TO TOP
            <ArrowUp
              size={14}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-body text-[11px] font-light text-muted">
            © {new Date().getFullYear()} Naushin Hayat. All rights reserved.
          </p>
          <p className="font-body text-[11px] font-light text-muted">
            Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
