export default function DeleteButton({id,handlerDeleteTodo}) { 

  return (
    <button
          onClick={(e) => {
            e.stopPropagation();
            handlerDeleteTodo(id)
          }}
          >❌</button>
  )
}
