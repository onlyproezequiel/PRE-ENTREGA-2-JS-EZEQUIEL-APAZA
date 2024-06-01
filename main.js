

let tareas = JSON.parse(localStorage.getItem("tareas"))  || []

const agregarTarea = (nombre,contenido) => {
    const tarea = {
        id:crypto.randomUUID(),
        fecha: new Date(),
        nombre,
        contenido
    }
    tareas.push(tarea)
    localStorage.setItem("tareas",JSON.stringify(tareas))
    return tarea
}

const borrarTarea = (id) => {
tareas = tareas.filter(tarea => tarea.id != id)
localStorage.setItem("tareas",JSON.stringify(tareas))
}

const actualizarTarea = (id,nombreNuevoTarea,contenidoNuevoTarea) => {

}

const crearTarjetaTarea = (tarea) => {
    const app = document.getElementById("app")
    const element = document.createElement("div")
    element.className = "tarjeta"
    element.innerHTML = `
                            <input type="text"  class="input" value="${tarea.nombre}">
                            <textarea type="text"  class="input">${tarea.contenido}</textarea>
                            <button class="btn btn-actualizar">Actualizar</button>
                            <button class="btn btn-borrar">Borrar</button>
    `
    app.append(element)
}

const principal = () =>{

    tareas.forEach(tarea => {
        crearTarjetaTarea(tarea)
    })
    const btnAgregarTarea = document.getElementById("btnAgregarTarea")
    btnAgregarTarea.addEventListener("click",()=>{
        const nombreNuevaTarea = document.getElementById("nombreNuevaTarea")
        const contenidoNuevaTarea = document.getElementById("contenidoNuevaTarea")
        const tarea = agregarTarea(nombreNuevaTarea.value ,contenidoNuevaTarea.value)
        crearTarjetaTarea(tarea)
        nombreNuevaTarea.value = ""
        contenidoNuevaTarea.value = ""

    })

}

principal()