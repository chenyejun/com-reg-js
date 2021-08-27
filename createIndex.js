const glob = require('glob')
const fs = require('fs')
glob("./source/*", (er, files) => {
  const jsFileNameList = files.reduce((arr, path) => {
    if (path.includes('.js')) {
      arr.push(path.split('source/')[1].replace('.js', ''))
    }
    return arr
  }, [])
  createTs(jsFileNameList)
  createIndexJs(jsFileNameList)
})

// 生成index.d.ts文件
function createTs(jsFileNameList) {
  let content = ``
  jsFileNameList.forEach(fileName => {
    content += `export const ${fileName}: any\n`
  })
  fs.writeFileSync('./index.d.ts', content, "utf8")
}
// 生成index.js文件
function createIndexJs(jsFileNameList) {
  let content = ``
  let importContent = ``
  let exportContent = ``
  jsFileNameList.forEach(fileName => {
    importContent += `import ${fileName} from './source/${fileName}'\n`
    exportContent += `  ${fileName},\n`
  })
  content = ` ${importContent}export default {\n${exportContent}}`
  fs.writeFileSync('./index.js', content, "utf8")
}