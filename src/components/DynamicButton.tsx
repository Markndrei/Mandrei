"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { ButtonHTMLAttributes } from "react";

type ButtonVariants = "dark" | "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: ButtonVariants;
}

const BaseStyles = "px-4 py-2 rounded transition-colors duration-300";

const VariantStyles: Record<ButtonVariants, string> = {
  dark: "bg-[#EEB3FD] font-[500] text-black rounded-tl-[0.5rem] rounded-tr-[1.5rem] rounded-bl-[1.5rem] rounded-br-[0.5rem] hover:bg-pink-700 px-10 tracking-widest",
  primary:
    "bg-[#11BA0F] font-[500]  text-white rounded-tl-[0.5rem] rounded-tr-[1.5rem] rounded-bl-[1.5rem] rounded-br-[0.5rem] hover:bg-green-700 px-10 tracking-widest",
  secondary:
    "bg-[#EFE00A] font-[500]  text-white rounded-tl-[0.5rem] rounded-tr-[1.5rem] rounded-bl-[1.5rem] rounded-br-[0.5rem] hover:bg-yellow-700 px-10 tracking-widest",
};

export function DynamicButton({ text, className = "", ...props }: ButtonProps) {
  const { theme, systemTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  const variant: ButtonVariants = currentTheme === "dark" ? "dark" : "primary";
  const variantStyle = VariantStyles[variant];

  if (!isMounted) return null;

  return (
    <button className={`${BaseStyles} ${variantStyle} ${className}`} {...props}>
      {text}
    </button>
  );
}
