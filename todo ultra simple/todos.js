const tareas= JSON.parse( localStorage.getItem('todos')) ?? []
const form=document.getElementById('todo-form')
const ul=document.getElementById('todo-list')
const input=document.getElementById('todo')


const render=()=>{
    console.log('iniciado');
    ul.innerHTML=''
    const todotemplate=tareas.map(t=>ul.innerHTML=`<li>${t}</li>`)
    ul.innerHTML=todotemplate.join('')
    
    const elementos=document.querySelectorAll('#todo-list li')
    elementos.forEach(elemento =>{
        elemento.addEventListener('click',()=>{
            const indice=Array.from(elementos).indexOf(elemento)
            tareas.splice(indice,1)
            elemento.parentElement.removeChild(elemento)
            console.log(tareas);
            render()
            actualizar()
        })
    })
}

window.onload=()=>{
    render()
    form.onsubmit=(e)=>{
        e.preventDefault()
        //agregar, funcionando correctamente
        const inputtext=input.value
        input.value=''
        tareas.push(inputtext)


        console.log(tareas);

        //eliminar, bien hasta ahora
        // const elementos=document.querySelectorAll('#todo-list li')
        // elementos.forEach(elemento =>{
        //     elemento.addEventListener('click',()=>{
        //         const indice=Array.from(elementos).indexOf(elemento)
        //         tareas.splice(indice,1)
        //         elemento.parentElement.removeChild(elemento)
        //         console.log(tareas);
        //     })
        // })
        render()
        actualizar()
    }
}
const actualizar=()=>{
    const Stringtarea=JSON.stringify(tareas)
    localStorage.setItem('todos',Stringtarea)
}