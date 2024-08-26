import { useTodosContext } from "../lib/hooks";
export default function Counter() {


  const {numberOfCompletedTodos, totalNumberTodos} = useTodosContext();
  return (
    <p>
      <b>{numberOfCompletedTodos }</b> / {totalNumberTodos} Completed
    </p>
  );
}
