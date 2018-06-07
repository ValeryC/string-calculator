const stringCalculator = require('./string-calculator.js')

test('empty string', () => {
  const result = stringCalculator.add("")
  expect(result).toBe(0)
})

test('add 1', () => {
  const result = stringCalculator.add('1')
  expect(result).toBe(1)
})

test('sum', () => {
  const result = stringCalculator.add('1,2')
  expect(result).toBe(3)
})

test('sum more', () => {
  const result = stringCalculator.add('1,2,3')
  expect(result).toBe(6)
})

test('sum more more', () => {
  const result = stringCalculator.add('1,2,3,4,5,6')
  expect(result).toBe(21)
})
