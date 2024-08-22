import { useState } from "react";
import DeleteButton from "./DeleteButton";
export default function Todolist() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Buy a House",
      isComplete: false,
    },
    {
      id: 2,
      text: "Buy a School",
      isComplete: false,
    },
    {
      id: 3,
      text: "Buy a Slave",
      isComplete: false,
    },
    {
      id: 4,
      text: "Buy a Mine",
      isComplete: false,
    },
    {
      id: 5,
      text: "Buy a Box",
      isComplete: true,
    },
  ]);
  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b-2 border-slate-200"
          onClick={() => {
            setTodos(
              todos.map((t) => {
                if (t.id === todo.id) {
                  return { ...t, isComplete: !t.isComplete };
                }
                return t;
              })
            );
          }}
        >
          <span
            className={`${todo.isComplete ? "line-through text-[#ccc]" : ""}`}
          >
            {" "}
            {todo.text}
          </span>
          {""}

          <DeleteButton
            id={todo.id}
            setTodos={setTodos}
          />
        </li>
      ))}
    </ul>
  );
}
