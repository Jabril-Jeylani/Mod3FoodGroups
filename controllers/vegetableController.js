// Bring in our vegetable datafruits
const vegetables = require('../models/vegetables')

// GET /vegetables
module.exports.index = (req, res) => {
    res.render('vegetables/Index', { vegetables })
}

//  GET /vegetables/:indexOfMeats
module.exports.show = (req, res) => {
    console.log('GET /vegetables/:indexOfMeats')
    if (vegetables[req.params.indexOfVegetable]) {
        res.render('vegetables/Show', { vegetable: vegetables[req.params.indexOfVegetable], index: req.params.indexOfVegetable })
    } else {
        res.redirect('/vegetables')
    }
}

//  GET /vegetables/new
module.exports.new = (req, res) => {
    res.render('vegetables/New')
}

//  GET /vegetables/:indexOfVegetable/edit
module.exports.edit = (req, res) => {
    res.render('vegetables/Edit', { vegetable: vegetables[req.params.indexOfVegetable], 
        index: req.params.indexOfVegetable })
}

// POST /vegetables
module.exports.create = (req, res) => {
    console.log('POST /vegetables')
    console.log(req.body) // <-- should contain form data
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    vegetables.push(req.body)
    res.redirect('/vegetables')
}

// DELETE /vegetables/:indexOfVegetable
module.exports.destroy = (req, res) => {
    console.log('DELETE /vegetables/:indexOfVegetable')
    // vegetables.findIndex((vegetable, index) => index == req.params.indexOfVegetable)
    let index = Number(req.params.indexOfVegetable)
    vegetables.splice(index, 1)
    res.redirect('/vegetables')
}

// PUT /vegetables/:indexOfVegetable
module.exports.update = (req, res) => {
    console.log('PUT /vegetables/:indexOfVegetable')
    
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    
    vegetables[req.params.indexOfVegetable] = req.body

    res.redirect('/vegetables')
}