// Bring in our fruit data
const fruits = require('../models/fruits')

const Fruit = require('../models/Fruit')

// GET /fruits
module.exports.index = async (req, res) => {
    let fruits;

    try {
        fruits = await Fruit.find()
        console.log(fruits)
    } catch(err) {
        console.log('Failed to create a Fruit document: ', err)
    }

    console.log(fruits)
    res.render('fruits/Index', { fruits })
}

//  GET /fruits/:id
module.exports.show = async (req, res) => {
    console.log('GET /fruits/:id')
    let fruit; 

    try {
        fruit = await Fruit.findById(req.params.id)
        console.log(fruit)
    } catch(err) {
        console.log('Failed to find Fruit document with id ' + req.params.id, err)
    }
    

    if (fruit) {
        res.render('fruits/Show', { fruit })
    } else {
        res.redirect('/fruits')
    }
}

//  GET /fruits/new
module.exports.new = (req, res) => {
    res.render('fruits/New')
}

//  GET /fruits/:indexOfFruit/edit
module.exports.edit = (req, res) => {
    res.render('fruits/Edit', { fruit: fruits[req.params.indexOfFruit], index: req.params.indexOfFruit })
}

// POST /fruits
module.exports.create = async (req, res) => {
    console.log('POST /fruits')
    console.log(req.body) // <-- should contain form data


    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    try{
        const newFruit = await Fruit.create(req.body)
        console.log(newFruit)
    }catch(err) {
        console.log('mongoCreateError: ', err)
    }
    res.redirect('/fruits')
}

// DELETE /fruits/:indexOfFruit
module.exports.destroy = (req, res) => {
    console.log('DELETE /fruits/:indexOfFruit')
    // fruits.findIndex((fruit, index) => index == req.params.indexOfFruit)
    let index = Number(req.params.indexOfFruit)
    fruits.splice(index, 1)
    res.redirect('/fruits')
}

// PUT /fruits/:indexOfFruit
module.exports.update = (req, res) => {
    console.log('PUT /fruits/:indexOfFruit')
    
    if (req.body.readyToEat === 'on') {
        req.body.readyToEat = true
    } else {
        req.body.readyToEat = false
    }
    
    fruits[req.params.indexOfFruit] = req.body

    res.redirect('/fruits')
}