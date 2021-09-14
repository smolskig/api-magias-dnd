const SpellBR = require('../models/spellBR');

module.exports = {
    async getSpells(req,res){
        const data = await SpellBR.find()
        return res.json(data)
    },

    async getBySpellName(req, res){
        const data = await SpellBR.find({"nome": req.params.spellName})        
        return res.json(data)
    }
}
