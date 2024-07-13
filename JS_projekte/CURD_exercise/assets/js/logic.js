let currentDate = new Date()
let fullCurrentDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()} | ${currentDate.getHours()}: ${currentDate.getMinutes()}`
console.log(fullCurrentDate)
var taskDatabase = [
  {
    "title": 'playing',
    "date": fullCurrentDate,
    "isCompleted": true
  },
  {
    "title": 'shopping',
    "date": fullCurrentDate,
    "isCompleted": false
  },
  {
    "title": 'eating',
    "date": fullCurrentDate,
    "isCompleted": true
  },
  {
    "title": 'sleeping',
    "date": fullCurrentDate,
    "isCompleted": false
  }
]

getTaskFromLocalStorge()

let element = document.getElementById('task-table-body');
// add a new Task 
function addNewTask() {
  element.innerHTML = ''
  let index = 0

  for (task of taskDatabase) {
    let content =
      `
    <!-- task -->
    <div class= "${task.isCompleted ? 'done' : ''}"  id="task-container">
      <!-- task info  -->
      <div class="info">
        <h2>${task.title}</h2>
        <div id="calender">
          <span class="material-symbols-outlined">
            calendar_month
          </span>
          <span>${task.date}</span>
        </div>
      </div>
      <!--// task info //-->
      <!-- task actions -->
      <div class="actions">
        <button onclick= "deleteTaskOnClick(${index})"
          style="      
            color: white;
            line-height: 0;
          "
          class="circular"
        >
          <!-- <i class="bx bxs-message-square-x"></i> -->
          <span class="material-symbols-outlined"> delete </span>
        </button>
        
        ${task.isCompleted ? `
            <button onclick="markCompletedOnClick(${index})" 
              style="
                background-color: rgb(25, 211, 56);
                color: hsl(0, 0%, 100%);
              "
              class="circular"
            >
              <!-- <i class="bx bxs-message-square-edit"></i> -->
              <span class="material-symbols-outlined"> check_circle </span>
            </button>
          `
        :
        `
          <button onclick="markCompletedOnClick(${index})" 
               style="
                 background-color: rgb(197, 135, 135);
                 color: hsl(0, 0%, 100%);
               "
               class="circular"
             >
               <!-- <i class="bx bxs-message-square-edit"></i> -->
               <span class="material-symbols-outlined">
               unpublished 
               </span>
             </button>
        `
      /* or : cancel */
      }
        <button onclick="updateTaskOnClick(${index})"
          style="
            background-color: rgb(53, 98, 223);
            color: hsl(0, 0%, 100%);
          "
          class="circular"
        >
          <!-- <i class="bx bxs-checkbox-checked"></i> -->
          <span class="material-symbols-outlined"> edit_square </span>
          </button>
          </div>
          <!--// task actions //-->
          </div>
          <!--// task //-->
          `
    element.innerHTML += content
    index++
  }
}
addNewTask()

// =========== Storage Functions ============ //

// save data and changes on lacal storage
function setTaskOnLocalStorge() {
  let taskDatabaseString = JSON.stringify(taskDatabase)
  localStorage.setItem('AllTask', taskDatabaseString)
}

// to get all data from local storage
function getTaskFromLocalStorge() {
  let retrievedtaskDatabase = JSON.parse(localStorage.getItem('AllTask'))
  taskDatabase = retrievedtaskDatabase ?? []
  /* 
    if(retrievedtaskDatabase == null){
      taskDatabase = []
    }
    else{
        taskDatabase = retrievedtaskDatabase
    }
  */
}