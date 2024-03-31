import { createContext, useContext } from "react";

export const TodoContext = createContext(
    {
        Todos : [
            {
                id : 1,
                todo : "message",
                completed : false,
            }
        ],
        AddTodo : (todo) => {},
        UpdateTodo : (id, todo) => {},
        DeleteTodo : (id) => {},
        ToggleTodo : (id) => {}
    })

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider

