"use client";
import { useState } from "react";

export default function Home() {
  const [inputData, setInputData] = useState("");
  const [todos, setTodos] = useState([]);

  const onChangeInputData = (e) => {
    setInputData(e.target.value);
  };

  const onClickDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const onClickAdd = () => {
    setTodos([...todos, inputData]);
    setInputData("");
  };
  return (
    <>
      <div>
        <h1>Todo App</h1>
        <input
          placeholder="タスクを入力"
          value={inputData}
          onChange={onChangeInputData}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div>
        <h2>Todo List</h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo} <button onClick={() => onClickDelete(index)}>削除</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
