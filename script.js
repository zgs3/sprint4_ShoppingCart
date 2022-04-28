const listsContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form')
const newListInput = document.querySelector('[data-new-list-input')

let lists = [{
  id: 1,
  name: 'list1'
}, {
  id: 1,
  name: 'list2'
}]

newListForm.addEventListener('submit', e => {
  e.preventDefault()
  const listName = newListInput.value
  if (listName == null || listName === '') return // checking if the name of the list is typed in
  const list = createList(listName)
  newListInput.value = null
  lists.push(list)
  render()
})

// function for creating a list item and returning unique id for the item as a date
function createList(name) {
  return { id: Date.now().toString(), name: name, tasks: []}
}

function render() {
  // creating list item
  clearElement(listsContainer)
  lists.forEach(list => {
    const listElement = document.createElement('li')
    listElement.dataset.listId = list.id // identifying which item is clicked on by id
    listElement.classList.add('list-name')
    listElement.innerText = list.name
    listsContainer.append(listElement)
  })
}

// clearing the list
function clearElement(element) {
  while(element.firstChild) {
    element.removeChild(element.firstChild)
  }
}

render()