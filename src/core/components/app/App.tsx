import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "../header/header";
import { Form1 } from "../form1/form1";
import { Form2 } from "../form2/form2";
import { Menu } from "../menu/menu";
import { menuOptions } from "../../models/menu/menu";
// import { AppRouter } from "../app.router/app.router";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="Form">
        <Form1></Form1>
        <div></div>
        <Form2></Form2>
      </div>
    </div>
  );
}

function App1() {
  return (
    <div className="App">
      <Header></Header>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
export default App;
