import "./style.css";
import image from "./sky.jpg";

import React, { useState } from "react";

import ReactDom from "react-dom";

const initialState = ["milk", "eggs", "bread"];

// arrow function.
const App = () => {
  const [todos, setTodos] = useState(initialState);
  const [editIndex, setEditIndex] = useState(-1);

  const addItem = () => {
    setTodos([...todos, "(your new item)"]);
  };

  const todosMarkup = todos.map((item, index) => (
    <li className="list" key={index}>
      <div className="item">{item}</div>
      <button
        className="button_1"
        onClick={() => {
          setEditIndex(index);
        }}
      >
        Edit
      </button>
      <button
        className="button_2"
        onClick={() => {
          const newTodos = todos.filter((item, idx) => {
            // return all the items which do not match the current index
            return index !== idx;
          });
          setTodos(newTodos);
        }}
      >
        Delete
      </button>
      {editIndex === index && (
        <EditTodo
          todoitem={item}
          onUpdate={(newTodo) => {
            const editedTodos = todos.map((item, index) => {
              if (index === editIndex) {
                return newTodo;
              }
              return item;
            });
            setEditIndex(-1);
            setTodos(editedTodos);
          }}
        />
      )}
    </li>
  ));

  // should return only one node
  return (
    <div>
      <button className="button_3" onClick={addItem}>
        Add
      </button>
      {todosMarkup}
    </div>
  );
};

const EditTodo = ({ todoitem, onUpdate }) => {
  const [todoText, setTodoText] = useState(todoitem);

  const handleNewText = (event) => {
    setTodoText(event.target.value);
  };

  return (
    <div>
      <input
        className="item_text_box"
        type="text"
        value={todoText}
        onChange={handleNewText}
      />
      <button className="button_4" onClick={() => onUpdate(todoText)}>
        Save
      </button>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("app"));
