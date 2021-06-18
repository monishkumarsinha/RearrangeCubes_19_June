var colors = {
  1: '#6F98A8',
  2: '#2B8EAD',
  3: '#2F454E',
  4: '#2B8EAD',
  5: '#2F454E',
  6: '#BFBFBF',
  7: '#BFBFBF',
  8: '#6F98A8',
  9: '#2F454E'
}

function random(){
  let randomArr = []
  let found = false
  let random
  for (let i = 0; i < 9; i++) {
    do {
      found = false
      random = Math.floor(Math.random() * 10)
      if (random !== 0 && !randomArr.includes(random)) {
        randomArr.push(random)
        found = true
      }
    }
    while (!found)
  }
  return randomArr
}

function create(arr){
  var item = document.getElementsByClassName('cubes')[0]
  while (item.hasChildNodes()) {
    item.removeChild(item.lastChild);
  }
  for (var i = 0; i < arr.length; i++) {
    var new_element = document.createElement('div')
    new_element.innerText = `${arr[i]}`
    new_element.style.backgroundColor = `${colors[arr[i]]}`
    new_element.style.backgroundImage = `-webkit-linear-gradient(left, ${colors[arr[i]]}, ${colors[arr[i]]} 5%, transparent 5%, transparent 100%)`
    new_element.className = 'cubeWidth'
    item.appendChild(new_element)
  }
}

function shuffle(){
  let arr=random()
  create(arr)
}

function sort(){
  let arr=random()
  create(arr.sort())
}
