const mongoose = require('mongoose')

const SpellSchemaBR = new mongoose.Schema({
    conjuradores: {
        type: Array,
        required: true
    },
    nome: {
        type: String,
        required: true,
        unique: true
    },
    nome_busca: {
        type: String,
        required: true,
        unique: true
    },
    tempo_conjuracao: {
        type: String,
        required: true
    },
    alcance: {
        type: String,
        required: true
    },
    componentes: {
        type: String,
    },
    duracao: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true
    },
    niveis_superiores: {
        type: String,
        required: false
    }
})

module.exports = Spell = mongoose.model('spell_br', SpellSchemaBR, "spellList");