import React, { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [items, setItems] = useState(["A"]);

  function handelOnCahnge(event) {
    setTask(event.target.value);
  }

  function handelOncCLick() {
    setItems((prevtask) => {
      return [...prevtask, task];
    });
    setTask("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handelOnCahnge} type="text" value={task} />
        <button onClick={handelOncCLick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todoItem) => (
            <li>{todoItem}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
