import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold transition-all duration-200";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-light shadow-md hover:shadow-lg",
    secondary: "bg-secondary text-primary-dark hover:bg-secondary/90 shadow-md hover:shadow-lg",
    outline:
      "border-2 border-white text-white hover:bg-white hover:text-primary-dark",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
