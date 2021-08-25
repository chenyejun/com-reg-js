const pattern = /^[0-9]*$/g
const isNumber = {
  test: (value) => {
    return pattern.test(value)
  },
  pattern
}
export default isNumber