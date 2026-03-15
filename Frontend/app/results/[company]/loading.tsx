"use client";

import { useState, useEffect } from "react";
import Logo from "@/components/shared/Logo";

const researchSteps = [
  "Initializing research pipeline",
  "Searching company profile & business model",
  "Mapping competitive landscape",
  "Identifying ecosystem relationships",
  "Scanning news & sentiment signals",
  "Checking Sagard portfolio overlap",
  "Scoring investment thesis fit",
  "Synthesizing intelligence brief",
];

export default function Loading() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [elapsedTimes, setElapsedTimes] = useState<Record<number, string>>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev < researchSteps.length - 1) {
          setCompletedSteps((completed) => [...completed, prev]);
          setElapsedTimes((times) => ({
            ...times,
            [prev]: (Math.random() * 0.3 + 0.1).toFixed(2),
          }));
          return prev + 1;
        }
        clearInterval(interval);
        return prev;
      });
    }, 420);

    return () => clearInterval(interval);
  }, []);

  const progress = ((activeStep + 1) / researchSteps.length) * 100;

  return (
    <div className="w-full bg-[var(--bg)] min-h-screen flex flex-col border border-[var(--border)]">
      {/* Navigation */}
      <nav className="flex items-center justify-between py-3.5 px-8 border-b border-[var(--border)]">
        <Logo />
        <div className="text-[10px] text-[var(--text4)] tracking-[0.1em] font-mono">
          PRIVATE COMPANY RESEARCH &middot; V1.0
        </div>
      </nav>

      {/* Loading Content */}
      <main className="flex-1 flex flex-col items-center justify-center py-[60px] px-8">
        <div className="w-full max-w-[420px]">
          {/* Heading */}
          <h2 className="font-serif text-[20px] font-light text-[var(--text)] mb-8 text-center">
            Researching <em className="text-[var(--gold)] italic">company</em>
            ...
          </h2>

          {/* Research Feed */}
          <div className="mb-6">
            {researchSteps.map((step, index) => {
              const isCompleted = completedSteps.includes(index);
              const isActive = activeStep === index;
              const isPending = index > activeStep;

              return (
                <div
                  key={index}
                  className="flex items-center justify-between py-2.5 border-b border-[var(--border)] font-mono text-[12px] transition-all duration-400"
                  style={{
                    opacity: isPending ? 0 : 1,
                    transform: isPending ? "translateX(-8px)" : "translateX(0)",
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="w-4 text-center"
                      style={{
                        color: isCompleted
                          ? "var(--green)"
                          : isActive
                            ? "var(--gold)"
                            : "var(--text4)",
                      }}
                    >
                      {isCompleted ? "✓" : isActive ? "›" : ""}
                    </span>
                    <span className="text-[var(--text2)]">{step}</span>
                  </div>
                  {isCompleted && elapsedTimes[index] && (
                    <span className="text-[var(--text4)]">
                      {elapsedTimes[index]}s
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Progress Bar */}
          <div className="w-full h-0.5 bg-[var(--border)]">
            <div
              className="h-full bg-[var(--gold)] transition-all duration-600 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
