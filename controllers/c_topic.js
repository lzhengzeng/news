//引入文件
const m_topic=require('../models/m_topic');
const moment =require('moment');
exports.showTopic = (req, res) => {
    //用models模块来获取数据
    m_topic.findAllTopic((err,data)=>{
        if(err) return res.send({
                code:500,
                message:'服务器宕机，把后台拉出去祭天'
            }) 
            // console.log(data)
        res.render('index.html',{
            topics:data,
            user:req.session.user
        })
    })
    
};
exports.showTopicDtil=(req,res)=>{
 res.render('topic/create.html');
}
//添加到数据库
exports.addTopic=(req,res)=>{
    //先获取post发送的数据
    const body=req.body;
    body.createdAt = moment().format();
    body.userId=req.session.user.id;
    m_topic.addTopicdetil(body,(err,data)=>{
        if(err) return ({
            code:500,
            message:'服务器错误'
        })
        res.send({
            code:200,
            message:'添加成功'
        })
    })
}
//渲染话题详情页
exports.showDetial=(req,res)=>{
    // res.render('topic/show.html')
    // console.log(req.params)
    const topicId=req.params.topicId;
    m_topic.findTopc(topicId,(err,data)=>{
        if(err) {
            return res.send({
            code:500,
            message:'服务器出错了'
        })
    }
        res.render('topic/show.html',{
            topic: data[0]  
        })
    })
}
