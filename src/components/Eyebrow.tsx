interface EyebrowProps {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}

export default function Eyebrow({ children, dark = false, className = '' }: EyebrowProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div
        className="h-px w-6 flex-shrink-0"
        style={{ backgroundColor: dark ? '#CAA549' : '#CAA549' }}
      />
      <span
        className="font-mono text-[11px] uppercase tracking-[0.14em] font-medium"
        style={{ color: dark ? '#CAA549' : '#7A5E16' }}
      >
        {children}
      </span>
    </div>
  );
}
