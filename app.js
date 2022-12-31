let inputTask = document.getElementById('inputTask')
const addTaskBtn = document.getElementById('addTaskBtn')
const taskList = document.getElementById('taskList')
const popUp = document.getElementById('popUp')

addTaskBtn.addEventListener('click', addTask)

function addTask() {
  if (inputTask.value === '') {
    popUp.classList.add('active')
  } else {
    createTaskList()
    inputTask.value = ''
    popUp.classList.remove('active')
  }
}

function createTaskList() {
  let divParent = document.createElement('div')
  divParent.classList.add('task')

  let pChild = document.createElement('p')
  pChild.innerText = `${inputTask.value}`
  pChild.addEventListener('click', checkTask)
  divParent.appendChild(pChild)

  let buttonChild = document.createElement('button')
  buttonChild.classList.add('delete-task')
  buttonChild.innerText = 'Delete'
  buttonChild.setAttribute('id', 'deleteTask')
  buttonChild.addEventListener('click', deleteTask)
  divParent.appendChild(buttonChild)

  taskList.appendChild(divParent)
}

function deleteTask() {
  let button = this
  button.parentElement.remove()
}

function checkTask() {
  let checkList = this

  checkList.style.textDecoration = 'line-through'
  checkList.style.color = '#424cf9'
}
