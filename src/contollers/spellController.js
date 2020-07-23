const Spell = require('../models/spell');
const axios = require('axios')

module.exports = {
    async populate(req,res){
        axios.get('https://dnd5spells.rpgist.net/api/v1.1/pt-BR/rules')
            .then(async SpellResponse=>{    
                Spell.collection.drop()
                let result = []
                SpellResponse.data.spells.map((info=>{
                    const regex = /(<([^>]+)>)/ig
                    let alcance = info.range / 3.2808
                    const formated = {
                        "nome":info.name,
                        "tempo_conjuracao":`${info.casting_time} ${info.casting_time_unit}`,
                        "alcance":`${alcance.toFixed(1)} Metros`,
                        "componentes":info.material_component,
                        "duracao":`${info.duration} ${info.duration_unit} `,
                        "descricao":info.description.replace(regex, ""),
                        "niveis_superiores":"teste"
                    }
                    result.push(formated)    
                }))
                try{
                    await result.map(async response=>{
                        Spell.create(response)
                            .then(()=>{
                            })
                            .catch((err)=>console.log(err))
                    })
                    return res.sendStatus(200)
                }
                catch{
                    return res.error('ocorreu um erro ao popular o banco')
                }  
            })   
    },

    async getSpells(req,res){
        const data = await Spell.find()
        return res.json(data)
    }
}
