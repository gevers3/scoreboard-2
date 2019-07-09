let counter = 0

const main = () => {
  console.login('Hello world')
}

const addOnetoCount1 = () => {
  console.log('add 1 to counter')
  counter = counter + 1
  console.log(counter)
  document.querySelector('p.team-1-score').textContent = counter
}

const subtractOnefromCount1 = () => {
  console.log('subtract 1 from counter')
  counter = counter - 1
  console.log(counter)
  document.querySelector('p.team-1-score').textContent = counter
}

const addOnetoCount2 = () => {
  console.log('add 1 to counter')
  counter = counter + 1
  console.log(counter)
  document.querySelector('p.team-2-score').textContent = counter
}

const subtractOnefromCount2 = () => {
  console.log('subtract 1 from counter')
  counter = counter - 1
  console.log(counter)
  document.querySelector('p.team-2-score').textContent = counter
}


// NEW STUFF ----------------------------------------------------

const changeColor1Click = () => {
  document.querySelector('.quarter-1').style.background = 'red'
  document.querySelector('.quarter-1').style.color = 'black'
}
const changeColor2Click = () => {
  document.querySelector('.quarter-2').style.background = 'red'
  document.querySelector('.quarter-2').style.color = 'black'
}
const changeColor3Click = () => {
  document.querySelector('.quarter-3').style.background = 'red'
  document.querySelector('.quarter-3').style.color = 'black'
}
const changeColor4Click = () => {
  document.querySelector('.quarter-4').style.background = 'red'
  document.querySelector('.quarter-4').style.color = 'black'
}

// ------------------------------------------------------------


// Find the buttons, when you are clicked, do this thing
document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', addOnetoCount1)
document.addEventListener('DOMContentLoaded', main)

document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subtractOnefromCount1)
document.addEventListener('DOMContentLoaded', main)

document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', addOnetoCount2)
document.addEventListener('DOMContentLoaded', main)

document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subtractOnefromCount2)
document.addEventListener('DOMContentLoaded', main)


// NEW STUFF ----------------------------------------------------

document
  .querySelector('.quarter-1')
  .addEventListener('click', changeColor1Click)
document
  .querySelector('p.quarter-2')
  .addEventListener('click', changeColor2Click)
document
  .querySelector('p.quarter-3')
  .addEventListener('click', changeColor3Click)
document
  .querySelector('p.quarter-4')
  .addEventListener('click', changeColor4Click)

// ------------------------------------------------------------



// document.querySelector('.quarter-1, .quarter-2, .quarter-3, .quarter-4').style.background = 'red';
// document.querySelector('.quarter-1, .quarter-2, .quarter-3, .quarter-4').element.className = classes.join("new-quarter-color")

