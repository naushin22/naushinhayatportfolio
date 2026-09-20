import { type ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  href = '#',
  variant = 'primary',
  className = '',
  onClick,
}: ButtonProps) {
  const base =
    'group relative inline-flex items-center gap-2 px-6 py-3.5 text-[13px] font-medium tracking-wide transition-all duration-300 overflow-hidden';

  const variants = {
    primary:
      'bg-primary text-bg hover:bg-accent',
    secondary:
      'border border-border hover:border-border-hover text-primary hover:text-accent',
    ghost:
      'text-secondary hover:text-primary px-0 py-0',
  };

  return (
    <a
      href={href}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </a>
  );
}
