

function TaskList({tasks}) {
    const handleDelete = (id) => {
        console.log("borraremos" + id);
    };
    return (
        <div> lista de tareas 
            <ul>
                {tasks.map(t => <li onClick={handleDelete}> {t.id} - {t.description} - {t.isCompleted ? "terminado" : null } </li> )}
                <button onclick {() => handleDelete(t.id)}> Borrar </button>
            </ul>
        </div>
    );
} 

export default TaskList;