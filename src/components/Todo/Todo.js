import React, { useState } from "react";
import "./Todo.css";

const Todo = () => {
  const [input, setInput] = useState();
  const [items, setItems] = useState([]);
  // const [checked, setChecked] = useState(false);

  const addHandler = (e) => {
    e.preventDefault();
    if (input) {
      setItems([...items, { name: input, ischecked: false }]);
      setInput("");
    }
  };

  const deleteHandler = (ele) => {
    console.log(ele);
    setItems(items.filter((x) => x !== ele));
  };
  const cbHandler = (position) => {
    items[position].ischecked = !items[position].ischecked;
    setItems([...items]);
  };
  return (
    <div className="todo-form">
      <form onSubmit={addHandler} style={{ marginBottom: "15px" }}>
        <div className="title">
          <label> TODO LIST </label>{" "}
        </div>
        <div>
          <input
            style={{ width: "75%", float: "left", padding: "10px 5px" }}
            type="text"
            id="inputTodo"
            name="inputTodo"
            placeholder="Please add your task"
            onChange={(e) => setInput(e.target.value)}
            value={input}
          />
          <button
            type="submit"
            style={{ width: "20%", float: "right", padding: "10px 5px" }}
          >
            Add
          </button>
        </div>
        <div style={{ clear: "both" }}></div>
      </form>

      <div>
        {items.map((ele, i) => {
          return (
            <div
              key={i}
              style={{
                border: "1px solid #454545",
                margin: "2px",
                padding: "5px",
                borderRadius: "5px",
              }}
            >
              <input type="checkbox" onChange={() => cbHandler(i)} />

              {ele.ischecked ? (
                <label style={{ textDecoration: "line-through" }}>
                  {" "}
                  {ele.name}
                </label>
              ) : (
                <label> {ele.name}</label>
              )}
              <button
                onClick={() => deleteHandler(ele)}
                style={{ float: "right", padding: "7px", margin: "-6px" }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Todo;
