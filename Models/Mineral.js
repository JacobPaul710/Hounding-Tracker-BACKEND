const mongoose = require('../config/connection');

const MineralSchema = new mongoose.Schema(
    {
    date: {
         type: Number,
         required: true
    },
    conditions: {
        type: String,
         required: true
    },
    county: {
        type: String,
        required: true
   },
    image: 
    {
        type: String,
        required: true
   },
    houndingName: {
            type: String,
            required: true,
            unique: true
       }, 
    },
{timestamps: true}
)

const Mineral = mongoose.model("Mineral", MineralSchema);

module.exports = Mineral;