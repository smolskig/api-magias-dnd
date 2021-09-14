require('dotenv').config()
const mongoose = require('mongoose')

const URI = process.env.MONGO_URL_BR
const URI_EN = process.env.MONGO_URL_EN

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

const connectDb = () => {
    mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('db BR conectado'))
        .catch(err => console.log(err))
}

module.exports = {connectDb};