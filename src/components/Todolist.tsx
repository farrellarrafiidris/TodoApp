const initialTodo = [
  "But Lambo",
  "But Audi",
  "But Nismo",
  "But GOAT",
  "But HER MUM",
];
export default function Todolist() {
  return (
    <ul>
      {initialTodo.map((todo, index) => (
        <li
          key={index}
          className="flex justify-between items-center px-8 h-[50px] text-[14px] cursor-pointer border-b border-slate-200"
        >
          <span>{todo}</span> <button>❌</button>
        </li>
      ))}
    </ul>
  );
}
