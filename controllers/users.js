module.exports = class users{

    index(req,res){
        res.render("index")
    }
    viewLoginPage(req,res){
        res.render("login")
    }
    viewRegisterPage(req,res){
        res.render("register")
    }
    processLogoff(req,res){
        res.render("logoff")
    }
}