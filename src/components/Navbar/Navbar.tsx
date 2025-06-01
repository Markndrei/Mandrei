import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";

export function Navbar() {
  return (
    <nav className="p-4 px-20">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-bold tracking-widest">
          markndrei.
        </Link>

        <div className="flex items-center space-x-20 font-light">
          {[
            { href: "#about", label: "about." },
            { href: "#projects", label: "projects." },
            { href: "#gallery", label: "gallery." },
            { href: "#contact", label: "contact." },
          ].map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative group transition-colors duration-300 hover:text-red-500 dark:hover:text-blue-300"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
