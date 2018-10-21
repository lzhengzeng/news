//导包
const express=require('express');
const bodyParser=require('body-parser');
const router=require('./router');
const session = require('express-session')
const MySQLStore =require('express-mysql-session')(session);
//实例化对象
var app=express();
//配置包
const options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'news51'
};
const sessionStore = new MySQLStore(options);
app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: false,
    saveUninitialized: false
}));
app.engine('html', require('express-art-template'));
app.use(bodyParser.urlencoded({
    extended: false
}));
//处理静态资源
app.use('/public',express.static('./public'))
app.use('/node_modules',express.static('./node_modules'))
//先解决用户登陆问题
app.use((req, res, next) => {
    app.locals.sessionUser = req.session.user;
    // next()千万要调用!
    next();
});
//挂载路由
app.use(router);
//处理友好的404页面
app.use((req, res, next) => {
    res.render('404.html');
    next();
});
// 统一处理错误的中间件
app.use((err, req, res, next) => {
    res.send({
        code: 500,
        message: err.message
    })
});
//监听端口
app.listen(8080,()=>{
    console.log('开始监听端口')
})
