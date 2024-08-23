import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

type SidebarProps = {
  handlerAddTodos : (todoText: string) => void
}

export default function Sidebar({handlerAddTodos} : SidebarProps) {
  return (
    <section className="flex flex-col col-[2/3] row-[2/3] bg-[#fffcf9] border-l-2 border-slate-200 px-[12px] pt-[18px] pb-[28px]">
        <AddTodoForm handlerAddTodos={handlerAddTodos}/>
        
        <div className="mt-auto space-y-2">
            <Button buttonType="secondary">Log In</Button>
            <Button buttonType="secondary">Register</Button>
        </div>
    </section>
  )
}
