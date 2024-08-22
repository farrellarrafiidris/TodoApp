
export default function Counter({todos}) {
  return (
    <p>
      <b>{todos.filter((todo) => todo.isComplete).length}</b>/{ todos.length} Completed
    </p>
  );
}
