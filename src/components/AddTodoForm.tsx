import { useState } from "react";
import Button from "./Button";

export default function AddTodoForm({ onAddTodo }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onAddTodo(text);
      setText(""); // Reset input field after submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-md text-[#231d15]">Add todo</h2>
      <input 
        type="text" 
        className="block w-full h-[45px] border border-black/12 rounded-[5px] my-[9px] text-[14px] px-[16px]" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter new todo"
      />
      <Button buttonType="">Add To List</Button>
    </form>
  );
}
