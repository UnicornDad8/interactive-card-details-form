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
      inputName.classList.add("");
      checkField = true;
    } else {
      setNameError("");
      inputName.classList.remove("");
      checkField = false;
    }

    if (creditNumber.length <= 0) {
      setCardError("Can't be blank");
      inputCard.classList.add("");
      return (checkField = true);
    } else if (creditNumber.length !== 19) {
      setCardError("Card number must be a 16 digit number.");
      inputCard.classList.add("");
      return (checkField = true);
    } else {
      setCardError("");
      inputCard.classList.remove("");
      checkField = false;
    }

    if (month.length <= 0) {
      setDateError("Can't be blank");
      inputMonth.classList.add("");
      checkField = true;
    } else if (month.valueOf == "0") {
      setDateError("Month cannot be 0");
      checkField = true;
    } else {
      setDateError("");
      inputYear.classList.remove("");
      inputMonth.classList.remove("");
      checkField = false;
    }
    if (year.length <= 0) {
      setDateError("Can't be blank");
      inputYear.classList.add("");
      checkField = true;
    } else {
      setDateError("");
      inputYear.classList.remove("");
      checkField = false;
    }
    if (cvc.length <= 0) {
      setCvcError("Can't be blank");
      inputCvc.classList.add("");
      checkField = true;
    } else {
      inputCvc.classList.remove("");
      setCvcError("");
      checkField = false;
    }
    if (!checkField) {
      formEl.classList.add("");
      completeEl.classList.remove("");
      completeEl.classList.add("");
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
    formEl.classList.remove("");
    completeEl.classList.add("");
    completeEl.classList.remove("");
  };
  return (
    <main>
      <div>
        <div>
          <div>
            <img src="/card-logo.svg" alt="logo" />
            <p>
              {creditNumber.length > 0 ? creditNumber : "0000 0000 0000 0000"}
            </p>
            <section>
              <p>{name ? name : "Jane Appleseed"}</p>
              <p>
                {month.length > 0 ? month : "MM"}/
                {year.length > 0 ? year : "YY"}
              </p>
            </section>
          </div>
          <div>
            <p>{cvc.length > 0 ? cvc : "000"}</p>
          </div>
        </div>
      </div>
      <div>
        <div id="complete">
          <img src="/icon-complete.svg" alt="complete" />
          <h1>Thank you!</h1>
          <p>We've added your card details</p>
          <button type="submit" onClick={() => onContinue()}>
            Continue
          </button>
        </div>
        <div id="form">
          <div>
            <span>CARDHOLDER NAME</span>
            <input
              value={name}
              id="nameInput"
              placeholder="e.g. Jane Appleseed"
              onChange={(e) => setName(e.target.value)}
            />
            <span id="error" aria-live="polite">
              {nameError ?? nameError}
            </span>
          </div>
          <div>
            <span>CARD NUMBER</span>
            <input
              id="cardInput"
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
            <span id="error" aria-live="polite">
              {cardError ?? cardError}
            </span>
          </div>
          <div>
            <span>EXP. DATE (MM/YY)</span>
            <span>CVC</span>
            <div>
              <div>
                <div>
                  <input
                    id="monthInput"
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
                <span id="error" aria-live="polite">
                  {dateError ?? dateError}
                </span>
              </div>

              <div>
                <input
                  id="cvcInput"
                  placeholder="e.g. 123"
                  maxLength={3}
                  inputMode="numeric"
                  onChange={(e) => setCvc(e.target.value)}
                  value={cvc}
                />
                <span id="error" aria-live="polite">
                  {cvcError ?? cvcError}
                </span>
              </div>
            </div>
          </div>
          <button type="submit" onClick={(e) => onFormSubmit(e)}>
            Confirm
          </button>
        </div>

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
