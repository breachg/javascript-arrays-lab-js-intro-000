var kittens = ['Milo', 'Otis', 'Garfield'] //define your array here

// Add your functions and code here
function destructivelyAppendKitten (name) {
  kittens.push(name)
}

function destructivelyPrependKitten (name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten () {
  kittens.pop(2)
}

function destructivelyRemoveFirstKitten () {
  kittens.shift(0)
}

function appendKitten(name) {
  newKittens = [...kittens, name]
  return newKittens
}

function prependKitten(name) {
  kittens = [name, ...kittens]
  return kittens
}
