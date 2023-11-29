import { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const [tasks, setTasks] = useState ([]); // variable de estado con un arreglo vacio
  // es el estado principal
  
  const addTask = (description) => { // crea un nuevo objeto para el arreglo de tareas
    const newTask = {
      id: self.crypto.randomUUID(),
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  };

  // funcion para borrar tareas
  const handleDeleteTask = (id) {

  };
  
  return (
    <>
    <h1>Tareas</h1>
      <TaskForm onAddTask={(text) => addTask(text)} />
      <TaskList tasks={tasks}/>
    </>
  );
}

export default App;




