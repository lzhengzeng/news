//导入
const m_user=require('../models/m_user')

const showSignin=(req,res)=>{
    res.render('signin.html');
};
const handleSignin=(req,res,next)=>{
    const body=req.body;
    m_user.checkEmail(body.email,(err,data)=>{
        if(err) return next(err);
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
        req.session.user=data[0]
        // console.log(req.session.user)
        res.send({
            code: 200,
            message: '可以跳转了'
        })
    })
}
//退出功能
const singout=(req,res)=>{
    delete req.session.user;

    // 跳转到用户登录页
    res.redirect('/signin');
}
//注册页面
const showSingup=(req,res)=>{
    res.render('signup.html');
}
//注册页面实现
const handleSingup=(req,res,next)=>{
    //获取发送的数据
    const body=req.body;
    // console.log(body)
    //先校验邮箱，再校验用户名和密码
    m_user.checkEmail(body.email,(err,data)=>{
        if(err) return next(err);
        if(data[0]){
            return res.send({
            code:1,
            message:'邮箱已存在'
            })
        }
        //再验证昵称
        m_user.checkNickName(body.nickname,(err,data)=>{
            if(err) return next(err);
            if(data[0]){
                return res.send({
                    code:2,
                    message:'昵称已经存在'
                })
            }
        })
        //可以添加新用户了
        m_user.addUser(body,(err,data)=>{
            if(err) return next(err);
            res.send({
                code:200,
                message:'添加成功'
            })
        })
    })
}
//导出
exports.showSignin=showSignin;
exports.handleSignin=handleSignin;
exports.singout=singout;
exports.showSingup=showSingup;
exports.handleSingup=handleSingup;