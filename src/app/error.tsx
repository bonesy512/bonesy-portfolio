"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-background flex flex-col items-center justify-center text-foreground px-6 text-center">
      <span className="text-primary font-heading text-[0.6875rem] uppercase tracking-[0.3em] mb-4 block">
        Error
      </span>
      <h2 className="text-5xl md:text-6xl font-extrabold font-heading tracking-tighter mb-6">
        Something went wrong
      </h2>
      <p className="text-muted-foreground mb-12 max-w-md text-lg font-light">
        An unexpected error occurred. Please try again.
      </p>
      <button
        onClick={reset}
        className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl text-sm uppercase tracking-widest hover:opacity-90 transition-opacity"
      >
        Try Again
      </button>
    </main>
  );
}
