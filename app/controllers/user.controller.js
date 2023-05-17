const User = require('../models/user.model')

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
    const userData = req.body;
    try {
        const newUser = await User.create(userData);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

async function updateById(req, res){
    const {id} = req.params;
    const updatedData = req.body;
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
    const {id } = rq.params;
    try {
        const deletedUser = await User.findByIdAndDelete(id);
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