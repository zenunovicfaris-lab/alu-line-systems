"use client";

import { useState } from "react";
import Image from "next/image";

export default function MaintenancePage() {
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(true);
  };

  return (
    <main
      className="min-h-screen flex items-center justify-center px-6"
      style={{ background: "#0f1620" }}
    >
      <style>{`
        @keyframes warningPulse {
          0%, 100% { opacity: 1; transform: scale(1); filter: drop-shadow(0 0 8px #ff2020) drop-shadow(0 0 24px #ff2020); }
          50% { opacity: 0.55; transform: scale(0.97); filter: drop-shadow(0 0 2px #ff2020); }
        }
        @keyframes warningGlow {
          0%, 100% { box-shadow: 0 0 18px 4px rgba(255,30,30,0.55), 0 0 60px 10px rgba(255,30,30,0.2); border-color: rgba(255,50,50,0.7); }
          50% { box-shadow: 0 0 6px 1px rgba(255,30,30,0.18), 0 0 16px 2px rgba(255,30,30,0.08); border-color: rgba(255,50,50,0.2); }
        }
        @keyframes textBlink {
          0%, 100% { opacity: 1; }
          45% { opacity: 1; }
          50% { opacity: 0.25; }
          55% { opacity: 1; }
        }
        .warning-icon { animation: warningPulse 1.4s ease-in-out infinite; }
        .warning-box { animation: warningGlow 1.4s ease-in-out infinite; }
        .warning-text { animation: textBlink 1.4s ease-in-out infinite; }
      `}</style>

      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/logo/alu-line.png"
            alt="ALU LINE Systems"
            width={60}
            height={60}
            className="object-contain opacity-90"
          />
        </div>

        {/* Brand */}
        <p className="text-center text-[11px] font-semibold tracking-[0.3em] uppercase text-white/30 mb-8">
          ALU LINE Systems
        </p>

        {/* Warning Sign */}
        <div
          className="warning-box flex items-center gap-4 px-5 py-4 rounded-2xl mb-6"
          style={{
            background: "rgba(30,0,0,0.85)",
            border: "1.5px solid rgba(255,50,50,0.5)",
          }}
        >
          <svg
            className="warning-icon flex-shrink-0"
            width="38"
            height="38"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 2L1 21h22L12 2z"
              fill="#ff1e1e"
              stroke="#ff6060"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
            <rect x="11" y="9" width="2" height="6" rx="1" fill="#fff" />
            <circle cx="12" cy="17.5" r="1.1" fill="#fff" />
          </svg>
          <div>
            <p className="warning-text text-red-400 text-xs font-bold tracking-widest uppercase leading-none mb-1">
              Upozorenje
            </p>
            <p className="text-white/65 text-[11px] leading-snug">
              Neovlašteni pristup je strogo zabranjen
            </p>
          </div>
        </div>

        {/* Card */}
        <div
          className="rounded-2xl p-8"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {/* Notice */}
          <p className="text-white/50 text-sm leading-relaxed text-center mb-7">
            Pristup je dozvoljen samo autorizovanim korisnicima nakon
            finalizacije ugovora o saradnji.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              type="text"
              placeholder="Korisničko ime"
              autoComplete="off"
              className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 outline-none"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            />
            <input
              type="password"
              placeholder="Lozinka"
              autoComplete="off"
              className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 outline-none"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            />

            {error && (
              <p className="text-red-400/80 text-xs text-center mt-1">
                Pogrešno korisničko ime ili lozinka.
              </p>
            )}

            <button
              type="submit"
              className="mt-2 w-full py-3 rounded-xl text-sm font-semibold text-white transition-colors duration-200"
              style={{ background: "#143c5f" }}
            >
              Prijava
            </button>
          </form>
        </div>

        {/* Contact */}
        <div className="mt-8 text-center">
          <p className="text-white/20 text-xs mb-1">Za više informacija kontaktirajte</p>
          <a
            href="https://www.fariszenunovic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 text-sm font-medium hover:text-white/80 transition-colors duration-200 block"
          >
            Faris Zenunovic
          </a>
          <a
            href="tel:+38760305894"
            className="text-white/35 text-sm hover:text-white/70 transition-colors duration-200"
          >
            +387 60 305 58 94
          </a>
        </div>
      </div>
    </main>
  );
}
