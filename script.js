const listsContainer = document.querySelector('[data-lists]')
const newListForm = document.querySelector('[data-new-list-form')
const newListInput = document.querySelector('[data-new-list-input')

const LOCAL_STORAGE_LIST_KEY = 'task.lists'
// getting list items from LS or an empty array if LS is empty
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []

newListForm.addEventListener('submit', e => {
  e.preventDefault()
  const listName = newListInput.value
  if (listName == null || listName === '') return // checking if the name of the list is typed in
  const list = createList(listName)
  newListInput.value = null
  lists.push(list)
  saveAndRender()
})

// function for creating a list item and returning unique id for the item as a date
function createList(name) {
  return { id: Date.now().toString(), name: name, tasks: []}
}

function saveAndRender() {
  save()
  render()
}

// function for saving list item to LS
function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists))
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