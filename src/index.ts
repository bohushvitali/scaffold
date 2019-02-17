// Using a data attribute to prevents css mutations
const ul = document.querySelector('[data-js=list]') as HTMLInputElement
const clickCatcher = document.querySelector(
  '[data-js=sidebar-click-catcher]',
) as HTMLInputElement
const openButton = document.querySelector(
  '[data-js=open-sidebar]',
) as HTMLInputElement
const themeButton = document.querySelector(
  '[data-js=theme-button]',
) as HTMLInputElement
const sidebar = document.querySelector('[data-js=sidebar]') as HTMLInputElement
const form = document.querySelector('[data-js=form]') as HTMLInputElement
const inputField = document.querySelector(
  '[data-js=todo-field]',
) as HTMLInputElement

// Element presence guard to prevent error and continue script execution.
form &&
  form.addEventListener('submit', async e => {
    e.preventDefault()
    const res = await fetch('http://localhost:3000/todo', {
      body: JSON.stringify({ todo: inputField.value }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
    const json = await res.json()
    const li = document.createElement('li')
    li.innerHTML = json.todo
    ul.appendChild(li)
  })

openButton &&
  openButton.addEventListener('click', e => {
    e.preventDefault()
    sidebar.classList.toggle('sidebar--open')
  })

// Catch click outside sidebar
clickCatcher &&
  clickCatcher.addEventListener('click', e => {
    e.preventDefault()
    sidebar.classList.toggle('sidebar--open')
  })

themeButton &&
  themeButton.addEventListener('click', e => {
    e.preventDefault()
    document.body.classList.toggle('body--themed')
  })

// Emit error on missing element for debugging purposes
if (!ul) {
  throw new Error('Could not find [data-js=list]')
}
if (!clickCatcher) {
  throw new Error('Could not find [sidebar-click-catcher]')
}
if (!openButton) {
  throw new Error('Could not find [data-js=open-sidebar]')
}
if (!themeButton) {
  throw new Error('Could not find [data-js=theme-button]')
}
if (!sidebar) {
  throw new Error('Could not find [data-js=sidebar]')
}
if (!form) {
  throw new Error('Could not find [data-js=form]')
}
if (!inputField) {
  throw new Error('Could not find [data-js=todo-field]')
}
