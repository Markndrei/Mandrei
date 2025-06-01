"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { DynamicButton } from "@/components/DynamicButton";
import SideNavigation from "@/components/SideNavigation";
import { useScrollSpy } from "@/hooks/useScrollSpy";

export default function Home() {
  const { theme, systemTheme } = useTheme();
  const sections = ["hero", "about", "projects", "gallery", "contact"];
  const sectionIds = ["hero", "about", "projects", "gallery", "contact"];
  const { currentSection, scrollToSection } = useScrollSpy(sectionIds);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="relative min-h-screen transition-all duration-300">
      <div className="fixed top-3/4 right-6 transform -translate-y-1/2 z-50">
        <SideNavigation
          sections={sections}
          currentSection={currentSection}
          onSectionClick={scrollToSection}
        />
      </div>

      {/* Hero Content */}
      <main className="px-[10%]">
        <section
          id="hero"
          className="flex flex-col items-center justify-center min-h-screen space-y-10 md:flex-row md:space-y-0 md:space-x-40"
        >
          <div className="space-y-4">
            <div
              className={`
          absolute inset-0 pointer-events-none transition-opacity duration-500
          ${currentTheme === "light" ? "opacity-100" : "opacity-0"}
        `}
            >
              {/* Top border */}
              <div className="absolute top-[7.5%] left-[5%] right-[47%] h-[0.07rem] bg-gray-500"></div>
              {/* Bottom border */}
              <div className="absolute bottom-[86%] left-[5%] right-[47%] h-[0.07rem] bg-gray-500"></div>
              {/* Left border */}
              <div className="absolute top-[6%] bottom-[85%] left-[8%] w-[0.07rem] bg-gray-500"></div>
              {/* Right border */}
              <div className="absolute top-[6%] bottom-[85%] right-[50%] w-[0.07rem] bg-gray-500"></div>
            </div>
            <h5 className="-my-1">i am</h5>
            <h1
              className="text-[4.5rem] font-black
                bg-gradient-to-r from-[#404040] to-[#404040]
                dark:from-[#80CEFF] dark:to-[#F7B2FD]
                bg-clip-text text-transparent
                transition-colors duration-500 my-0"
            >
              mark encanto.
            </h1>
            <h3 className="text-[1.2rem] font-light text-gray-700 dark:text-gray-300">
              an aspiring Front-end Developer, UI/UX Designer, Graphic Artist,
              and Photographer.
            </h3>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <DynamicButton
                text="VIEW RESUME"
                variant={currentTheme === "dark" ? "dark" : "primary"}
              />
            </a>
          </div>
          {currentTheme === "dark" ? (
            <Image
              src="/hero.svg"
              width={450}
              height={450}
              alt="Dark mode image"
            />
          ) : (
            <Image
              src="/hero-light.svg"
              width={450}
              height={450}
              alt="Light mode image"
            />
          )}
        </section>

        {/* About Section */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center px-10"
        >
          <div className="max-w-2xl text-center">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Hello! I'm Mark, a passionate front-end developer who loves
              designing engaging user experiences. I enjoy crafting clean,
              accessible, and responsive web applications using modern
              technologies.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="min-h-screen flex items-center justify-center px-10 bg-gray-100 dark:bg-gray-800"
        >
          <div className="max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Here are some of the projects I’ve worked on, including portfolio
              websites, mobile UI designs, and interactive front-end builds.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section
          id="gallery"
          className="min-h-screen flex items-center justify-center px-10"
        >
          <div className="max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Gallery</h2>
            <p className="text-gray-700 dark:text-gray-300">
              A curated selection of photography and design works that reflect
              my creative journey and aesthetics.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center px-10 bg-gray-100 dark:bg-gray-800"
        >
          <div className="max-w-xl text-center">
            <h2 className="text-3xl font-bold mb-4">Contact</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Feel free to reach out for collaborations or just to say hi!
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Email: marksamplelamang@this.is.it
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full text-center py-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Mark Encanto. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
