const User = require('../models/user.model')
const crypto = require('crypto');
const {createUserValidator, updateUserValidator} = require('../validators/user.validator');


async function getAll(req, res){
    try {
        const users = await User.find();
        res.send(users)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

async function getById(req, res){
    const { userId } = req.params;
    try {
        const user = await User.findById(userId);
        if(!user){
           return res.status(404).json({message: 'User Not Found'})
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

async function create(req, res){
    const {error} = createUserValidator.validate(req.body);
    if(error){
       return res.status(400).json({error: error.details[0].message, message: 'Bad Request'})
    }
    let userData = req.body;
    const { password } = userData;

    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');

    userData = Object.assign(userData, {password: hash, salt});
    try {
        const newUser = await User.create(userData);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

async function updateById(req, res){
    const updatedData = req.body;
    const { error } = updateUserValidator.validate(updatedData);
    if(error){
        return res.status(400).json({error: error.details[0].message, message: 'Bad Request'})
    }
    const {userId} = req.params;
    
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, updatedData);
        if(!updatedData){
            return res.status(404).json({message: 'User Not Found'});
        }
        res.json(updatedUser)
        
    } catch (error) {
        res.status(500).json({error: error.message});
    } 
}

async function deleteById(req, res){
    const {userId } = req.params;
    try {
        const deletedUser = await User.findByIdAndDelete(userId);
        if(!deletedUser){
            return res.status(404).json({message: 'User Not Found'})
        }
        res.json({message: 'User Deleted Successfully'})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

try {
    
    module.exports = {
        getAll,
        getById,
        create,
        updateById,
        deleteById
    }
} catch (error) {
    console.log(console.error)
}