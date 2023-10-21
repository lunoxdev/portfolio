import { useState, useCallback } from "react";
import copyicon from "../../public/copy-icon.svg";

const email = "lunox.code@gmail.com";

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
    <div className="relative flex flex-col items-center justify-center mt-5">
      <div
        onClick={handleCopyClick}
        className="flex items-center justify-center gap-2"
      >
        <p>{email}</p>
        <img src={copyicon.src} alt="Copy" width={15} height={15} />
      </div>
      {copied && <p className="absolute mt-14">Copied!</p>}
    </div>
  );
};

export default Email;