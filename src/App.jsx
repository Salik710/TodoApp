
import { useState, useEffect } from "react"
import { TodoProvider } from "./Contexts"
import { TodoForm, TodoItem } from "./Components"
function App() {
const [Todos, setTodos] = useState([])


const AddTodo = (todo) => {
  setTodos((prev) => [{id : Date.now(), ...todo},...Todos])
}

const UpdateTodo = (id, todo) => {
  setTodos((prev)=> prev.map((prevtodo)=> (prevtodo.id === id? todo: prevtodo)))
}

const DeleteTodo = (id) => {
  setTodos((prev) => prev.filter((todo) => todo.id !== id))
}

const ToggleTodo = (id) => {
  setTodos((prev) => 
  prev.map((prevtodo)=>
  prevtodo.id === id?{...prevtodo, completed: !prevtodo.completed} :prevtodo))
}
useEffect(() => {
  const todos = JSON.parse(localStorage.getItem("todos"))

  if (todos && todos.length > 0) {
    setTodos(todos)
  }
}, [])

useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(Todos))
}, [Todos])



  return (
    <TodoProvider value = {{Todos, AddTodo, UpdateTodo, DeleteTodo, ToggleTodo}}>
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                    <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {
                          Todos.map((todo) =>
                          (
                            <div key = {todo.id} className="w-full">
                                <TodoItem todo = {todo}/>
                            </div>

                          ))
                        }

                    </div>
                </div>
    </div>
    
    
    </TodoProvider>
  )
}

export default App
