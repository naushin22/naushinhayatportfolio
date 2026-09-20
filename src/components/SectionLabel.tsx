interface SectionLabelProps {
  children: string;
  className?: string;
}

export default function SectionLabel({ children, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="h-px w-8 bg-accent" />
      <span className="font-body text-[11px] font-medium uppercase tracking-wide-3 text-secondary">
        {children}
      </span>
    </div>
  );
}
