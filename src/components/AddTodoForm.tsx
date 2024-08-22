import { useState } from "react";
import Button from "./Button";

export default function AddTodoForm({ todos, setTodos }) {
  const [todoText, setTodoText] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (todos.length >= 3) {
          alert("You have to login for add more list");
          return;
        } else {
        setTodos((prev) => [
          ...prev,
          { id: prev + 1, text: todoText, isComplete: false },
        ]);
        setTodoText(""); // Reset input field after submission
      }}}
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
      <Button buttonType="">Add To List</Button>
    </form>
  );
}
