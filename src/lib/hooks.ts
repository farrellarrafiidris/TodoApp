import { useContext } from "react";
import { TodosContext } from "../context/TodoContextProvider";

export function useTodosContext(){
    const context =  useContext(TodosContext);
    if(!context){
        throw new Error("The data is null");
    }
    return context;
}