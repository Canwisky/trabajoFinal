function Input ({onAddTask}) {  //lo que esta en corchetes es el comunicador entre componentes

    const handleSubmit = (evento) => {
        evento.preventDefault(); // para que no vuelva a cargar la pagina
        const formCapture = new FormData(evento.target);
        const description = formCapture.get('description');
        // pasarle esta captura a la funcion que crea una nueva tarea
        onAddTask(description);
    };

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="description">Nueva Tarea</label>
            <input type="text" name="description" id="description" placeholder="describa la tarea" />
            <input type="submit" value="crear"/>
        </form>
    );
}

export default Input; 