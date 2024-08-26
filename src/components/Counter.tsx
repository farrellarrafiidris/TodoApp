import { useContext } from "react";
import { TodosContext } from "../context/TodoContextProvider";

type CounterProps = {
  totalNumberTodos:number
  numberOfCompletedTodos:number
 };
export default function Counter() {
  const {numberOfCompletedTodos, totalNumberTodos} = useContext(TodosContext);
  return (
    <p>
      <b>{numberOfCompletedTodos }</b> / {totalNumberTodos} Completed
    </p>
  );
}
