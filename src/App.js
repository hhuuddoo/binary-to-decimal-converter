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
  const [error, setError] = useState(false);

  useEffect(() => {
    setDecimal(0);
    setError(false);
    for (let i = 0; i < binary.length; i++) {
      setDecimal((prev) => {
        if (binary[i] === "0" || binary[i] === "1") {
          return prev + parseInt(binary[i]) * 2 ** (binary.length - i - 1);
        }
        setError(true);
        return;
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
            autoFocus={true}
            onChange={({ target }) => setBinary(target.value)}
            maxLength="16"
          />
          {binary ? (
            error ? (
              <p style={{ color: "red" }}>Invalid Input</p>
            ) : (
              <p>{decimal}</p>
            )
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
