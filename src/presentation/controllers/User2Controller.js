class User2Controller {

    handle(req, res, next) {
        res.send({
            pais:req.body.pais,
            cidade:req.body.cidade,
            cep:req.body.cep,
            endereco:req.body.endereco,
            numero:req.body.numero
                       
        });
    }
}

module.exports = new User2Controller();