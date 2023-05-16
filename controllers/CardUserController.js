const Card = require('../models/Card')
const User = require('../models/User')
const bcrypt = require('bcryptjs')

module.exports = class CardUserController {

    static showCardUser(req, res) {

        res.render('user/cardUser')
    }

    static async updateCardUser(req, res){
        const id = req.params.id

        console.log('ID: ' + id)

        const cardUser = await Card.findOne({ where: { UserId : id}, raw: true })

        console.log('CardUser: ' + JSON.stringify(cardUser))

        res.render('user/cardUser', { cardUser })
    }

    static async updateCardUserSave(req, res){
        const id = req.body.id
        const UserId = req.body.userId

        //console.log('Dados' + JSON.stringify(req.body))

        const cardUserDate = {
            cor: req.body.cor,
            name: req.body.nome,
            profissao: req.body.profissao,
            phone: req.body.phone,
            email: req.body.email,
            whatsapp: req.body.whatsapp,
            image: req.body.hiddenArquivo,
        }

        try {
            await Card.update(cardUserDate, {where: { id: id }})

            req.flash('message', 'Dados do cartão atualizado com sucesso!')

            req.session.save(() => {
                res.redirect(`/cardUser/${UserId}`)
            })
        } catch (error) {
            console.log('Aconteceu um erro: ' + error)
        }

    }

    static async updateCardUserSaveD(req, res){
        const id = req.body.id
        const UserId = req.body.userId

        //console.log('Dados' + JSON.stringify(req.body))

        const cardUserDate = {
            site: req.body.site,
            youtube: req.body.youtube,
            instagram: req.body.instagram,
            linkedin: req.body.linkedin,
        }

        try {
            await Card.update(cardUserDate, {where: { id: id }})

            req.flash('message', 'Dados do cartão atualizado com sucesso!')

            req.session.save(() => {
                res.redirect(`/cardUser/${UserId}`)
            })
        } catch (error) {
            console.log('Aconteceu um erro: ' + error)
        }

    }


    static loginQrCode(req, res) {
        const id = req.params.id

        console.log(id)

        res.render('user/loginQrCodes', {id})
    }

    static async loginQrCodePost(req, res) {
        const {userLogin, password, id } = req.body

        

        // find user
        const userReturn = await User.findOne({where: {userName: userLogin}})

        if (!userReturn) {
            req.flash('message', 'Usuário não encontrado!')
            res.render('user/loginQrCodes', {id})

            return
        }

        // check if password match
        const passwordMatch = bcrypt.compareSync(password, userReturn.password)

        if (!passwordMatch) {
            req.flash('message', 'Senha invalida!')
            rres.render('user/loginQrCodes', {id})

            return
        }

        const userCard = await Card.findOne({where: {UserId: userReturn.id }})

        console.log('Card: ' + userCard.UserId + userReturn.id)
        
        if(userCard.UserId){
            req.flash('message', 'Usuario já vinculado a um cartão!')
            res.render('user/loginQrCodes', {id})

            return
        }
        // initialize session
        req.session.userid = userReturn.id

        const cardUserDate = {
            UserId: userReturn.id
        }
        

        try {
            await Card.update(cardUserDate, {where: { codeCard: id }})

            req.flash('message', 'Dados do cartão atualizado com sucesso!')

            req.session.save(() => {
                res.redirect(`/cardUser/${userReturn.id}`)
            })
        } catch (error) {
            console.log('Aconteceu um erro: ' + error)
        }

        // req.session.save(() => {
        //     res.redirect('/')
        // })
    }

}