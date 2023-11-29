

function TaskList({ tasks, onDeleteTask }) {
    
    return (
        <div> lista de tareas 
            <ul>
                {tasks.map(t => <li> {t.description} - {t.isCompleted ? "terminado " : "pendiente "} 
                <button onClick={() => onDeleteTask(t.id)}> Borrar </button>
                </li> )}
            </ul>
        </div>
    );
} 

export default TaskList;