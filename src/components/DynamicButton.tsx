"use client";
import { ButtonHTMLAttributes } from "react";

type ButtonVariants = "dark" | "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: ButtonVariants;
}

const BaseStyles = "px-4 py-2 rounded transition-colors duration-300";

const VariantStyles: Record<ButtonVariants, string> = {
  dark: "bg-[#EEB3FD] font-[500] text-black rounded-tl-[0.5rem] rounded-tr-[1.5rem] rounded-bl-[1.5rem] rounded-br-[0.5rem] hover:bg-blue-600 px-10 tracking-widest",
  primary:
    "bg-[#11BA0F] font-[500]  text-white rounded-tl-[0.5rem] rounded-tr-[1.5rem] rounded-bl-[1.5rem] rounded-br-[0.5rem] hover:bg-blue-600 px-10 tracking-widest",
  secondary:
    "bg-[#EFE00A] font-[500]  text-white rounded-tl-[0.5rem] rounded-tr-[1.5rem] rounded-bl-[1.5rem] rounded-br-[0.5rem] hover:bg-blue-600 px-10 tracking-widest",
};

export function DynamicButton({
  text,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const variantStyle = VariantStyles[variant];
  return (
    <button className={`${BaseStyles} ${variantStyle} ${className}`} {...props}>
      {text}
    </button>
  );
}
