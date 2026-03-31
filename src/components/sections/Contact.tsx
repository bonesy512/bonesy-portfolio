"use client";

import { useState } from "react";
import { MotionWrapper } from "../animations/MotionWrapper";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormState = {
  name: string;
  email: string;
  message: string;
};

type Status = "idle" | "loading" | "success" | "error";

export function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
    } catch {
      setErrorMsg("Network error. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-background px-6 md:px-12 relative overflow-hidden">
      {/* Decorative Radial Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,_#d4af37_0%,_transparent_50%)] blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <MotionWrapper>
          <span className="text-primary font-heading text-[0.6875rem] uppercase tracking-[0.3em] mb-6 block">
            Inquiries
          </span>
          <h2 className="text-5xl md:text-7xl font-extrabold font-heading mb-6 tracking-tight text-foreground text-balance">
            Let&apos;s build with intent.
          </h2>
          <p className="text-muted-foreground font-light text-lg mb-16">
            Currently accepting select commissions for 2026.
          </p>
        </MotionWrapper>

        <MotionWrapper delay={0.2}>
          {status === "success" ? (
            <div className="bg-card p-12 rounded-2xl shadow-2xl border border-border/40 text-center">
              <div className="text-primary text-5xl mb-6">✦</div>
              <h3 className="text-2xl font-bold font-heading mb-3">Message Received</h3>
              <p className="text-muted-foreground font-light">
                Thank you for reaching out. I&apos;ll be in touch within 48 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-8 text-left bg-card p-8 md:p-12 rounded-2xl shadow-2xl border border-border/40"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-[0.6rem] uppercase tracking-widest text-primary font-bold block">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Thomas Schustereit…"
                    className="bg-background border-none rounded-xl py-6 px-6 focus-visible:ring-1 focus-visible:ring-primary text-foreground placeholder:text-muted-foreground/50 transition-[box-shadow] font-body text-base"
                  />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-[0.6rem] uppercase tracking-widest text-primary font-bold block">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    required
                    type="email"
                    autoComplete="email"
                    spellCheck={false}
                    value={form.email}
                    onChange={handleChange}
                    placeholder="e.g. hello@yourcompany.com…"
                    className="bg-background border-none rounded-xl py-6 px-6 focus-visible:ring-1 focus-visible:ring-primary text-foreground placeholder:text-muted-foreground/50 transition-[box-shadow] font-body text-base"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="text-[0.6rem] uppercase tracking-widest text-primary font-bold block">
                  Project Brief
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  autoComplete="off"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project and goals…"
                  rows={4}
                  className="bg-background border-none rounded-xl py-4 px-6 focus-visible:ring-1 focus-visible:ring-primary text-foreground placeholder:text-muted-foreground/50 transition-[box-shadow] font-body text-base resize-none"
                />
              </div>

              {status === "error" && (
                <p role="alert" className="text-red-400 text-sm font-light">
                  {errorMsg} Please check your details and try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-primary text-primary-foreground font-bold py-5 rounded-xl motion-safe:hover:scale-[1.01] motion-safe:transition-transform text-sm tracking-[0.2em] uppercase disabled:opacity-60"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </MotionWrapper>
      </div>
    </section>
  );
}
