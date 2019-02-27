/*
    Copyright: Ilya Tvaliashvili
    VK: vk.com/ilyfo
    Please before using contact us!
*/

const items = require('../models/user')

exports.add = (req, res) => {
    let yn = true
    let user = req.body
    let all = items.all()
    all.map((item, index) => {
        if(item.login == user.login.toString().trim()){
            yn = false
        }
    })
    if(yn){
        items.add({
            login: req.body.login,
            pass: req.body.pass,
        }, (err, result) => {
            if(err) {
                console.log(err)
                return res.sendStatus(500)
            }
            res.sendStatus(200)
        })
    }
    else {
        res.send('exist')
    }
}