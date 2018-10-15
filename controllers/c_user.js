//导入
const m_user=require('../models/m_user')
const showSignin=(req,res)=>{
    res.render('signin.html');
};
const handleSignin=(req,res)=>{
    const body=req.body;
    m_user.checkEmail(body.email,(err,data)=>{
        if(err) return res.send({
            code:500,
            message:'服务器错误'
        })
        //邮箱不存在
        if(!data[0]) return res.send({
                code: 1,
                message: '邮箱不存在'
            })
        // 邮箱存在，验证密码
        if (body.password != data[0].password) return res.send({
                code: 2,
                message: '密码错误'
            })
        res.send({
            code: 200,
            message: '可以跳转了'
        })
    })
}
//导出
exports.showSignin=showSignin;
exports.handleSignin=handleSignin;