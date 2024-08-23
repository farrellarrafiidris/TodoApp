type CounterProps = {
  totalNumberTodos:number
  numberOfCompletedTodos:number
 };
export default function Counter({totalNumberTodos,numberOfCompletedTodos}: CounterProps) {
  return (
    <p>
      <b>{numberOfCompletedTodos }</b> / {totalNumberTodos} Completed
    </p>
  );
}
