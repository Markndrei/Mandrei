"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { DynamicButton } from "@/components/DynamicButton";

export default function Home() {
  const { theme, systemTheme } = useTheme();

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="min-h-screen flex items-center justify-center transition-all duration-300 space-x-40 mx-[10%]">
      <div>
        <h5 className="font-[">i am</h5>
        <h1
          className="text-[4.5rem] font-black
        bg-gradient-to-r from-[#404040] to-[#404040]
        dark:from-[#80CEFF] dark:to-[#F7B2FD]
        bg-clip-text text-transparent
        transition-colors duration-500"
        >
          mark encanto.
        </h1>
        <h3 className="text-[1.2rem] font-light text-gray-700 dark:text-gray-300">
          an aspiring Front-end Developer, UI/UX Designer, Graphic Artist, and
          Photographer.
        </h3>
        <DynamicButton
          text="View Resume"
          className="mt-4 px-6 py-2 text-white"
        />
      </div>
      {currentTheme === "dark" ? (
        <Image src="/hero.svg" width={450} height={450} alt="Dark mode image" />
      ) : (
        <Image
          src="/hero-light.svg"
          width={450}
          height={450}
          alt="Light mode image"
        />
      )}
    </div>
  );
}
