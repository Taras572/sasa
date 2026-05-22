import React from "react";

type Variant = "default" | "dark" | "warning";

type BtnProps = {
  text: string;
  variant?: Variant;
  onClick?: () => void;
  href?: string;
};

const variants: Record<Variant, { bg: string; text: string }> = {
  default: {
    bg: "#fffdeb",
    text: "#313133",
  },
  dark: {
    bg: "#111827",
    text: "#ffffff",
  },
  warning: {
    bg: "#f59e0b",
    text: "#000000",
  },
};

export default function Btn({
  text,
  variant = "default",
  onClick,
  href,
}: BtnProps) {
  const v = variants[variant];

  const button = (
    <button
      onClick={onClick}
      style={{
        backgroundColor: v.bg,
        color: v.text,
      }}
      className="group relative min-w-[100px] min-h-[30px] px-4 py-2 inline-flex items-center justify-center rounded-full font-bold text-[12px] uppercase tracking-[1.3px] shadow-[12px_12px_24px_rgba(79,209,197,0.64)] transition-all duration-300 hover:-translate-y-1.5 focus:-translate-y-1.5"
    >
      {text}

      {/* Glow */}
      <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus:opacity-100">
        <span className="absolute min-w-[106px] min-h-[36px] rounded-full border-[3px] border-[#233c1a] shadow-[0_0_60px_rgba(0,255,203,0.64)]" />
      </span>

      {/* Ring */}
      <span className="absolute z-10 w-[30px] h-[30px] rounded-full border-[3px] border-[#fffdeb] animate-ring group-hover:hidden group-focus:hidden" />
    </button>
  );

  if (href) {
    return (
      <a href={href} className="flex justify-center">
        {button}
      </a>
    );
  }

  return button;
}