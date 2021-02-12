import React, { useEffect, useState } from "react";

/**
 * User Stories:
 * Enter up to 8 binary digits
 * Output in base 10
 *
 * Extra:
 * User can enter any number of digits
 */

function App() {
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState(0);

  useEffect(() => {
    setDecimal(0);
    for (let i = 0; i < binary.length; i++) {
      setDecimal((prev) => {
        return prev + parseInt(binary[i]) * 2 ** (binary.length - i - 1);
      });
    }
  }, [binary]);

  return (
    <>
      <div className="app">
        <div className="container">
          <h1>Binary to Decimal</h1>
          <input
            placeholder="Enter Binary Number"
            type="number"
            value={binary}
            onChange={({ target }) => setBinary(target.value)}
            maxLength="40"
          />
          <p>{binary && decimal}</p>
        </div>
      </div>
    </>
  );
}

export default App;
