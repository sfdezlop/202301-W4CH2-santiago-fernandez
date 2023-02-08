import { SyntheticEvent } from "react";
import { useState } from "react";
import { UserdataStructure } from "../../models/userdata/userdata";
import "./form1.css";

export function Form1() {
  return (
    <div className="container">
      <form className="form">
        <label>
          Firstname
          <input type="text" id="firstname" required />
        </label>
        <label>
          Lastname
          <input type="text" id="lastname" required />
        </label>
        <label>
          Birthdate
          <input type="text" className="birthdate" id="birthdate" required />
        </label>
        <fieldset>
          <legend>
            Gender
            <label>
              Male
              <input type="radio" id="male" name="gender" />
            </label>
            <label>
              Female
              <input type="radio" id="female" name="gender" />
            </label>
            <label>
              Other
              <input type="radio" id="other" name="gender" />
            </label>
            <label>
              Prefer not to mention
              <input type="radio" id="prefernottomention" name="gender" />
            </label>
          </legend>
        </fieldset>
        <label>
          Email
          <input type="text" id="email" required />
        </label>
        <label>
          Do you want to receive our Newsletter?
          <input type="checkbox" id="optin" required />
        </label>
        <button>Next</button>
      </form>
    </div>
  );
}
