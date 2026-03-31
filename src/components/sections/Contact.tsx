"use client";

import { useState } from "react";
import { GsapWrapper } from "../animations/GsapWrapper";
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
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,_#f2ca50_0%,_transparent_60%)] blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <GsapWrapper yOffset={30}>
          <span className="text-primary font-heading text-[0.6875rem] uppercase tracking-[0.3em] mb-6 block">
            Inquiries
          </span>
          <h2 className="text-5xl md:text-7xl font-extrabold font-heading mb-6 tracking-tight text-foreground text-balance">
            Let&apos;s build with intent.
          </h2>
          <p className="text-muted-foreground font-light text-lg mb-16">
            Currently accepting select commissions for 2026.
          </p>
        </GsapWrapper>

        <GsapWrapper delay={0.3} yOffset={50}>
          {status === "success" ? (
            <div className="glass p-12 rounded-3xl shadow-spatial border border-white/5 text-center">
              <div className="text-primary text-6xl mb-6">✦</div>
              <h3 className="text-2xl font-extrabold font-heading mb-3 tracking-widest uppercase">Message Received</h3>
              <p className="text-muted-foreground font-light">
                Thank you for reaching out. I&apos;ll be in touch within 48 hours.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-10 text-left glass p-8 md:p-14 rounded-3xl shadow-spatial border border-white/5 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="space-y-4">
                  <label htmlFor="name" className="text-[0.65rem] uppercase tracking-[0.3em] text-primary font-black block">
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
                    className="bg-background/20 border-white/5 rounded-2xl h-14 px-6 focus-visible:ring-1 focus-visible:ring-primary/50 text-foreground placeholder:text-muted-foreground/30 transition-all font-body text-base"
                  />
                </div>
                <div className="space-y-4">
                  <label htmlFor="email" className="text-[0.65rem] uppercase tracking-[0.3em] text-primary font-black block">
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
                    className="bg-background/20 border-white/5 rounded-2xl h-14 px-6 focus-visible:ring-1 focus-visible:ring-primary/50 text-foreground placeholder:text-muted-foreground/30 transition-all font-body text-base"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <label htmlFor="message" className="text-[0.65rem] uppercase tracking-[0.3em] text-primary font-black block">
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
                  className="bg-background/20 border-white/5 rounded-2xl p-6 min-h-[160px] focus-visible:ring-1 focus-visible:ring-primary/50 text-foreground placeholder:text-muted-foreground/30 transition-all font-body text-base resize-none"
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
                className="w-full bg-primary text-primary-foreground font-black h-16 rounded-2xl transition-all shadow-spatial hover:scale-[1.02] active:scale-[0.98] text-[0.7rem] tracking-[0.4em] uppercase disabled:opacity-60 flex items-center justify-center gap-4"
              >
                {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
                <span className="opacity-40">→</span>
              </button>
            </form>
          )}
        </GsapWrapper>
      </div>
    </section>
  );
}
