
"use client";

import { useEffect, useState } from "react";

export default function ProfilePhoto() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Interactive profile photo */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="View profile photo"
        className="group relative flex aspect-square w-full max-w-[320px] items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-red-500 sm:max-w-[360px]"
      >
        {/* Soft glow */}
        <span
          aria-hidden="true"
          className="absolute inset-2 rounded-full bg-red-500/10 blur-2xl transition-all duration-500 group-hover:bg-red-500/20"
        />

        {/* Rotating magical ring */}
        <span
          aria-hidden="true"
          className="profile-magic-ring absolute inset-0 rounded-full"
        />

        {/* Inner ring */}
        <span
          aria-hidden="true"
          className="absolute inset-[7px] rounded-full border border-red-500/20"
        />

        {/* Profile image */}
        <span className="absolute inset-[13px] overflow-hidden rounded-full border-2 border-[var(--border)] bg-[var(--surface)] shadow-[0_0_35px_rgba(239,68,68,0.12)] transition-all duration-500 group-hover:scale-[1.025] group-hover:border-red-500/60 group-hover:shadow-[0_0_45px_rgba(239,68,68,0.2)]">
          <img
            src="/images/profile.jpg"
            alt="Junayed Hasan"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </span>
      </button>

      {/* Expanded photo overlay */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Expanded profile photo"
          onClick={() => setIsOpen(false)}
          className="profile-overlay fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-5 backdrop-blur-md sm:p-8"
        >
          {/* Close button */}
          <button
            type="button"
            aria-label="Close profile photo"
            onClick={() => setIsOpen(false)}
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-3xl leading-none text-white transition-colors hover:border-red-400 hover:bg-red-500/80"
          >
            <span aria-hidden="true">&times;</span>
          </button>

          {/* Enlarged photo */}
          <div
            onClick={(event) => event.stopPropagation()}
            className="profile-popup relative max-h-[85vh] w-full max-w-3xl"
          >
            <div className="absolute -inset-3 rounded-[2rem] bg-red-500/20 blur-2xl" />

            <img
              src="/images/profile.jpg"
              alt="Junayed Hasan — profile photo"
              className="relative mx-auto max-h-[85vh] w-auto max-w-full rounded-2xl border border-white/20 object-contain shadow-2xl"
            />

            <p className="mt-4 text-center text-sm tracking-wide text-white/80">
              Junayed Hasan
            </p>
          </div>
        </div>
      )}

      <style jsx>{`
        .profile-magic-ring {
          background: conic-gradient(
            from 0deg,
            transparent 0deg,
            transparent 45deg,
            rgba(239, 68, 68, 0.12) 85deg,
            rgba(248, 113, 113, 0.95) 115deg,
            rgba(255, 255, 255, 0.85) 125deg,
            rgba(239, 68, 68, 0.15) 145deg,
            transparent 180deg,
            transparent 260deg,
            rgba(239, 68, 68, 0.45) 300deg,
            transparent 330deg,
            transparent 360deg
          );
          animation: profileRingSpin 8s linear infinite;
          mask: radial-gradient(
            farthest-side,
            transparent calc(100% - 2px),
            black calc(100% - 1px)
          );
          -webkit-mask: radial-gradient(
            farthest-side,
            transparent calc(100% - 2px),
            black calc(100% - 1px)
          );
          pointer-events: none;
        }

        .profile-overlay {
          animation: profileFadeIn 250ms ease-out;
        }

        .profile-popup {
          animation: profilePopUp 400ms cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes profileRingSpin {
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes profileFadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes profilePopUp {
          from {
            opacity: 0;
            transform: scale(0.88) translateY(12px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .profile-magic-ring {
            animation-duration: 24s;
          }

          .profile-overlay,
          .profile-popup {
            animation-duration: 0.01ms;
          }
        }
      `}</style>
    </>
  );
}
