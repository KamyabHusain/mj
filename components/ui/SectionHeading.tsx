interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  label,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-10 ${centered ? "text-center" : ""}`}>
      {label && (
        <span
          className={`mb-2 inline-block text-sm font-semibold uppercase tracking-widest ${light ? "text-secondary" : "text-primary"}`}
        >
          {label}
        </span>
      )}
      <h2
        className={`text-3xl font-bold sm:text-4xl ${light ? "text-white" : "text-foreground"}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-3xl text-lg ${centered ? "mx-auto" : ""} ${light ? "text-gray-300" : "text-text-muted"}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
