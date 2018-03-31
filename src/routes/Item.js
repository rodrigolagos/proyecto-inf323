const express = require('express');
const router = express.Router();
var path = require('path');

const Item = require('../models/Item');

var multer  = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'src/public/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
});
var upload = multer({ storage: storage });

// Get all items
router.get('/', (req, res) => {
  Item.find((err, items) => {
    if (err) return res.status(500).send({message: err.message})
    else {
      res.status(200).json(items)
    }
  })
})

// Get item
router.get('/:id', (req, res) => {
  Item.findById(req.params.id, (err, item) => {
    if (err) {throw err}
    else {
      res.json(item)
    }
  })
})

// Create item
router.post('/', upload.single('image'), (req, res) => {
  const item = new Item();
  item.name = req.body.name;
  item.price = req.body.price;

  item.image = req.file.filename;

  item.save()
    .then(item => {
      res.status(200).json({message: 'Item agregado.'})
    })
    .catch(err => {
      res.status(400).send({message: err})
    })
})

// Update item
router.put('/:id', (req, res, next) => {
  Item.findById(req.params.id, (err, item) => {
    if (!item) {
      return next(new Error('No se pudo cargar el documento.'))
    } else {
      item.name = req.body.name
      item.price = req.body.price
      item.save()
        .then(item => {
          res.json('Actualizacion completa.')
        })
        .catch(err => {
          res.status(500).send('No se pudo actualizar.')
        })
    }
  })
})

// Delete item
router.delete('/:id', (req, res) => {
  Item.findByIdAndRemove(req.params.id, (err, item) => {
    if (err) {return res.status(500).send({message: err.message})}
    else {
      res.json('Item eliminado.')
    }
  })
})

module.exports = router;
