interface SectionHeadingProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3';
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  children,
  as: Tag = 'h2',
  dark = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <Tag
      className={`font-display font-semibold leading-[1.02] tracking-[-0.02em] ${
        dark ? 'text-paper' : 'text-ink'
      } ${className}`}
      style={{ fontFamily: 'Fraunces, Georgia, serif' }}
    >
      {children}
    </Tag>
  );
}
