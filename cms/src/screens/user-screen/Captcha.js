import React, { useState, useEffect } from "react";

function Captcha (props)

 {
 const [user, setUser] = useState({
    captchaname: "",
  });

  const characters = "abc123";

  function generateString(length)
   {
    let result = "";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
  const captcha = generateString(6); // Function called here and save in captcha variable
  let handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    user[name] = value;
    setUser(user);
  };
  const onSubmit = (e) => {
    var element = document.getElementById("succesBTN");
    var inputData = document.getElementById("inputType");
    element.style.cursor = "wait";
    element.innerHTML = "Checking...";
    inputData.disabled = true;
    element.disabled = true;
    var myFunctions = function () {
      if (captcha == user.captchaname) {
        element.style.backgroundColor = "green";
        element.innerHTML = "Captcha Verified";
        element.disabled = true;
        element.style.cursor = "not-allowed";
        inputData.style.display = "none";
      } else {
        element.style.backgroundColor = "red";
        element.style.cursor = "not-allowed";
        element.innerHTML = "Not Matched";
        element.disabled = true;
        //  element.disabled = true;
        var myFunction = function () {
          element.style.backgroundColor = "#007bff";
          element.style.cursor = "pointer";
          element.innerHTML = "Verify Captcha";
          element.disabled = false;
          inputData.disabled = false;
          inputData.value = "sssss";
        };
        setTimeout(myFunction, 1000);
      }
    };
    setTimeout(myFunctions, 1000);
  };

  return (
    <React.Fragment>
      <span>
        <h4 id="captcha" className="col-6">
          <input type="hidden" name="captchavalue" value={captcha} />
          {captcha}
        </h4>
      </span>

      <div className="form-group row mt-3">
        <div className="col-8">
          <input
            type="text"
            id="inputType"
            className="form-control"
            placeholder="Enter Captcha"
            name="captchaname"
            onChange={handleChange}
            autoComplete="off"
          />
        </div>
        {/* <div className="col-2">
          <button
            type="button"
            id="succesBTN"
            onClick={onSubmit}
            className="btn btn-primary"
          >
            Verify Captcha
          </button>
        </div> */}
      </div>
    </React.Fragment>
  );
};
export default Captcha;
