'use server';

import updateData from "./actions";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default async function Home() {

  async function getData() {
    const response = await fetch('http://localhost:3000/api/todos');
    const data = await response.json();
    return data;
  }
  const todos = await getData()

  async function handleClick(id: number) {
    'use server';
    const response = await fetch(`http://localhost:3000/api/todos/${id}`, {method: 'DELETE'})

    updateData('/');
  }

  return (
    <>
    <div>
      <h1 className="header">To Do List</h1>
      <h1 className="header">To Do List</h1>
      <TodoForm updateData={updateData}/>
      <TodoList todos={todos} handleClick={handleClick}/>
    </div>    
    </>
  );
}
