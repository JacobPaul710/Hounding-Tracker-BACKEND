const mongoose = require('../config/connection');

const MineralSchema = new mongoose.Schema(
    {
    mineralType: {
        type: String,
        required: [true, 'Type of mineral found is required (ex. Carnelian).']
    },
    date: {
         type: Date,
         required: [true, 'Date mineral was found is required.']
    },
    conditions: {
        type: String,
         required: [true, 'Conditions mineral was found in required']
    },
    county: {
        type: String,
        required: [true, 'County mineral was found in required']
   },
    image: 
    {
        type: String,
        required: [true, 'Image of mineral required']
   },
    houndingName: {
            type: String,
            required: [true, 'Name of hounder (can be username or real).'],
       }, 
    geocode: {
        type: [Number]
    },
},
{timestamps: true}
)

const Mineral = mongoose.model("Mineral", MineralSchema);

module.exports = Mineral;