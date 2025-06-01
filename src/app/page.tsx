"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import { DynamicButton } from "@/components/DynamicButton";
import SideNavigation from "@/components/SideNavigation";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import ProjectCard from "@/components/ProjectCards";
import { DirectionAwareHover } from "@/components/ui/DirectionAwareHover";

export default function Home() {
  const { theme, systemTheme } = useTheme();
  const sections = ["hero.", "about.", "projects.", "gallery.", "contact."];
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
          className="relative flex flex-col-reverse items-center justify-center min-h-screen gap-10 px-6 sm:px-10 md:flex-row md:gap-20"
        >
          {/* Text Content */}
          <div className="relative z-10 space-y-4 max-w-xl">
            <h5 className="-my-1 text-sm uppercase tracking-widest text-gray-600 dark:text-gray-400">
              i am
            </h5>
            <h1
              className="text-[4rem] font-black leading-[1.1]
          bg-gradient-to-r from-[#404040] to-[#404040]
          dark:from-[#80CEFF] dark:to-[#F7B2FD]
          bg-clip-text text-transparent
          transition-colors duration-500"
            >
              mark encanto.
            </h1>
            <h3 className="text-lg sm:text-xl font-light text-gray-700 dark:text-gray-300">
              an aspiring Front-end Developer, UI/UX Designer, Graphic Artist,
              and Photographer.
            </h3>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Mark Encanto's Resume"
            >
              <DynamicButton
                text="VIEW RESUME"
                variant={currentTheme === "dark" ? "dark" : "primary"}
              />
            </a>
          </div>

          {/* Hero Image */}
          <div className="relative z-10">
            <Image
              src={currentTheme === "dark" ? "/hero.svg" : "/hero-light.svg"}
              width={450}
              height={450}
              alt="Illustration of developer in dark/light theme"
              priority
            />
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="flex flex-col items-center justify-center min-h-screen md:flex-row md:space-y-0 md:space-x-40"
        >
          <div>
            {currentTheme === "dark" ? (
              <Image
                src="/about-dark.svg"
                width={600}
                height={600}
                alt="About me image"
              />
            ) : (
              <Image
                src="/about-light.svg"
                width={600}
                height={600}
                alt="About me image"
              />
            )}
          </div>
          <div className="max-w-xl text-left tracking-wide">
            {currentTheme === "light" ? (
              <Image
                src="/about-title-light.svg"
                width={300}
                height={100}
                alt="About me image"
              />
            ) : (
              <h2
                className="text-[4.5rem] font-black bg-gradient-to-r from-[#404040] to-[#404040]
                dark:from-[#80CEFF] dark:to-[#F7B2FD]
                bg-clip-text text-transparent
                transition-colors duration-500 my-0 scale-0 dark:scale-100"
              >
                about.
              </h2>
            )}

            <h4 className="text-[1.2rem] font-normal text-gray-600 dark:text-gray-300 opacity-60">
              I am a designer slash developer based in Iloilo, Philippines.
            </h4>
            <p className="text-[1.2rem] text-gray-700 dark:text-gray-300 mt-4 font-normal">
              Fell for intuitive design in 2016. When I&apos;m not tweaking
              REMs, I&apos;m probably chasing wins on League.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen px-10  pt-30">
          <div className="max-w-[50%] text-left">
            <h1
              className="text-[4.5rem] font-black
                bg-gradient-to-r from-[#404040] to-[#404040]
                dark:from-[#80CEFF] dark:to-[#F7B2FD]
                bg-clip-text text-transparent
                transition-colors duration-500 my-0"
            >
              projects.
            </h1>
            <p className="dark:font-light">
              Here are some of the projects I&apos;ve worked on, including
              portfolio websites, mobile UI designs, and interactive front-end
              builds.
            </p>
          </div>
          <div className="mt-10 grid lg:grid-cols-1 md:grid-cols-2 gap-8">
            <ProjectCard
              title={"Kantonize: Pancit Canton Customizer"}
              description={
                "Kantonize is a frontend-only web application that allows users to customize their Pancit Canton (a popular Filipino instant noodle dish) based on their preferences. Users can select ingredients, spice levels, and additional toppings to create their perfect bowl of noodles. The app provides a fun, interactive way to visualize their customized dish before preparation."
              }
              image={"/kantonize.png"}
              link={"https://kantonize.vercel.app"}
              tags={[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Next.js",
                "Tailwind CSS",
                "Frontend",
                "Web Development",
                "UI/UX Design",
                "Frame Motion",
              ]}
            />
            <ProjectCard
              title={"IPSYNC: Internship and Project Collaboration Hub"}
              description={
                "IPsync is a full-stack web platform designed to bridge the gap between academia and industry by connecting students with real-world internships, faculty with research collaborations, and industry partners with emerging talent. The platform fosters skill development, networking, and project-based learning through seamless digital interactions."
              }
              image={"/ipsync.png"}
              link={"https://ipsync.vercel.app"}
              tags={[
                "HTML",
                "CSS",
                "JavaScript",
                "Vue.js",
                "Tailwind CSS",
                "Full-Stack Development",
                "Web Development",
                "UI/UX Design",
                "Responsive Design",
                "API Integration",
                "Database Management",
                "Authentication",
              ]}
            />
            <ProjectCard
              title={"HCI: Jinjaroos Group Website"}
              description={
                "This website was curated to introduce the interdisciplinary HCI team behind IPSYNC, crafting an inclusive platform that redefines how students, faculty, and industry partners collaborate. Our human-centered approach ensures seamless interactions while addressing real-world educational gaps."
              }
              image={"/hci-group.png"}
              link={"https://hci-group-website.vercel.app"}
              tags={[
                "HTML",
                "CSS",
                "JavaScript",
                "React",
                "Next.js",
                "Tailwind CSS",
                "Frontend",
                "Web Development",
                "UI/UX Design",
                "Animation",
                "Particles",
              ]}
            />
            <ProjectCard
              title={"Rekom: Movie Recommendation System"}
              description={
                "Rekom is a hybrid recommendation system that combines collaborative filtering, content-based filtering, and NLP techniques to deliver personalized movie suggestions. By analyzing user preferences and movie attributes, it solves the cold start problem while improving recommendation accuracy."
              }
              image={"/rekom.png"}
              link={"https://github.com/Markndrei/CCS-230-Final-Project"}
              tags={[
                "HTML",
                "CSS",
                "JavaScript",
                "Tailwind CSS",
                "Fullstack Development",
                "Web Development",
                "UI/UX Design",
                "Machine Learning",
                "Recommendation System",
                "Collaborative Filtering",
                "Content-Based Filtering",
                "Data Mining",
              ]}
            />
            <ProjectCard
              title={"Sentisize: Emotion Group Analysis Web App"}
              description={
                "Sentisize is a web application designed to analyze and visualize group emotions through text data. It employs natural language processing (NLP) techniques to extract emotional sentiments from user-generated content, providing insights into collective feelings and trends."
              }
              image={"/sentisize.png"}
              link={"https://github.com/Markndrei/Data-Mining"}
              tags={[
                "HTML",
                "CSS",
                "JavaScript",
                "Tailwind CSS",
                "Frontend",
                "Fullstack Development",
                "Web Development",
                "UI/UX Design",
                "Machine Learning",
                "NLP",
                "Support Vector Machine",
                "Sentiment Analysis",
                "Data Mining",
              ]}
            />
            <ProjectCard
              title={
                "WVSUTRACK: Western Visayas State University Fundays Scoreboard Tracker"
              }
              description={
                "WVSUTRACK is a real-time scoreboard tracker for the Western Visayas State University Fundays, providing live updates on team scores and rankings. The application enhances the event experience by delivering instant information to participants and spectators."
              }
              image={"/wvsu-track.png"}
              link={
                "https://www.figma.com/design/fVxJ9MQYoEsS6uGfAKW5tj/WVSU-FUNDAYS-REAL-TIME-SCOREBOARD?node-id=0-1&t=yju4nXCAeGjRy8SV-1"
              }
              tags={[
                "Figma",
                "UI/UX Design",
                "Prototyping",
                "Web Design",
                "Interaction Design",
                "User Experience",
                "Visual Design",
                "Design System",
                "Responsive Design",
                "Wireframing",
                "User Interface",
                "Design Thinking",
                "Collaboration",
                "Team Project",
              ]}
            />
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
          <DirectionAwareHover imageUrl={"/hero.svg"} children={undefined} />
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
