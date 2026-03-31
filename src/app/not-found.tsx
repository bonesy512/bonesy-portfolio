import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center text-foreground px-6 text-center">
      <span className="text-primary font-heading text-[0.6875rem] uppercase tracking-[0.3em] mb-4 block">
        404
      </span>
      <h1 className="text-5xl md:text-7xl font-extrabold font-heading tracking-tighter mb-6">
        Page Not Found
      </h1>
      <p className="text-muted-foreground mb-12 max-w-md text-lg font-light">
        The page you're looking for doesn't exist, or has been removed.
      </p>
      <Link
        href="/"
        className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
      >
        Return Home
      </Link>
    </main>
  );
}
