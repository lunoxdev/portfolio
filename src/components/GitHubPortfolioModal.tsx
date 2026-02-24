import { useEffect, useState } from "react";

const REDIRECT_URL = "https://github.com/Lunoxdev";
const COUNTDOWN_SECONDS = 15;

export default function GitHubPortfolioModal() {
  const [secondsLeft, setSecondsLeft] = useState(COUNTDOWN_SECONDS);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          window.location.href = REDIRECT_URL;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/10"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="mx-4 max-w-md rounded-2xl border border-[#e7f8ff]/20 bg-black/90 p-6 shadow-xl shadow-[#e7f8ff]/5">
        <h2
          id="modal-title"
          className="mb-4 text-center text-xl font-semibold text-[#e7f8ff]"
        >
          Portfolio notice
        </h2>
        <p className="mb-6 text-center text-[#e7f8ff]/90">
          I use GitHub as my portfolio, not this project anymore. You will be redirected
          to my GitHub profile shortly.
        </p>
        <div className="flex flex-col items-center gap-3">
          <div className="text-4xl font-bold tabular-nums text-[#e7f8ff]">
            {secondsLeft}
          </div>
          <span className="text-sm text-[#e7f8ff]/70">
            Redirecting in {secondsLeft} second{secondsLeft !== 1 ? "s" : ""}…
          </span>
          <a
            href={REDIRECT_URL}
            className="mt-2 rounded-lg bg-[#e7f8ff]/10 px-4 py-2 text-sm font-medium text-[#e7f8ff] hover:bg-[#e7f8ff]/20"
          >
            Go now
          </a>
        </div>
      </div>
    </div>
  );
}
