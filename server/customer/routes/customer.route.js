import mongoose from 'mongoose';
import express from 'express';
import customerController from "../controllers/customer.controller";


const router = express.Router();

router.get('/', function(req, res) {
    customerController.getAll().then((customers) => {
      res.send(customers);
    }).catch((error) => {
      res.send("Error occured while fetching customers");
    })
});

router.get('/query', function(req, res) {
    console.log("Query for searching Customer: "+ JSON.stringify(req.query));
    customerController.find(req.query).then((customers) => {
    res.send(customers);
    }).catch((error) => {
    res.send("Error occured while Searching customers");
    });
});

router.get('/:customerId', function(req, res) {
      customerController.getTrade(req.params.customerId).then((customer) => {
        res.send(customer);
      }).catch((error) => {
        res.send("Error occured while fetching Customer");
      })
});

router.post('/', function(req, res) {
    let customer = {};
    customer.name = req.body.name;
    customer.contactNumber= req.body.contactNumber;
    customer.address= req.body.address;

    customerController.addCustomer(customer).then((savedCustomer) => {
      res.send(savedCustomer);
    }).catch((error) => {
      res.send("Error occured while saving trade"+error);
    })
});

router.put('/', function(req, res) {
      let customer = {};
      customer._id = req.body._id;
      customer.name = req.body.name;
      customer.contactNumber= req.body.contactNumber;
      customer.address= req.body.address;

      customerController.update(customer).then((savedCustomer) => {
        res.send(savedCustomer);
      }).catch((error) => {
        res.send("Error occured while updating customer "+ error);
      })
});

router.delete('/:customerId', function(req, res) {
      customerController.deleteTrade(req.params.customerId).then((customer) => {
        res.send(customer);
      }).catch((error) => {
        res.send(`Error occured while deleting customer: ${error}`);
      })
});

export default router;
