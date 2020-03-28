import React, { useState } from "react";
import SimpleStorage from "../external/SimpleStorage";

export default function() {
  const [count, setCount] = useState(0);
  const [exclamation, setExclamation] = useState(false);
  const reset = () => {
    setCount(0);
    setExclamation(false);
  };

  return (
    <div>
      <h2>Functional</h2>
      <p>
        You clicked {count} times{exclamation && "!!!"}
      </p>
      <button onClick={() => setCount(count + 1)}>Add to Count</button>
      <button onClick={() => setExclamation(!exclamation)}>
        Toggle Exclamation {exclamation ? "Off" : "On"}
      </button>
      <br />
      <button onClick={reset}>Reset</button>
      <SimpleStorage
        prefix="ExampleHook"
        parent={{
          count: [count, setCount],
          exclamation: [exclamation, setExclamation]
        }}
      />
    </div>
  );
}
