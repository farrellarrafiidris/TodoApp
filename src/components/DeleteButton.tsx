
type ButtonDeleteProps ={
  id : number,
  handlerDeleteTodo: (id : number) => void
}
export default function DeleteButton({id,handlerDeleteTodo}: ButtonDeleteProps) { 

  return (
    <button
          onClick={(e) => {
            e.stopPropagation();
            handlerDeleteTodo(id)
          }}
          >❌</button>
  )
}
