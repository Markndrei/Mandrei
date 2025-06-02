"use client";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      alert("Form reference is not available.");
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Your message has been sent!");
          (e.target as HTMLFormElement).reset();
        },
        (error) => {
          console.error("Email failed:", error.text);
          alert("Failed to send. Try again.");
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      <div>
        <label className="block text-xs font-semibold">name.</label>
        <input
          type="text"
          name="user_name"
          placeholder="Your name"
          className="w-full mt-1 p-2 rounded bg-gray-100 dark:bg-neutral-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-pink-500"
          required
        />
        <label className="block text-xs font-semibold mt-4">email.</label>
        <input
          type="email"
          name="user_email"
          placeholder="you@example.com"
          className="w-full mt-1 p-2 rounded bg-gray-100 dark:bg-neutral-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-pink-500"
          required
        />
      </div>

      <div>
        <label className="block text-xs font-semibold">message.</label>
        <textarea
          name="message"
          rows={6}
          placeholder="Your message..."
          className="w-full mt-1 p-2 rounded bg-gray-100 dark:bg-neutral-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 dark:focus:ring-pink-500"
          required
        />
      </div>

      <div className="md:col-span-2 flex justify-end">
        <button
          type="submit"
          className="bg-green-600 dark:bg-[#EEB3FD] dark:text-gray-800 text-white px-6 py-2 rounded-tl-[0.5rem] rounded-tr-[1.5rem] rounded-bl-[1.5rem] rounded-br-[0.5rem] hover:bg-green-700 dark:hover:bg-pink-700 transition-all pointer"
        >
          SEND EMAIL
        </button>
      </div>
    </form>
  );
}
