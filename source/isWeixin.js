// 是否为微信浏览器
const isWeixin = {
  test: () => {
    const u = navigator.userAgent
    return u.match(/MicroMessenger/i) == 'micromessenger'
  }
}
export default isWeixin