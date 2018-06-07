const reducer = (a,b) =>{
  return a + b
} 

const add = numbers => {

  const arrNumbers = numbers
    .split(',')
    .map(Number)   
    .reduce(reducer)

  return arrNumbers
}

module.exports = {
  add,
}

