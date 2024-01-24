function addTask(){
    let Inputik = document.getElementById('Inputik')
    let taskList = document.getElementById('taskList')

    if(Inputik.value.trim() ===""){
        alert("А задачу добавить?")
        return
    }

    let newTask = document.createElement('li')
    newTask.className = "lishki"
    newTask.innerHTML = Inputik.value

    let deleteButton = document.createElement('span')
    deleteButton.className = 'deleteButton'
    deleteButton.innerHTML = '🔥'
    deleteButton.onclick = function(){
        taskList.removeChild(newTask)
    }

    newTask.appendChild(deleteButton)
    taskList.appendChild(newTask)

    Inputik.value= ""
}