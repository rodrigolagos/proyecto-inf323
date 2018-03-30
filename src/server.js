const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const app = express();

//BORRAR. Cambiar cuando se cambie el modelo de item a archivos
const itemRoutes = require('./routes/Item');

const mongoose = require('mongoose');
//BORRAR. Cambiar por lo siguiente:
// mongoose.connect('mongodb://localhost/proyecto1-inf323')
//   .then( () => console.log('Conexión establecida a la base de datos') )
//   .catch(err => console.log('No se ha podido conectar a la base de datos:', err));
mongoose.connect('mongodb://127.0.0.1:27017/proyecto1-inf323')
  .then( () => console.log('Conexión establecida a la base de datos') )
  .catch(err => console.log('No se ha podido conectar a la base de datos:', err));

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
