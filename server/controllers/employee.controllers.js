const express = require('express');
const httpStatus = require('http-status-codes');
const router = express.Router();

const employee = require('../models/employee.model');

router.get('/', (req, res) => {
  employee.find().then(docs => {
    res.send(docs);
  }).catch(err => {
      res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR).send(err);
  })
});

router.get('/:id', (req, res) => {
  let id = req.params.id;
  employee.findById(id).then(docs => {
    res.send(docs);
  }).catch(err => {
      res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR).send(err);
  })
});

router.post('/', (req, res) => {
  const obj = req.body;
  employee.create(obj).then(docs => {
    res.status(httpStatus.StatusCodes.CREATED).send(docs);
  }).catch(err => {
      res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR).send(err);
  })
});
//update
router.put('/:id', (req, res) => {
  let id = req.params.id;
  const obj = req.body;
  employee.findByIdAndUpdate(id,{name:obj.name, contact: obj.contact, address:obj.address}).then(docs => {
    res.status(httpStatus.StatusCodes.OK).send(docs);
  }).catch(err => {
      res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR).send(err);
  })
});

//Delete
router.delete('/:id', (req, res) => {
  let id = req.params.id;
  employee.findByIdAndDelete(id).then(docs => {
    res.status(httpStatus.StatusCodes.OK).send(docs);
  }).catch(err => {
      res.status(httpStatus.StatusCodes.INTERNAL_SERVER_ERROR).send(err);
  })
});
  

router.get('/', (req, res) => {
    res.send('Hello Check');
  });

 module.exports = router; 
  