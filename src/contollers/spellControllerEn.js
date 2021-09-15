const SpellEn = require('../models/spellEN');
const axios = require('axios')

module.exports = {
    async getSpells(req, res) {
        const data = await SpellEn.find()
        return res.json(data)
    },

    async getBySpellName(req, res) {
        const fixedSpellName = req.params.spellName.replace("-", " ")
        const data = await SpellEn.find({ "search_name": fixedSpellName })
        return res.json(data)
    }
}
