/*
    Copyright: Ilya Tvaliashvili
    VK: vk.com/ilyfo
    Please before using contact us!
*/

const lkr = require('../models/lkr') 

exports.getLkr = (req, res) => {
    lkr.all((err, docs) => {
        let lkrs = req.body
        if(err) {
            return res.sendStatus(500)
        }
        let itm = undefined
        docs.map((item, index) => {
            if(item.name.toString().trim() == lkrs.name.toString().trim()){
                itm = item
            }
        })
        return itm ? res.send(JSON.stringify(itm)) : 'error'
    })
}

exports.addLkr = (req, res) => {
    lkr.all((err, docs) => {
        let lkrs = req.body
        if(err) {
            return res.sendStatus(500)
        }
        let itm = true
        docs.map((item, index) => {
            if(item.name.toString().trim() == lkrs.name.toString().trim()){
                itm = false
            }
        })
        if(itm){
            lkr.add(lkrs, (err, result) => {
                if(err){
                    return res.sendStatus(500)
                }
                else {
                    return res.sendStatus(200)
                }
            })
        }
        else {
            res.send('exist')
        }
    })
}