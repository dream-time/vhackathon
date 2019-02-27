/*
    Copyright: Ilya Tvaliashvili
    VK: vk.com/ilyfo
    Please before using contact us!
*/

const items = require('../models/user')
const md5 = require('js-md5');

exports.addUser = (req, res) => {
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
                pass: md5(req.body.pass.toString().trim()),
                type: req.body.type
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
        var yn = false
        let user = req.body
        if(err){
             return res.sendStatus(500)
        }
        docs.map((item, index) => {
            console.log(item.login.toString().trim(),user.login.toString().trim())
            if(item.login.toString().trim() == user.login.toString().trim()){
                if(item.pass.toString().trim() == md5(user.pass.toString().trim())){
                    yn = true
                }
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