/*
    Copyright: Ilya Tvaliashvili
    VK: vk.com/ilyfo
    Please before using contact us!
*/

const items = require('../models/user')

exports.add = (req, res) => {
    items.all((err, docs) => {
        var yn = true
        let user = req.body
        if(err){
             return res.sendStatus(500)
        }
        docs.map((item, index) => {
            console.log(item.login.toString().trim(),user.login.toString().trim())
            if(item.login.toString().trim() == user.login.toString().trim()){
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
                return res.sendStatus(200)
            })
        }
        else {
            return res.send('exist')
        }
    })
}

exports.login = (req, res) => {
    const user = req.body
    items.all((err, docs) => {
        var yn = true
        let user = req.body
        if(err){
             return res.sendStatus(500)
        }
        docs.map((item, index) => {
            console.log(item.login.toString().trim(),user.login.toString().trim())
            if(item.login.toString().trim() == user.login.toString().trim()){
                yn = false
            }
        })
        if(yn){
            return res.send('loginned')
        }
        else {
            return res.send('error')
        }
    })
}