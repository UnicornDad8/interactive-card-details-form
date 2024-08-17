import React from "react";
import { Space_Grotesk } from "next/font/google";
const grotesk = Space_Grotesk({ subsets: ["latin"] });

function Form() {
  return (
    <main
      className={`flex flex-col h-screen w-screen ${grotesk.className} overflow-hidden lg:flex-row`}
    >
      <div
        className={
          "flex flex-col h-[40%] bg-cover bg-main-desktop bg-no-repeat lg:w-1/3 lg:h-full"
        }
      >
        <footer className="relative bottom-0 flex justify-center mt-48 mb-4 text-xs lg:absolute lg:mt-0">
          <div>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="#">Ceci Benitez</a>.
          </div>
        </footer>
      </div>
    </main>
  );
}

export default Form;
