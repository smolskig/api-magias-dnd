const SpellEn = require('../models/spellEN');
const axios = require('axios')

module.exports = {
    async getSpells(req,res){
        const data = await SpellEn.find()
        return res.json(data)
    },

    async getBySpellName(req, res){
        const data = await SpellEn.find({"name": req.params.spellName})        
        return res.json(data)
    }
}
