//导包
const express=require('express');
const c_user=require('./controllers/c_user');
const c_topic=require('./controllers/c_topic')
//实例化对象
const router=express.Router();
//路由分发
//登陆页
router.get('/signin',c_user.showSignin);
//登陆表单验证
router.post('/signin',c_user.handleSignin);
//话题页
router.get('/',c_topic.showTopic);
//导出路由对象
module.exports=router;
