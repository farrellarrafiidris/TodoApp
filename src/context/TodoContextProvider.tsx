import { createContext, useEffect, useState } from "react";
import { Todo } from "../lib/types";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

type TodoContextProviderProps = {
  children: React.ReactNode;
};

export const TodosContext = createContext<TTodosContext | null>(null);

type TTodosContext = {
  todos: Todo[];
  totalNumberTodos: number;
  numberOfCompletedTodos: number;
  handlerAddTodos: (todoText: string) => void;
  handlerToggleTodo: (id: number) => void;
  handlerDeleteTodo: (id: number) => void;
};

export default function TodoContextProvider({
  children,
}: TodoContextProviderProps) {

  const {isAuthenticated} = useKindeAuth()

  const getInitialTodos = () => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  }


  const [todos, setTodos] = useState<Todo[]>(getInitialTodos)

  const totalNumberTodos = todos.length;
  const numberOfCompletedTodos = todos.filter(
    (todo) => todo.isCompleted
  ).length;

  const handlerAddTodos = (todoText: string) => {
    if (todos.length >= 3 && !isAuthenticated ) {
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
    setTodos(
      todos.map((todo) => {
        console.log("Data telah sampai");
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };
  const handlerDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);


  return (
    <TodosContext.Provider
      value={{
        todos,
        totalNumberTodos,
        numberOfCompletedTodos,
        handlerAddTodos,
        handlerToggleTodo,
        handlerDeleteTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
