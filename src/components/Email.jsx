import { useState, useCallback } from "react";

const Email = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = useCallback(() => {
    const textToCopy = "lunox.code@gmail.com";
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);

    // Eestablecer copied en false luego de 1 seg
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }, []);

  return (
    <>
      <div
        onClick={handleCopyClick}
        className="flex items-center justify-center gap-2"
      >
        <p>lunox.code@gmail.com</p>
        <div className="hover:scale-125">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="#4477ce"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 3H4v13" />
              <path d="M8 7h12v12a2 2 0 0 1-2 2h-8a2 2 0 0 1-2-2V7Z" />
            </g>
          </svg>
        </div>
      </div>
      {copied && <p className="absolute mt-16">Copied!</p>}
    </>
  );
};

export default Email;
