import React from "react";
import "../../Css files/SLForm.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const inputRefs = Array.from({ length: 6 }, () => React.createRef());
let isFirstBackspaceClick = true;

function Otp() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/verify`);
  };

  const [values, setValues] = useState(["", "", "", "", "", ""]);

  const handleInputChange = (index, e) => {
    const numericValue = e.target.value.replace(/[^0-9]/g, "");
    const newValues = [...values];
    newValues[index] = numericValue;
    setValues(newValues);
    if (
      numericValue === "0" ||
      numericValue === "1" ||
      numericValue === "2" ||
      numericValue === "3" ||
      numericValue === "4" ||
      numericValue === "5" ||
      numericValue === "6" ||
      numericValue === "7" ||
      numericValue === "8" ||
      numericValue === "9"
    ) {
      if (e.target.value.length === 0 && index > 0) {
        inputRefs[index - 1].current.focus();
      } else if (e.target.value.length === 1 && index < inputRefs.length - 1) {
        inputRefs[index + 1].current.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (e.target.value.length === 0) {
        if (isFirstBackspaceClick) {
          isFirstBackspaceClick = false;
          e.preventDefault(); // Prevent the default backspace behavior for the first click
        } else {
          if (index > 0) {
            e.preventDefault(); // Prevent the default backspace behavior for subsequent clicks
            if (index === inputRefs.length - 1) {
              inputRefs[index - 1].current.focus();
            } else {
              inputRefs[index].current.blur();
              inputRefs[index - 1].current.focus();
            }
          }
        }
      } else {
        isFirstBackspaceClick = false;
      }
    }
  };

  return (
    <div className="SLPage">
      <div className="SLBox">
        <div className="SLBoxLeft">
          <div className="LeftTop">
            <img
              src="../Images/cloud-image.png"
              height="100%"
              width="50%"
              alt="logo"
            />
          </div>

          <div className="OForm">
            <div className="One">
              <img
                src="../Images/coral.png"
                height="80%"
                width="90%"
                alt="Logo"
              />
            </div>

            <div className="Two">
              <label className="Heading">Recieve a Verification Code?</label>
              <label className="Subheading">
                We've sent an OTP on your registered Mobile No. 8010xxxxxx.
                Enter the 6 digit code
              </label>
              <div className="Text">
                {inputRefs.map((ref, index) => (
                  <input
                    className="Code"
                    key={index}
                    ref={ref}
                    type="text"
                    maxLength="1"
                    placeholder="_"
                    onChange={(e) => handleInputChange(index, e)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                  />
                ))}
              </div>
            </div>

            <div className="Three">
              <label className="TC">
                By continuing, you agree to our{" "}
                <Link className="New2">Terms of use</Link> and{" "}
                <Link className="New2">Privacy Policy</Link>
              </label>
              <input
                type="submit"
                className="Btn"
                value="Request OTP"
                onClick={() => handleClick()}
              />
            </div>
          </div>
        </div>

        <div className="SLBoxRight">
          <div className="RightTop">
            <img
              src="../Images/24493638_6941053.svg"
              height="100%"
              width="80%"
              alt="logo"
            />
          </div>

          <div className="RightDown">
            <img
              src="../Images/cloud-image.png"
              height="100%"
              width="100%"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Otp;
