const SpellBR = require('../models/spellBR');

module.exports = {
    async getSpells(req, res) {
        const data = await SpellBR.find()
        return res.json(data)
    },

    async getBySpellName(req, res) {
        const fixedSpellName = req.params.spellName.replace("-", " ")
        const data = await SpellBR.find({ "nome": fixedSpellName })
        return res.json(data)
    }
}
