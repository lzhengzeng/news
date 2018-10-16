//导入数据库配置文件
const db=require('../tools/db_config');
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
//导出
exports.findAllTopic=findAllTopic;
exports.addTopicdetil=addTopicdetil;
exports.findTopc=findTopc;
