const express = require('express');
const Mineral = require('../Models/Mineral');
const router = express.Router();

router.get('/', async(req, res) => {
    try{
        res.json(await Mineral.find({}))
    } catch(error){
        console.log("GET Request Error:", error)
    }
})

router.post('/', async(req, res) => {
    try{
        res.json(await Mineral.create(req.body))
    } catch(error){
        console.log("POST Request Error:", error)
    }
})

router.get('/:id', async(req, res) => {
    try{
        res.json(await Mineral.findById(req.params.id))
    } catch(error){
        console.log("GET Request Error:", error)
    }
})

// router.put('/', async(req, res) =>{
//     res.json({message: "PUT"})
// })

// router.delete('/', async(req, res) =>{
//     res.json({message: "DELETE"})
// })

module.exports = router;