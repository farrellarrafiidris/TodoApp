import Counter from "./Counter";
import Logo from "./Logo";

type HeaderProps = {
  totalNumberTodos:number,
  numberOfCompletedTodos:number
 };
export default function Header({totalNumberTodos, numberOfCompletedTodos}: HeaderProps) {
  return (
    <header className="flex justify-between items-center px-[28px] col-[1/3] row-[1/2] bg-[#fbf5ed] border-b-2 border-slate-200">
      <Logo />
      <Counter totalNumberTodos={totalNumberTodos} numberOfCompletedTodos={numberOfCompletedTodos}/>
    </header>
  );
}
