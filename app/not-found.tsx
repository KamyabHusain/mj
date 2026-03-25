import CTAButton from "@/components/ui/CTAButton";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-white">
      <div className="text-center px-4">
        <h1 className="mb-2 text-7xl font-bold text-primary">404</h1>
        <h2 className="mb-4 text-2xl font-bold text-foreground">
          Page Not Found
        </h2>
        <p className="mb-8 max-w-md text-text-muted">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <CTAButton href="/" variant="primary">
          Back to Home
        </CTAButton>
      </div>
    </section>
  );
}
