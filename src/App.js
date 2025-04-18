import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Welcome name="Francis Kalunga" />
    </div>
  );
}

function Welcome({ name }) {
  const [show, setShow] = useState(true);

  return (
    <>
      <p>{show ? `Welcome ${name}` : ""}</p>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        toggle
      </button>
    </>
  );
}
