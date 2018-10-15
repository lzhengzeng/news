//导包
const express=require('express');
const bodyParser=require('body-parser');
const router=require('./router');
//实例化对象
var app=express();
//配置包
app.engine('html', require('express-art-template'));
app.use(bodyParser.urlencoded({
    extended: false
}));
//处理静态资源
app.use('/public',express.static('./public'))
app.use('/node_modules',express.static('./node_modules'))
//挂载路由
app.use(router);
//监听端口
app.listen(8080,()=>{
    console.log('开始监听端口')
})
