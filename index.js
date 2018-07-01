var recipes = {
  eggs: 3,
  flour: '1 cup'
}

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  [key]value
}

function deleteFromObjectByKey(object, key) {
  
}

function destructivelyDeleteFromObjectByKey(object, key) {
  
}