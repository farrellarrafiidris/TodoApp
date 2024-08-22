
export default function Counter({totalTodosNumber ,completedTodosCount}) {
  return (
    <p>
      <b>{totalTodosNumber}</b>/ {completedTodosCount} Completed
    </p>
  );
}
