//数据库操作模块
const db=require('../tools/db_config');
//验证邮箱
const checkEmail=function(email,callback){
    const sqlstr='select * from `users` where email=?';
    db.query(sqlstr,email,(err,data)=>{
        if(err) return callback(err);
        callback(null,data);
    })
}
//验证昵称
const checkNickName=(nickname,callback)=>{
    const sqlStr='select * from `users` where nickname=?';
    db.query(sqlStr,nickname,(err,data)=>{
        if(err){
            return callback(err);
        }
        callback(null,data);
    })
}
//添加新用户
const addUser=(body,callback)=>{
    const sqlStr='INSERT INTO `users` SET ?';
    db.query(sqlStr,body,(err,data)=>{
        if(err){
            return callback(err);
        }
        callback(null,data);
    })
}
exports.checkEmail=checkEmail;
exports.checkNickName=checkNickName;
exports.addUser=addUser;