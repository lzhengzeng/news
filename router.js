//导包
const express=require('express');
const c_user=require('./controllers/c_user');
const c_topic=require('./controllers/c_topic')
//实例化对象
const router=express.Router();
//路由分发
//登陆页
router.get('/signin',c_user.showSignin)
    //登陆表单验证
    .post('/signin',c_user.handleSignin)
    //话题页
    .get('/',c_topic.showTopic)
    //话题详情页
    .get('/topic/create',c_topic.showTopicDtil)
    //添加到数据库
    .post('/addTopic',c_topic.addTopic)
    //退出功能实现
    .get('/signout',c_user.singout)
    //渲染话题详情页
    .get('/topic/:topicId',c_topic.showDetial)
//导出路由对象
module.exports=router;
