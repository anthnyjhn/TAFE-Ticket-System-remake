import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {document.title = count}, []);

  function changed(event) {
    setCount(event.target.value);
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <input type="text" onChange={changed} />
    </>
  );
}

export default App;
