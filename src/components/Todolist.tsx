import { useContext } from "react";
import { Todo } from "../lib/types";
import DeleteButton from "./DeleteButton";
import { TodosContext } from "../context/TodoContextProvider";

export default function Todolist() {
  const {todos, handlerToggleTodo, handlerDeleteTodo} = useContext(TodosContext);
  return (
    <ul>
      {
        todos.length === 0 && <li className="text-center font-bold text-black/30 h-full pt-[40%] text-xl">Start by adding new list</li>}

      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b-2 border-slate-200"
          onClick={
            () => {
              handlerToggleTodo(todo.id)
              console.log(todo)
            }
          }
        >
          <span
            className={`${todo.isCompleted ? "line-through text-[#ccc]" : ""}`}
          >
            {" "}
            {todo.text}
          </span>
          {""}

          <DeleteButton
            id={todo.id}
            handlerDeleteTodo={handlerDeleteTodo}
          />
        </li>
      ))}
    </ul>
  );
}
