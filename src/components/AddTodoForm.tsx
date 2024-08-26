import Button from "./Button";
import { useTodosContext } from "../lib/hooks";
import { useState } from "react";

export default function AddTodoForm() {
  const [todoText, setTodoText] = useState("");
  const {handlerAddTodos} = useTodosContext(); 
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handlerAddTodos(todoText)
        setTodoText(""); // Reset input field after submission
      }}
    >
      <h2 className="font-md text-[#231d15]">Add todo</h2>
      <input
        type="text"
        className="block w-full h-[45px] border border-black/12 rounded-[5px] my-[9px] text-[14px] px-[16px]"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Enter new list"
        required
      />
      <Button buttonType="primary">Add To List</Button>
    </form>
  );
}
