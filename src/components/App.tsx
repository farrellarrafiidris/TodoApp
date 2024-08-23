import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Todolist from "./Todolist";
import { Todo } from "../lib/types";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const totalNumberTodos = todos.length
  const numberOfCompletedTodos = todos.filter(
    (todo) => todo.isCompleted
  ).length;

  const handlerAddTodos = (todoText:string) => {
    if (todos.length >= 3) {
      alert("You have to login for add more list");
      return;
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: todoText,
          isCompleted: false,
        },
      ]);
    }
  };

  const handlerToggleTodo = (id: number) => {
    setTodos(todos.map((todo) => {
      console.log("Data telah sampai");
        if (todo.id === id) {
            return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
    }));
};

  const handlerDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }
  

  return (
    <div className="flex justify-center items-center font-sans bg-[#f1d3b3] min-h-screen">
      <BackgroundHeading />
      {/* todolist */}
      <div>
        <main className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba_(0.0.0.0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
          <Header totalNumberTodos={totalNumberTodos} numberOfCompletedTodos={numberOfCompletedTodos} />
          <Todolist
            todos={todos}
            handlerToggleTodo={handlerToggleTodo}
            handlerDeleteTodo={handlerDeleteTodo}
          />
          <Sidebar
            handlerAddTodos={handlerAddTodos}
          />
          {/* footer */}
        </main>
        <Footer />
      </div>
    </div>
  );
}
// https://www.youtube.com/watch?v=J3aFEqouK44
// 3:40:36
export default App;
