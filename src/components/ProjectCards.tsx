import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  link,
  image,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-stretch bg-white dark:bg-neutral-900 rounded-2xl shadow-lg overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-xl duration-300 max-w-4xl mx-auto">
      {/* Left Side: Text Content */}
      <div className="flex-1 p-6 space-y-4 text-left">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-base text-gray-600 dark:text-gray-400">
          {description}
        </p>
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-medium text-red-500 dark:text-blue-300 hover:underline"
        >
          View Project →
        </Link>
      </div>

      {/* Right Side: Image */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority
        />
      </div>
    </div>
  );
}
