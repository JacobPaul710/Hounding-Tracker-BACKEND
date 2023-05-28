const express = require('express');
const Mineral = require('../Models/Mineral');
const router = express.Router();

const mineralSeed = [
    {
        "mineralType": "Carnelian",
        "date": "09-03-22",
        "conditions": "Sunny",
        "county": "Linn",
        "image": "https://minerals.net/GemStoneInTheRoughImages/carnelian-rough-oregon.jpg",
        "houndingName": "JacobPaul710"
    },
    {
        "mineralType": "Holley Blue",
        "date": "04-20-00",
        "conditions": "Cloudy",
        "county": "Linn",
        "image": "https://imgur.com/a/cDuvnvD",
        "houndingName": "JacobPaul7101"
    },
    {
        "mineralType": "Limb Cast",
        "date": "07-10-00",
        "conditions": "Cloudy",
        "county": "Deschutes County",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtxoxjpLfXdXlcBV02PiDNv3-FSBKhbqSlxQ&usqp=CAU",
        "houndingName": "JacobPaul7102"
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