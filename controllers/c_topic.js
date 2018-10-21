//引入文件
const m_topic=require('../models/m_topic');
const moment =require('moment');
exports.showTopic = (req, res,next) => {
    //用models模块来获取数据
    m_topic.findAllTopic((err,data)=>{
        if(err)  return next(err);
            // console.log(data)
        res.render('index.html',{
            topics:data,
            user:req.session.user
        })
    })
    
};
exports.showTopicDtil=(req,res,next)=>{
 res.render('topic/create.html');
}
//添加到数据库
exports.addTopic=(req,res)=>{
    //先获取post发送的数据
    const body=req.body;
    body.createdAt = moment().format();
    body.userId=req.session.user.id;
    m_topic.addTopicdetil(body,(err,data)=>{
        if(err) return next(err);
        res.send({
            code:200,
            message:'添加成功'
        })
    })
}
//渲染话题详情页
exports.showDetial=(req,res,next)=>{
    // res.render('topic/show.html')
    // console.log(req.params)
    const topicId=req.params.topicId;
    m_topic.findTopc(topicId,(err,data)=>{
        if(err) return next(err);
        res.render('topic/show.html',{
            topic: data[0],
            sessionId:req.session.user.id
        })
    })
}
//先渲染话题详情编辑页
exports.showTopicEdit=(req,res,next)=>{
    //根据id来查对应文章的信息
    
    const topicIdEdit=req.params.topicIdEdit;
    m_topic.findTopc(topicIdEdit,(err,data)=>{
        if(err) return next(err);
        res.render('topic/edit.html',{
            topic:data[0]
        });
    })
}
//编辑页面提交
exports.topicEdit=(req,res,next)=>{
    //获取作者id和文章内容，然后数据库操作
    const topicId=req.params.editID;
    // console.log(topicId)
    const body=req.body;
    m_topic.updataTopic(body,topicId,(err,data)=>{
        if(err) return next(err);
        res.send({
            code:200,
            message:'添加成功'
        })
    })
}
//删除编辑页
exports.delEdit=(req,res,next)=>{
    const deleteId=req.params.deleteTopic;
    m_topic.deleteupdataTopic(deleteId,(err,data)=>{
        if(err) return next(err);
        res.send({
            code:200,
            message:'删除成功'
        })
    })
}
