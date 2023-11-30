import { useState, useEffect } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

// recupera la string seteada en el storage y la convierte en objeto para pasarla a tasks
function getNewTasks () {
  const newTasks = window.localStorage.getItem("tasks");
  const tasks = JSON.parse(newTasks);
  return tasks ? tasks : [];
};

function App() {
  const [tasks, setTasks] = useState(getNewTasks()); // variable de estado con un arreglo vacio (actualizacion: ahora contiene la funcion
  // getNewTasks) (es el estado principal de app)
  

  // si tasks tiene contenido, lo setea en el storage como string
  useEffect(()=> {
    if (tasks.length) window.localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  
  // crea un nuevo objeto para el arreglo de tareas

  const addTask = (description) => { 
    const newTask = {
      id: self.crypto.randomUUID(),
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  };

  // funcion para borrar tareas

  const handleDelete = (id) => {
    const filteredTasks = tasks.filter(t=> t.id !== id);  // obtengo un arreglo sin lo filtrado
    setTasks([...filteredTasks]); // desestructuro para no mandar un arreglo sino el contenido
  };
  
  // funcion para cambiar el estado (el valor de isCompleted)

  const handleCrossTask = (id) => {
    const newStateCopy = tasks.map( t=>
      t.id === id ? {...t, isCompleted: !t.isCompleted} : t  // funcion ternaria, recibe tasks desestructurado y cambia el valor booleano
      );                                           // si coincide el id cambia el valor especifico, sino devuelve tasks inalterado
      setTasks([...newStateCopy]);
    };

    // en isCompleted puede ir : true pero para poder cambiar ida y vuelta entre true o false usamos un negativo


  return (
    <>
    <h1>Tareas</h1>
      <TaskForm onAddTask={(text) => addTask(text)}/> 
      <TaskList 
      tasks={tasks}
      onDeleteTask={(id) => handleDelete(id)} 
      onCrossTask={(id) => handleCrossTask(id)}/>
    </>
  );
}

// renderiza los componentes como elementos html pasandole "metodos custom" para que comunique funciones entre ellos

export default App;




