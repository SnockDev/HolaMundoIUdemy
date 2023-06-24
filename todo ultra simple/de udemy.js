const tareas = JSON.parse(localStorage.getItem('todos')) ?? [];
const ul = document.getElementById('todo-list')

function render() {
    ul.innerHTML = ''
    tareas.forEach(t => ul.innerHTML += `<li>${t}</li>`)
    //eliminar
    const elementos = document.querySelectorAll('#todo-list li')
    
    elementos.forEach((elemento) => {
        elemento.addEventListener('click', () => {
            elemento.parentNode.removeChild(elemento)
            let indice = Array.from(elementos).indexOf(elemento)
            tareas.splice(indice, 1)
            render()
            console.log(tareas);
            actualizatodos()
        })

    });
}

window.onload = () => {
    render()
    const form = document.getElementById('todo-form')
    const todo = document.getElementById('todo')
    form.onsubmit = (e) => {
        e.preventDefault()
        //agregar
        const todotext = todo.value
        tareas.push(todotext)
        todo.value = ''
        actualizatodos()
        render()
    }
}

const actualizatodos=()=>{
    const todostring = JSON.stringify(tareas)
    localStorage.setItem('todos', todostring)
}