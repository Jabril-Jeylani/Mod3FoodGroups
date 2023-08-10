const express = require('express')

// Create our router
const router = express.Router()

// Bring in our controller logic
const vegetableController = require('../controllers/vegetableController')

// I.N.D.U.C.E.S (Index, New, Destroy, Update, Create, Edit, Show)

// "index" route      //   localhost:8080/fruits/
router.get('/', vegetableController.index)

// "new" route
router.get('/new', vegetableController.new)

// "destroy" route
router.delete('/:indexOfVegetable', vegetableController.destroy)

// "update" route
router.put('/:indexOfVegetable', vegetableController.update)

// "create" route
router.post('/', vegetableController.create)

// "edit" route
router.get('/:indexOfVegetable/edit', vegetableController.edit)

// "show" route      //   localhost:8080/fruits/:indexOfVegetable
router.get('/:indexOfVegetable', vegetableController.show)

module.exports = router