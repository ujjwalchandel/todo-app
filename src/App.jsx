import { useState } from "react";
import Input from "./components/Input";
import List from "./components/List";


function App() {
  let [todos, setTodos] = useState(['breakfast', 'lunch', 'snacks', 'dinner', 'ujjwal'])

  const addTodo = (data) => {

    setTodos([...todos, data])
  }

  const deleteTodo =(index) => {

    todos.splice(index,1)

    setTodos([...todos])
  }

  return (
    <div className="container mt-4">
      <Input addTodo={addTodo}/>
      <List todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
