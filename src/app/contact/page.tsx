"use client";

import React, { FormEvent, useState } from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { div } from "framer-motion/client";

function MusicSchoolContactUs() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Submitted:", { email, message });
    alert("Your message has been sent!");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <BackgroundBeamsWithCollision className="absolute top-0 left-0 w-full h-full z-0">
        <div className="min-h-screen mt-20 py-12 pt-24 relative">
          <div className="max-w-2xl mx-auto p-4 sm:p-6 md:p-8 lg:p-10 relative">
            <h1 className="text-lg md:text-3xl lg:text-5xl text-center font-sans font-bold mb-8 text-white ">
              Contact Us
            </h1>
            <p className="text-neutral-400 max-w-lg mx-auto my-2 text-sm sm:text-base text-center">
              We&apos;re here to help with any questions about our courses,
              programs, or events. Reach out and let us know how we can assist
              you in your musical journey.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4 mt-8">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                required
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
                className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                rows={5}
                required
              ></textarea>
              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 w-full sm:w-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}

export default MusicSchoolContactUs;
