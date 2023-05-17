const express = require('express');
const userController = require('../controllers/user.controller')

const router = express.Router();

router.get('getAll', userController.getAll)

router.get('getById/:id', userController.getById)

router.post('/create', userController.create)

router.put('updateById/:id', userController.updateById)

router.delete('deleteById/:id',userController.deleteById)


module.exports = router;