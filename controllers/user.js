/*
    Copyright: Ilya Tvaliashvili
    VK: vk.com/ilyfo
    Please before using contact us!
*/

const items = require('../models/user')

exports.add = (req, res) => {
    let yn = true
    let user = req.body
    var alls;
    items.all((err, docs) => {
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
                res.sendStatus(200)
            })
        }
        else {
            res.send('exist')
        }
    })
    console.log(alls)
   
}