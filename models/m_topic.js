//导入数据库配置文件
const db=require('../tools/db_config');
//获取话题页信息
const findAllTopic=(callback)=>{
const sqlStr=`select * from topics order by id desc`
//执行sql语句
db.query(sqlStr,(err,data)=>{
    if(err){
    callback(err)
    }
    callback(null,data)
})
}
const addTopicdetil=(body,callback)=>{
    const sqlStr=`insert into topics set ?`
    //执行sql语句
    db.query(sqlStr,body,(err,data)=>{
        if(err){
        callback(err)
        }
        callback(null,data)
    })
    }
//获取话题详情页
const findTopc=(topid,callback)=>{
    const sqlStr='SELECT *FROM `topics` WHERE id = ?';
    //执行sql语句
    db.query(sqlStr,topid,(err,data)=>{
        if(err){
        return callback(err)
        }
        callback(null,data)
    })
}
//话题编辑页
const updataTopic=(body,id,callback)=>{
    
const sqlStr='update topics set `title`= ? ,`content`= ? where `id`= ?';
db.query(sqlStr,[
    body.title,
    body.content,
    id
],(err,data)=>{
    if(err){
    return callback(err)
    }
    callback(null,data)
})
console.log(sqlStr)
}
//删除文章
const deleteupdataTopic=(id,callback)=>{
const sqlStr='delete from topics where id=?';
console.log(sqlStr)
db.query(sqlStr,id,(err,data)=>{
    if(err){
    return callback(err)
    }
    callback(null,data)
})
}
//导出
exports.findAllTopic=findAllTopic;
exports.addTopicdetil=addTopicdetil;
exports.findTopc=findTopc;
exports.updataTopic=updataTopic;
exports.deleteupdataTopic=deleteupdataTopic;
