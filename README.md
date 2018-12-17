# meituan

## 说明

> 基于 react + antd 的高仿美团页面，实现了[手机App]、[切换城市]两个按钮跳转的页面。

## 技术选型

技术 | 说明 | 链接
----|----|----
react | 前端框架 | [https://reactjs.org/](https://reactjs.org/)
react-router | 路由框架 | [http://react-guide.github.io/react-router-cn/docs/API.html](http://react-guide.github.io/react-router-cn/docs/API.html)
create-react-app | 脚手架 | [https://www.npmjs.com/package/create-react-app](https://www.npmjs.com/package/create-react-app)
antd | 前端UI框架 | [https://ant.design/index-cn](https://ant.design/index-cn)
yarn | 包管理器 | [https://yarn.bootcss.com/](https://yarn.bootcss.com/)
axios | 前端HTTP框架 | [https://github.com/axios/axios](https://github.com/axios/axios)
json-server | Node模块 | [https://www.npmjs.com/package/json-server](https://www.npmjs.com/package/json-server)

## 开发环境
- 操作系统 windows 7 + nodeJs

### 项目布局
```美团
node_modules --node模块
public
├── index.html -- 主页面
└── manifest.json -- 配置文件，代码执行源头
src -- 源码目录
├── api -- axios网络请求定义
├── components -- 通用组件封装
├── images -- 静态图片资源文件
├── mainPage -- 路由指定页面
├── RouteMap -- react-router路由配置
├── App.js -- 
├── index.js -- 
├── config-overrides.js -- 配置antd按需加载
└── package.json -- 定义所需模块、项目配置信息
```

## 搭建步骤

- 克隆源代码到本地;
- cmd 进入src/api, 运行命令 json-server --watch --port 8090 area.json
- 运行命令：yarn start,访问地址：[http://localhost:5020](http://localhost:5020) 即可访问高仿美团页面。