const mongoose = require('mongoose')

const SpellSchemaEN = new mongoose.Schema({
    conjuradores:{
        type:Array,
        required:true
    },
    name:{
        type:String,
        required:true,
        unique:true
    },
    casting_time:{
        type:String,
        required:true
    },
    range:{
        type:String,
        required:true
    },
    components:{
        type:String,
    },
    duration:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    niveis_superiores:{
        type:String,
        required:false
    }
})

module.exports = SpellEn = mongoose.model('spell_en',SpellSchemaEN, "spellListEn");