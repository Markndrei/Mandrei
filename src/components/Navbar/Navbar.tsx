import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";

export function Navbar() {
  return (
    <nav className=" p-4 px-20">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-lg font-bold tracking-widest">
          markndrei.
        </Link>

        <div className="flex items-center space-x-20 font-light">
          <Link
            href="/"
            className=" dark:hover:text-blue-300 hover:text-red-500"
          >
            about.
          </Link>
          <Link href="/about" className=" hover:text-white">
            projects.
          </Link>
          <Link href="/contact" className=" hover:text-white">
            gallery.
          </Link>
          <Link href="/contact" className=" hover:text-white">
            contact.
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
