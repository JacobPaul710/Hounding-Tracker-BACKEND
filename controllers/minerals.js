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

router.put('/:id', async(req, res) =>{
    try{
        // const id = req.params.id;
        res.json(await Mineral.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    } catch(error){
        console.log("GET Request Error:", error)
    // } finally {
    //     res.redirect(`/${id}`);
    }
})

router.delete('/:id', async(req, res) =>{
    try{
        res.json(await Mineral.findByIdAndDelete(req.params.id))
    } catch(error){
        console.log("GET Request Error:", error)
    } // finally {
    //     res.redirect('/');
    // }
})

module.exports = router;