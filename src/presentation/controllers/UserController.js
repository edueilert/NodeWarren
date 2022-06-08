const UserService = require("../../domain/user/services/UserService")
class UserController {

    handle(req, res, next) {
        const {body} = req
        UserService.createUser(body)

            res.send({
            name:req.body.name, 
            email:req.body.email,
            emailC:req.body.emailC, 
            cpf:req.body.cpf, 
            celphone:req.body.celphone,
            nascimento:req.body.nascimento,
            whatsapp:req.body.whatsapp,
            emailsms:req.body.emailsms
        });
    }
}

module.exports = new UserController();