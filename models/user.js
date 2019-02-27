/*
    Copyright: Ilya Tvaliashvili
    VK: vk.com/ilyfo
    Please before using contact us!
*/

const db = require('../db')

exports.all = (cb) => {
    db.get().collection('users').find().toArray((err, docs) => {
        cb(err, docs)
    })
}

exports.add = (item, cb) => {
    db.get().collection('users').insert(item, (err, result) => {
        cb(err, result)
    })
}

