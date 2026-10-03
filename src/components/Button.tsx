import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  to?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'light';
  size?: 'sm' | 'md';
  className?: string;
  type?: 'button' | 'submit';
  showArrow?: boolean;
}

export default function Button({
  children,
  href,
  to,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  showArrow = false,
}: ButtonProps) {
  const linkHref = to || href;
  const base =
    'inline-flex items-center gap-2 font-body font-medium rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest cursor-pointer select-none';
  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 h-[52px] text-base',
  };
  const variants = {
    primary: 'bg-forest text-white hover:bg-leaf active:scale-[0.98]',
    secondary: 'border border-forest text-forest hover:bg-forest hover:text-white active:scale-[0.98]',
    light: 'border border-white/60 text-white hover:bg-white/10 active:scale-[0.98]',
  };
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const inner = (
    <>
      {children}
      {showArrow && (
        <ArrowRight
          size={16}
          strokeWidth={1.5}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (linkHref) return <Link href={linkHref} className={`group ${cls}`}>{inner}</Link>;
  return (
    <button type={type} onClick={onClick} className={`group ${cls}`}>
      {inner}
    </button>
  );
}
