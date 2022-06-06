class AllUserController {

    handle(req, res, next) {
        res.send({
            name:req.body.name, 
            email:req.body.email,
            emailC:req.body.emailC, 
            cpf:req.body.cpf, 
            celphone:req.body.celphone,
            nascimento:req.body.nascimento,
            whatsapp:req.body.whatsapp,
            emailsms:req.body.emailsms,
            pais:req.body.pais,
            cidade:req.body.cidade,
            cep:req.body.cep,
            endereco:req.body.endereco,
            numero:req.body.numero
        });
    }
}

module.exports = new AllUserController();