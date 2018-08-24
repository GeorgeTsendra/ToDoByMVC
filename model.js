class Model {
  constructor() {
    this.data = [];
  }
  id(){

    const idLength = localStorage.length;
    return `${idLength}_${Math.random()}${Math.random()}${Math.random()}${Math.random()}`
  }
  addTodoItem(newItem){
    if (!newItem) {
      return
    }
    localStorage.setItem(this.id(), newItem)

  }

  removeItem(itemId){
    if (!itemId){
      return
    }
    localStorage.removeItem(itemId)

  }

  updataToDoitem(itemId, newItem){
    if (!newItem){
      return
    }
    localStorage[itemId] = newItem;


  }
}
