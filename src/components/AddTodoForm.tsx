import Button from "./Button";

export default function AddTodoForm() {
  return (
    <form action="">
        <h2 className="font-md text-[#231d15]">Add todo</h2>
        <input type="text" className="block w-full h-[45px] border border-black/12 rounded-[5px] my-[9px] text-[14px] px-[16px]" />
        <Button buttonType="">Add To List</Button>
    </form>
  )
}
