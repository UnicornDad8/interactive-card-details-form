import React from "react";
import { Space_Grotesk } from "next/font/google";
import { useState } from "react";

const grotesk = Space_Grotesk({ subsets: ["latin"] });

function Form() {
  const [creditNumber, setCreditNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [name, setName] = useState("");
  const [cvc, setCvc] = useState("");
  const [nameError, setNameError] = useState("");
  const [cardError, setCardError] = useState("");
  const [cvcError, setCvcError] = useState("");
  const [dateError, setDateError] = useState("");
  const date = new Date();
  const currentYear = date.getFullYear();

  const onChangeNumber = (e) => {
    setCreditNumber(
      e.target.value
        .replace(/\W/gi, "")
        .replace(/(.{4})/g, "$1 ")
        .trim()
    );
  };

  const onYearChange = (e) => {
    if (e.target.value < date.getFullYear().toString().substring(2)) {
      setDateError(`Year cannot be before ${currentYear}`);
    } else {
      setDateError("");
    }
    setYear(e.target.value);
  };

  const onFormSubmit = (e) => {
    let checkField = false;
    const inputCard = document.getElementById("cardInput");
    const inputName = document.getElementById("nameInput");
    const inputMonth = document.getElementById("monthInput");
    const inputYear = document.getElementById("yearInput");
    const inputCvc = document.getElementById("cvcInput");
    const formEl = document.getElementById("form");
    const completeEl = document.getElementById("complete");

    if (name.length <= 0) {
      setNameError("Can't be blank");
      inputName.classList.add("border-error-red");
      checkField = true;
    } else {
      setNameError("");
      inputName.classList.remove("border-error-red");
      checkField = false;
    }

    if (creditNumber.length <= 0) {
      setCardError("Can't be blank");
      inputCard.classList.add("border-error-red");
      return (checkField = true);
    } else if (creditNumber.length !== 19) {
      setCardError("Card number must be a 16 digit number.");
      inputCard.classList.add("border-error-red");
      return (checkField = true);
    } else {
      setCardError("");
      inputCard.classList.remove("border-error-red");
      checkField = false;
    }

    if (month.length <= 0) {
      setDateError("Can't be blank");
      inputMonth.classList.add("border-error-red");
      checkField = true;
    } else if (month.valueOf == "0") {
      setDateError("Month cannot be 0");
      checkField = true;
    } else {
      setDateError("");
      inputYear.classList.remove("border-error-red");
      inputMonth.classList.remove("border-error-red");
      checkField = false;
    }

    if (year.length <= 0) {
      setDateError("Can't be blank");
      inputYear.classList.add("border-error-red");
      checkField = true;
    } else {
      setDateError("");
      inputYear.classList.remove("border-error-red");
      checkField = false;
    }

    if (cvc.length <= 0) {
      setCvcError("Can't be blank");
      inputCvc.classList.add("border-error-red");
      checkField = true;
    } else {
      inputCvc.classList.remove("border-error-red");
      setCvcError("");
      checkField = false;
    }

    if (!checkField) {
      formEl.classList.add("hidden");
      completeEl.classList.remove("hidden");
      completeEl.classList.add("flex");
    }
  };

  const onContinue = () => {
    setCardError("");
    setCreditNumber("");
    setDateError("");
    setCvcError("");
    setCvc("");
    setMonth("");
    setYear("");
    setName("");
    setNameError("");
    const formEl = document.getElementById("form");
    const completeEl = document.getElementById("complete");
    formEl.classList.remove("hidden");
    completeEl.classList.add("hidden");
    completeEl.classList.remove("flex");
  };

  return (
    <main
      className={`w-screen flex flex-col h-auto lg:h-screen ${grotesk.className} overflow-hidden lg:flex-row`}
    >
      <div className="flex flex-col h-[220px] bg-cover bg-main-desktop bg-no-repeat lg:w-1/3 lg:h-full">
        <div className="flex flex-col items-center justify-start h-full p-4 space-y-4 lg:justify-center lg:items-start">
          <div className="absolute rounded-lg bg-contain bg-no-repeat bg-card-front w-[300px] h-44 z-10 mt-[25%] lg:mt-[13%] lg:h-64 lg:relative lg:w-[450px] lg:ml-12">
            <img
              src="/card-logo.svg"
              alt="logo"
              className="w-24 p-6 h-22 lg:w-36 lg:h-26 lg:p-8 opacity-90"
            />
            <p className="pb-6 pl-6 text-lg font-medium tracking-widest text-white opacity-90 lg:text-2xl lg:pt-8 lg:pl-8">
              {creditNumber.length > 0 ? creditNumber : "0000 0000 0000 0000"}
            </p>
            <section className="flex justify-between px-6 lg:px-8">
              <p className="text-sm font-thin text-white uppercase lg:text-md opacity-90">
                {name ? name : "Jane Appleseed"}
              </p>
              <p className="text-sm font-thin text-white lg:text-md opacity-90">
                {month.length > 0 ? month : "MM"}/
                {year.length > 0 ? year : "YY"}
              </p>
            </section>
          </div>
          <div className="absolute top-[2%] rounded-lg bg-contain bg-no-repeat bg-card-back w-[300px] h-44 ml-14 lg:h-64 lg:relative lg:w-[450px] lg:ml-32">
            <p className="absolute text-sm right-10 top-[4.5rem] text-white lg:right-14 lg:top-[6.8rem] lg:text-md opacity-90">
              {cvc.length > 0 ? cvc : "000"}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center w-full h-full mt-16 lg:mt-0 lg:items-center">
        <div
          id="complete"
          className="flex-col items-center self-center justify-center hidden p-4 mt-16 space-y-6 md:p-0 lg:mt-0 w-96 h-96"
        >
          <img src="/icon-complete.svg" alt="complete" className="w-28 h-28" />
          <h1 className="text-2xl font-bold tracking-widest text-center uppercase text-very-dark-violet">
            Thank you!
          </h1>
          <p className="text-center text-dark-grayish-violet">
            We've added your card details
          </p>
          <button
            type="submit"
            className="w-[80%] mx-auto text-lg text-white opacity-90 rounded-lg h-14 bg-very-dark-violet lg:w-96"
            onClick={() => onContinue()}
          >
            Continue
          </button>
        </div>
        <div
          id="form"
          className="p-4 md:p-0 flex flex-col gap-4 self-center w-[80%] lg:items-center"
        >
          <div className="flex flex-col">
            <span className="tracking-wide text-very-dark-violet">
              CARDHOLDER NAME
            </span>
            <input
              value={name}
              id="nameInput"
              className="w-auto h-12 p-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-linear-purple focus:border-transparent text-very-dark-violet lg:w-96"
              placeholder="e.g. Jane Appleseed"
              onChange={(e) => setName(e.target.value)}
            />
            <span
              id="error"
              aria-live="polite"
              className="mt-2 text-xs font-bold text-error-red"
            >
              {nameError ?? nameError}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="tracking-wide text-very-dark-violet">
              CARD NUMBER
            </span>
            <input
              id="cardInput"
              className="w-auto h-12 p-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-linear-purple focus:border-transparent text-very-dark-violet lg:w-96"
              placeholder="e.g. 1234 5678 9123 0000"
              type="text"
              maxLength="19"
              required
              value={creditNumber}
              onChange={(e) => onChangeNumber(e)}
              onKeyDown={(e) => {
                if (!/[0-9]/.test(e.key) && e.key !== "Backspace") {
                  e.preventDefault();
                }
              }}
            />
            <span
              id="error"
              aria-live="polite"
              className="mt-2 text-xs font-bold text-error-red"
            >
              {cardError ?? cardError}
            </span>
          </div>
          <div className="space-y-2">
            <span className="tracking-widest text-very-dark-violet">
              EXP. DATE (MM/YY)
            </span>
            <span className="ml-4 tracking-wide text-very-dark-violet lg:ml-6">
              CVC
            </span>
            <div className="flex flex-row gap-2 w-96">
              <div>
                <div className="flex flex-row space-x-3">
                  <input
                    id="monthInput"
                    className="w-20 h-12 p-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-linear-purple focus:border-transparent text-very-dark-violet"
                    placeholder="MM"
                    inputMode="numeric"
                    required
                    maxLength={2}
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    onKeyDown={(e) => {
                      if (!/[0-9]/.test(e.key) && e.key !== "Backspace") {
                        e.preventDefault();
                      }
                    }}
                  />
                  <input
                    id="yearInput"
                    className="w-20 h-12 p-4 mr-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-linear-purple focus:border-transparent text-very-dark-violet lg:mr-4"
                    placeholder="YY"
                    maxLength={2}
                    inputMode="numeric"
                    value={year}
                    onChange={(e) => onYearChange(e)}
                    onKeyDown={(e) => {
                      if (!/[0-9]/.test(e.key) && e.key !== "Backspace") {
                        e.preventDefault();
                      }
                    }}
                  />
                </div>
                <span
                  id="error"
                  aria-live="polite"
                  className="relative mt-2 text-xs font-bold text-error-red"
                >
                  {dateError ?? dateError}
                </span>
              </div>

              <div>
                <input
                  id="cvcInput"
                  className="w-48 h-12 p-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-linear-purple focus:border-transparent text-very-dark-violet"
                  placeholder="e.g. 123"
                  maxLength={3}
                  inputMode="numeric"
                  onChange={(e) => setCvc(e.target.value)}
                  value={cvc}
                />
                <span
                  id="error"
                  aria-live="polite"
                  className="mt-2 text-xs font-bold text-error-red"
                >
                  {cvcError ?? cvcError}
                </span>
              </div>
            </div>
          </div>
          <button
            type="submit"
            onClick={(e) => onFormSubmit(e)}
            className="w-auto text-lg text-white rounded-lg opacity-90 h-14 bg-very-dark-violet lg:w-96"
          >
            Confirm
          </button>
        </div>

        <footer className="mt-6 text-center">
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
