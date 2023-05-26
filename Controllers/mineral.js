const express = require('express');
const Mineral = require('../Models/Mineral');
const router = express.Router();

router.get('/', async(req, res) =>{
    res.json({message: "GET"})
})

router.post('/', async(req, res) =>{
    res.json({message: "POST"})
})

// router.put('/', async(req, res) =>{
//     res.json({message: "PUT"})
// })

// router.delete('/', async(req, res) =>{
//     res.json({message: "DELETE"})
// })

module.exports = router;