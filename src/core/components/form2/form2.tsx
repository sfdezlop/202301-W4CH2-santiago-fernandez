import { SyntheticEvent } from "react";
import { useState } from "react";
import { UserdataStructure } from "../../models/userdata/userdata";
import "./form2.css";

export function Form2() {
  return (
    <div className="container">
      <form className="form">
        <label>
          Username
          <input type="text" id="username" required />
        </label>
        <label>
          Password
          <input type="password" id="password" required />
        </label>
        <label>
          Repeat password
          <input type="password" id="repeatpassword" required />
        </label>
        <label>
          Account type
          <select id="accounttype" required>
            <option value="Personal">Personal</option>
            <option value="Pro">Pro</option>
            <option value="Business">Business</option>
          </select>
        </label>
        <button type="submit" disabled>
          Access
        </button>
      </form>
    </div>
  );
}
