import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Todolist from "./Todolist";

function App() {
  const [todos, setTodos] = useState([]);

  const handlerAddTodos = (todoText) => {
    if (todos.length >= 3) {
      alert("You have to login for add more list");
      return;
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: prev + 1,
          text: todoText,
          isCompleted: false,
        },
      ]);
    }
  };
  

  return (
    <div className="flex justify-center items-center font-sans bg-[#f1d3b3] min-h-screen">
      <BackgroundHeading />
      {/* todolist */}
      <div>
        <main className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba_(0.0.0.0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
          <Header todos={todos} />
          <Todolist
            todos={todos}
            setTodos={setTodos}
          />
          <Sidebar
            todos={todos}
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
// 1:26:35
export default App;
