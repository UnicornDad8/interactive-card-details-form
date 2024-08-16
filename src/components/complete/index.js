import React from "react";
import { Space_Grotesk } from "next/font/google";
const grotesk = Space_Grotesk({ subsets: ["latin"] });

function Form() {
  return (
    <main>
      <div>
        <footer>
          <div>
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by <a href="#">Emre Kalfa</a>.
          </div>
        </footer>
      </div>
    </main>
  );
}

export default Form;
