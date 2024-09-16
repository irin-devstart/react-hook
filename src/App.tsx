import React, { useCallback, useEffect, useMemo, useState } from "react";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";

const App = () => {
  const [count, setCount] = useState(0);
  const [page2, setpage2] = useState(0);

  const [todos, setTodos] = useState<string[]>([]);

  const valuePage2 = (num: number) => {
    console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
      num += 1;
    }
    console.log("ini hasil calculass", num);

    return num;
  };
  const getValue = useMemo(() => valuePage2(12), []);

  const handleCounter = () => {
    setCount(count + 1);
  };

  const loadDataOnlyOnce = () => {
    console.log("loadDataOnlyOnce");
  };
  const handlePage2 = () => setpage2(page2 + 1);
  useEffect(() => {
    loadDataOnlyOnce();
    // return () => {
    //   console.log("collection");
    // };
  }, []);

  const addTodo = useCallback(() => {
    setTodos([...todos, "New Todo"]);
  }, [todos]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h5>{count}</h5>
      <button onClick={handleCounter}>Click</button>
      <button onClick={handlePage2}>Click Page 2</button>
      <Page1 />
      <Page2 nilai={getValue} page2={page2} />
      <Page3 todos={todos} addTodo={addTodo} />
    </div>
  );
};

export default App;
