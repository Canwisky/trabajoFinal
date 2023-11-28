import { useState } from 'react'
import './App.css'
import RandomUUID from 'node: crypto';
import TaskForm from './components/TaskForm'

function App() {
  const [tasks, setTasks] = useState ([]); // variable de estado con un arreglo vacio
  // es el estado principal
  
  const addTask = (description) => { // crea un nuevo objeto para el arreglo de tareas
    const newTask = {
      id: RandomUUID(),
      description: description,
      isCompleted: false,
    };
  }
  
  return (
    <>
    <h1>Tareas</h1>
      <TaskForm onAddTask={(text) => addTask(text)} />
    </>
  )
}

export default App
