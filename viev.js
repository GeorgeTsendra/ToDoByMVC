class View {
  constructor() {
    this.elements = {
      addButton: document.querySelector(".controls_add"),
      input: document.querySelector(".controlers-input"),
      taskPlace: document.querySelector(".list-item"),
    }
    this.render();
  }

  render(){
    let localStorageLength = localStorage.length
    let toDolists = Object.values({...localStorage})
    let toDoId = Object.keys({...localStorage});

    if (localStorageLength = 0) {
      this.elements.taskPlace.innerHTML = ".... Laoding";
    }

    let renderThmlTasks = toDolists.reduce((contect, value, index, add)=>{
      let id = toDoId[index];
      let tasks = `<div id="${id}" class="task">
                    <div class="task-wraper">
                        <input class="input-task" type="checkbox">
                        <p class="task-text">${value}</p>
                    </div>
                    <div class="a-wraper">
                      <a href="#" class="delete">delete</a>
                      <a href="#" class="edit">edit</a>
                    </div>

                </div>`;
              return contect+ tasks;
    }, "")
    this.elements.taskPlace.innerHTML = renderThmlTasks;

    }
}
