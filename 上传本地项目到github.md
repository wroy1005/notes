步骤
+ 创建github用户，并建立仓库（webpack-demo）
+ 安装git客户端（或者cmder）
+ 绑定账户
git config --global user.name "xxx"
git config --global user.email "xxx@xxx"
+ 为账户设置SSH key
ssh-keygen -t ras -C "xxx@xxx"
将id_rsa.pub文件中的内容粘贴到github账户>setting>SSH keys
+ 在本地项目中
git init 
git add .
git commit -m "init"
+ 关联远程仓库
git remote add origin git@github.com:xxx/webpack-demo.git
git push -u origin master
