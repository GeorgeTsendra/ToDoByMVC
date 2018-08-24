function Controler(model, view) {
  this.model = model;
  this.view = view;
  this.init();
}

Controler.prototype.init = function(){
  this.addListenersButton();
  this.addListenersTaskList();
}


Controler.prototype.addListenersButton = function(){
  const {
    input,
    addButton
  } = this.view.elements

  let inputQuery = (e)=>{
    if (e.keyCode == 13) {
      this.model.addTodoItem(input.value)
      this.view.render()
    }
  }
  let inputQuerybyButtom = (e)=>{
    this.model.addTodoItem(input.value)
    this.view.render()
  }

  window.addEventListener("keydown", inputQuery)
  this.view.elements.addButton.addEventListener("click", inputQuerybyButtom)
}


Controler.prototype.addListenersTaskList = function (){

  let buttonToDelete = document.querySelectorAll(".delete")
  let taskWraperQueryDelete = (e)=>{
    if (e.target.classList.contains("delete")) {
        this.model.removeItem(e.target.parentElement.parentElement.id)
        this.view.render()
      }
    }

buttonToDelete.forEach(value => {
value.addEventListener("click", taskWraperQueryDelete )
})

let buttonToEdit = document.querySelectorAll(".edit")
let taskWraperQueryEdit = (e)=>{
  this.model.updataToDoitem(e.target.parentElement.parentElement.id, this.view.elements.input.value)
  console.log(this.view.elements.addButton);
  console.log(e.target.parentElement.parentElement.id);
  this.view.render()
}
buttonToEdit.forEach(value =>{
  value.addEventListener("click", taskWraperQueryEdit)
})

}
