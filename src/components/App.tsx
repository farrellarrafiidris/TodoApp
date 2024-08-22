import { useState } from "react"
import BackgroundHeading from "./BackgroundHeading"
import Footer from "./Footer"
import Header from "./Header"
import Sidebar from "./Sidebar"
import Todolist from "./Todolist"

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Buy a House",
      isComplete: false,
    },
    {
      id: 2,
      text: "Buy a School",
      isComplete: false,
    },
    {
      id: 3,
      text: "Buy a Slave",
      isComplete: false,
    },
    {
      id: 4,
      text: "Buy a Mine",
      isComplete: false,
    },
    {
      id: 5,
      text: "Buy a Box",
      isComplete: true,
    },
  ]);
  return (
  <div className="flex justify-center items-center font-sans bg-[#f1d3b3] min-h-screen">
    <BackgroundHeading/>
    {/* todolist */}
    <div>
    <main className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba_(0.0.0.0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
      <Header todos={todos}/>
      <Todolist todos={todos} setTodos={setTodos}/>
      <Sidebar/>
        {/* footer */}
    </main>
    <Footer/>
    </div>
  </div>
)
}
// https://www.youtube.com/watch?v=J3aFEqouK44
// 1:26:35
export default App
