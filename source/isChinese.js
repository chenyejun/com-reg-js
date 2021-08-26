const pattern = /^[\u4e00-\u9fa5]+$/
const isChinese = {
  test: (value) => {
    return pattern.test(value)
  },
  pattern
}
export default isChinese