const express = require('express');
const Mineral = require('../Models/Mineral');
const router = express.Router();

const mineralSeed = [
    {
        "mineralType": "Carnelian",
        "date": "09-03-22",
        "conditions": "Sunny",
        "county": "Linn",
        "geocode": "44.3914279554609, -122.98910923622539",
        "popUp": "Carnelian found by JacobPaul710",
        "image": "https://i.imgur.com/mQLxpEb.png",
        "houndingName": "JacobPaul710"
    },
    {
        "mineralType": "Holley Blue",
        "date": "04-20-00",
        "conditions": "Cloudy",
        "county": "Linn",
        "geocode": "45.00643700696789, -124.00787560642435", 
        "popUp": "Holley Blue found by JacobPaul710",
        "image": "https://i.imgur.com/UfPi4R7.jpg",
        "houndingName": "JacobPaul710"
    },
    {
        "mineralType": "Limb Cast",
        "date": "07-10-00",
        "conditions": "Cloudy",
        "county": "Deschutes County",
        "geocode": "44.37689134175511, -120.1178183453726", 
        "popUp": "Limb Cast found by JacobPaul710",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtxoxjpLfXdXlcBV02PiDNv3-FSBKhbqSlxQ&usqp=CAU",
        "houndingName": "JacobPaul710"
    }
]

router.get('/', async(req, res) => {
    try{
        res.json(await Mineral.find({}))
    } catch(error){
        console.log("GET Request Error:", error)
    }
})

router.get('/seed', async (req, res) => {
    try {
        await Mineral.deleteMany({});
        await Mineral.insertMany(mineralSeed);
        res.redirect('/minerals');
    } catch(error) {
        console.log("SEED Route Error", error);
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
        const mineral = await Mineral.findById(req.params.id)
        res.json(mineral)
    } catch(error){
        console.log("GET Request Error:", error)
    }
})

router.put('/:id', async(req, res) =>{
    try{
        res.json(await Mineral.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    } catch(error){
        console.log("GET Request Error:", error)
    }
})

router.delete('/:id', async(req, res) =>{
    try{
        res.json(await Mineral.findByIdAndDelete(req.params.id))
    } catch(error){
        console.log("GET Request Error:", error)
    } 
})

module.exports = router;