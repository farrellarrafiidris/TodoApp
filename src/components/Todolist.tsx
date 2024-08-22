import DeleteButton from "./DeleteButton";
export default function Todolist({todos, setTodos}) {
  return (
    <ul>
      {
        todos.length === 0 && <li className="text-center font-bold text-black/30 h-full pt-[40%] text-xl">Start by adding new list</li>}

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
