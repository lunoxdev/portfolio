import { useRef, useState } from "react";
import clsx from "clsx";

export const InputLightEffect = ({ value, onChange, onEnter }) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

  const handleMouseMove = (e) => {
    if (!inputRef.current || isFocused) return;
    const rect = inputRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setShow(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setShow(false);
  };

  const handleMouseEnter = () => setShow(true);
  const handleMouseLeave = () => !isFocused && setShow(false);
  const handleKeyDown = (e) => e.key === "Enter" && onEnter?.();

  return (
    <div className="relative w-full sm:w-1/2 mb-2">
      <input
        ref={inputRef}
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        onMouseMove={handleMouseMove}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        autoComplete="off"
        placeholder="🔎 Search project by stack"
        className="h-10 w-full border border-cyan-950 rounded-sm bg-black/30 px-2 text-sm text-cyan-100 placeholder:text-cyan-100/70 transition-colors duration-300 focus:border-cyan-900 focus:outline-lime-900 outline-none"
      />
      <div
        className={clsx(
          "pointer-events-none absolute left-0 top-0 z-10 h-10 w-full rounded-md border border-cyan-400 bg-transparent transition-opacity duration-500",
          show ? "opacity-100" : "opacity-0"
        )}
        style={{
          WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`,
          maskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`,
        }}
      />
    </div>
  );
};
