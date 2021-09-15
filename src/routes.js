const express = require('express')
const SpellControllerBr = require('./contollers/spellControllerBr')
const SpellControllerEn = require('./contollers/spellControllerEn')
const DBPopulate = require('./contollers/DBPopulate')

const routes = express.Router();

routes.get('/api/br/spells',SpellControllerBr.getSpells);
routes.get('/api/br/spells/:spellName',SpellControllerBr.getBySpellName);

routes.get('/api/en/spells',SpellControllerEn.getSpells);
routes.get('/api/en/spells/:spellName',SpellControllerEn.getBySpellName);

routes.get('/api/populate',DBPopulate.populate);

module.exports = routes