import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Todolist from "./Todolist";

function App() {
  
  

  return (
    <div className="flex justify-center items-center font-sans bg-[#f1d3b3] min-h-screen">
      <BackgroundHeading />
      {/* todolist */}
      <div>
        <main className="relative w-[972px] h-[636px] bg-white rounded-[8px] shadow-[0_4px_4px_rgba_(0.0.0.0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden">
          <Header/>
          <Todolist
          />
          <Sidebar
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
