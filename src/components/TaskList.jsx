

function TaskList({ tasks, onDeleteTask, onCrossTask }) {
    
    return (
        <div> lista de tareas 
            <ul>
                {tasks.map(t => <li style={t.isCompleted ? {textDecoration: "line-through", color: "lightgray"} : undefined}> {t.description} - {t.isCompleted ? "completado " : "pendiente "} 
                <button onClick={() => onDeleteTask(t.id)}> Borrar </button>
                <button onClick={() => onCrossTask (t.id)}> Marcar Completado/ pendiente </button>
                </li> )}
            </ul>
        </div>
    );
} 

// se llama a la funcion con un callback para poder pasarle un parametro?

export default TaskList;


