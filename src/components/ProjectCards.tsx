"use client";

import Link from "next/link";
import Image from "next/image";
import { DynamicButton } from "@/components/DynamicButton";
import { useTheme } from "next-themes";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags?: string[];
}

export default function ProjectCard({
  title,
  description,
  link,
  image,
  tags = [],
}: ProjectCardProps) {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const imageSrc = image || "/default-project-image.png";

  return (
    <div className="flex flex-col md:flex-row items-stretch bg-white dark:bg-neutral-900 rounded-2xl shadow-lg overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl duration-300 max-w-4xl mx-auto border border-gray-200 dark:border-neutral-700">
      {/* Image Section without object-cover */}
      <div className="md:w-2/5 flex items-center justify-center p-4">
        <Image
          src={imageSrc}
          alt={`Screenshot of ${title} project`}
          width={400}
          height={300}
          className="w-full h-auto"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="md:w-3/5 p-6 md:p-8 flex flex-col justify-between">
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 leading-tight">
            {title}
          </h3>
          <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            {description}
          </p>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-colors
                    ${
                      currentTheme === "dark"
                        ? "bg-neutral-800 text-blue-200 hover:bg-neutral-700"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="mt-6 lg:mt-4 md:mt-auto w-full">
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full" // always full width
          >
            <DynamicButton
              text="View Project"
              variant={currentTheme === "dark" ? "dark" : "primary"}
              className="w-full py-3 flex justify-center items-center gap-2"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
