
### 常用js正则集合库
1. 安装依赖
```
npm i com-reg-js -S
```
2. 使用
```
import { isNumber } from 'com-reg-js';
console.log(isNumber.test(123)); // true
console.log(isNumber.pattern); // 输出正则: /^[0-9]*$/

```

模块名 | 作用
---|---
isAndroid | 是否为安卓系统
isCarNumber | 是否为车牌号码
isChinese | 验证是否为中文
isColorHex | 验证是否为16进制颜色（#ffffff）
isDouble | 是否双精度浮点数
isEmail | 是否为邮箱
isHttpLink | 是否为http/https链接
isIdCard | 是否为身份证
isImage | 是否为图片
isInteger | 是否为整数，包括正整数和负整数
isIos | 是否为ios系统
isIPad | 是否为iPad
isIpv4 | 是否为IPv4地址
isLetter | 是否为字母，包含大小写
isLowerLetter | 是否为小写字母
isUpperLetter | 是否为大写字母
isMoney | 是否为金额，最多两位小数
isMobileNumber | 是否为手机号码
isNumber | 是否为数字
isNumberAndLetter | 是否为数字与字母混合
isPc | 是否为电脑PC浏览器
isPostalCode | 是否为邮政编码
isQQNumber | 是否为QQ号码
isTelephoneNumber | 是否为电话号码
isWeixin | 是否为微信浏览器
isWeixinNumber | 是否为微信号
isXml | 是否为xml文件


