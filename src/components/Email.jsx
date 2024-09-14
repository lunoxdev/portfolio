import { useState } from "react";
import { copyToClipboard } from "@utils/util";

export default function Email() {
  const [copied, setCopied] = useState(false);
  const email = "lunox.code@gmail.com";

  const handleCopy = () => {
    copyToClipboard(email);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <div className="flex items-center gap-2">
      <span>{email}</span>
      <button onClick={handleCopy} aria-label="Copy email">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M16 3H4v13" />
            <path d="M8 7h12v12a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2z" />
          </g>
        </svg>
      </button>

      {copied && <div className="text-xs text-green-500">Copied</div>}
    </div>
  );
}
