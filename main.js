/*
tipos de datos -> string o number o boolean o array o object o combinaciones
variables -> let o const
ciclos -> for o while o do while o for of / tambien podes usar forEach
condicionales -> if o else if o switch / tambien podes usar metodos de busqueda y transformacion
funciones -> function o arrow function 

paradigma -> funcional(funciones y objetos literales) o orientado a objetos(clases y metodos)
metodos de arrays -> push,splice,etc
metodos de busqueda y transformacion -> find o/y filter o/y some o/y reduce o/y findIndex , etc
manipulacion del dom -> getElementById / innerText / createElement / append / remove / value 
localStorage 
eventos -> click o/y  o/y change 

*/

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