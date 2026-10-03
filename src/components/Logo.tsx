import Image from 'next/image';

interface LogoProps {
  /** Visual height in pixels */
  height?: number;
  className?: string;
  /** Light badge behind the logo for dark backgrounds */
  onDark?: boolean;
  priority?: boolean;
}

export default function Logo({
  height = 40,
  className = '',
  onDark = false,
  priority = false,
}: LogoProps) {
  // Source logo is roughly 2:1
  const width = Math.round(height * 2.4);

  const image = (
    <Image
      src="/bachani-logo.png"
      alt="Bachani Farms"
      width={width}
      height={height}
      priority={priority}
      className="h-full w-auto object-contain"
    />
  );

  if (onDark) {
    return (
      <span
        className={`inline-flex items-center rounded-full bg-paper px-2.5 py-1 ${className}`}
        style={{ height: height + 8 }}
      >
        {image}
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center ${className}`} style={{ height }}>
      {image}
    </span>
  );
}
