# vue-electron-demo
## electron套壳vue项目demo

### 安装依赖
```
npm install
```

### 开发调试
1. 起一个web服务
```
npm run serve
```
2. 修改`background.js`文件中的 *loadURL* 方法参数，或者执行`npm run build`后使用 *loadFile* 方法
3. 打开electron开发环境应用
```
npm run start
```

<img src=./public/WX20230526-172101@2x.png>

### 编译打包vue代码为原生html,css,js
```
npm run build
```

### 打包electron应用

> 打包前记得修改`background.js`文件中的 *loadURL* 或 *loadFile* 方法
```
npm run make
```

