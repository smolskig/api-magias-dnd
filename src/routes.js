const express = require('express')
const SpellController = require('./contollers/spellController')

const routes = express.Router();

routes.get('/api/spells',SpellController.getSpells);
routes.get('/api/populate',SpellController.populate);

module.exports = routes