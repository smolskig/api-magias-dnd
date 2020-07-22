const mongoose = require('mongoose')

const URI = 'mongodb+srv://admin:smolski@2020@cluster0.oomh2.mongodb.net/dndSpellsApi?retryWrites=true&w=majority'

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const connectDb = ()=>{
    mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(()=> console.log('db conectado'))
        .catch(err=> console.log(err))
}

module.exports = connectDb ;