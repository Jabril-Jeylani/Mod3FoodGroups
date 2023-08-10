const express = require('express')

// Create our router
const router = express.Router()

// Bring in our controller logic
const meatController = require('../controllers/meatController')

// I.N.D.U.C.E.S (Index, New, Destroy, Update, Create, Edit, Show)

// "index" route      //   localhost:8080/fruits/
router.get('/', meatController.index)

// "new" route
router.get('/new', meatController.new)

// "destroy" route
router.delete('/:indexOfMeat', meatController.destroy)

// "update" route
router.put('/:indexOfMeat', meatController.update)

// "create" route
router.post('/', meatController.create)

// "edit" route
router.get('/:indexOfMeat/edit', meatController.edit)

// "show" route      //   localhost:8080/fruits/:indexOfMeat
router.get('/:indexOfMeat', meatController.show)

module.exports = router