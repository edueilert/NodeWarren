class UserController {

    handle(req, res, next) {
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