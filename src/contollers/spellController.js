const Spell = require('../models/spell');
const axios = require('axios')

module.exports = {
    async getSpells(req,res){
        const data = await Spell.find()
        return res.json(data)
    },

    async getBySpellName(req, res){
        const data = await Spell.find({"nome": req.params.spellName})        
        return res.json(data)
    }
}
