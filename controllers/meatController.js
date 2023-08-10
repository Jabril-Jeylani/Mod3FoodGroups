// Bring in our meat data
const meats = require('../models/meats')

// GET /meats
module.exports.index = (req, res) => {
    res.render('meats/Index', { meats })
}

//  GET /meats/:indexOfMeats
module.exports.show = (req, res) => {
    console.log('GET /meats/:indexOfMeats')
    if (meats[req.params.indexOfMeat]) {
        res.render('meats/Show', { meat: meats[req.params.indexOfMeat], index: req.params.indexOfMeat })
    } else {
        res.redirect('/meats')
    }
}

//  GET /meats/new
module.exports.new = (req, res) => {
    res.render('meats/New')
}

//  GET /meats/:indexOfMeat/edit
module.exports.edit = (req, res) => {
    res.render('meats/Edit', { meat: meats[req.params.indexOfMeat], index: req.params.indexOfMeat })
}

// POST /meats
module.exports.create = (req, res) => {
    console.log('POST /meats')
    console.log(req.body) // <-- should contain form data
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    meats.push(req.body)
    res.redirect('/meats')
}

// DELETE /meats/:indexOfMeat
module.exports.destroy = (req, res) => {
    console.log('DELETE /meats/:indexOfMeat')
    // meats.findIndex((meat, index) => index == req.params.indexOfMeat)
    let index = Number(req.params.indexOfMeat)
    meats.splice(index, 1)
    res.redirect('/meats')
}

// PUT /meats/:indexOfMeat
module.exports.update = (req, res) => {
    console.log('PUT /meats/:indexOfMeat')
    
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    
    meats[req.params.indexOfMeat] = req.body

    res.redirect('/meats')
}