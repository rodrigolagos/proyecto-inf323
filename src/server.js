const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();

const itemRoutes = require('./routes/Item');

const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/proyecto1-inf323')
  .then( () => console.log('Conexión establecida a la base de datos') )
  .catch(err => console.log('No se ha podido conectar a la base de datos:', err));

/* Se crea un item de prueba, para manipularlo en las pruebas unitarias */
var conn = mongoose.connection;
var ObjectID = require('mongodb').ObjectID;
var item = {_id: new ObjectID("5ac3493d074d4f463558bfdf"),name: 'Creado desde server',price: 100};
conn.collection('items').findOneAndDelete({"_id" : ObjectID("5ac3493d074d4f463558bfdf")})
conn.collection('items').insert(item)
/* ******************************************************************** */

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/item', itemRoutes);

// Static files
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log("Servidor en el puerto", app.get('port'));
});
