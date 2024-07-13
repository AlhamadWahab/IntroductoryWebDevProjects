// click event to add a new Task 
document.getElementById('addNew-mission').addEventListener('click', function () {
    let userInput = prompt('Please enter your task')
    if (userInput != null) {
        let obj = {
            "title": userInput,
            "date": fullCurrentDate,
            "isCompleted": false
        }

        if (obj.title != '') {
            taskDatabase.push(obj)
        }
    }
    setTaskOnLocalStorge()
    addNewTask()
})


// delete a Task
function deleteTaskOnClick(index) {
    let check = confirm(`Are you sure, delete the Task: ${taskDatabase[index].title}`)
    if (check) {
        taskDatabase.splice(index, 1)
        setTaskOnLocalStorge()
    }
    addNewTask()
}
// updating the title of the task
function updateTaskOnClick(index) {
    let check = confirm(`Are you sure, updating the Task: ${taskDatabase[index].title}`);
    if (check) {
        let newInput = prompt('Please enter the new task title:', taskDatabase[index].title);
        if (newInput !== '' && newInput !== null) {
            taskDatabase[index].title = newInput;
            setTaskOnLocalStorge()
            addNewTask();
        }
    }
}
// mark task that is completed
function markCompletedOnClick(index) {
    taskDatabase[index].isCompleted = !taskDatabase[index].isCompleted
    setTaskOnLocalStorge()
    addNewTask()
}

