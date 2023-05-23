const express = require('express');
const userController = require('../controllers/user.controller')

const router = express.Router();

router.get('/getAll', userController.getAll)

router.get('/getById/:userId', userController.getById)

router.post('/create', userController.create)

router.put('/updateById/:userId', userController.updateById)

router.delete('/deleteById/:userId',userController.deleteById)


module.exports = router;