import Customer from '../model/customer.model';


const customerController = {};

  customerController.addCustomer = (customer) => {
    return new Promise((resolve, reject) => {
      new Customer(customer).save().then((savedCustomer) => {
        resolve(savedCustomer);
      },(error) => {
        reject(error);
      })
    })
  }

  customerController.getAll = (customer) => {
    return new Promise((resolve, reject) => {
      Customer.find({}).then((customers) => {
        resolve(customers);
      },(error) => {
        reject(error);
      })
    })
  }

  customerController.find = (query) => {
    return new Promise((resolve, reject) => {
      Customer.find({
        name: /query.name/,
      }).then((customers) => {
        resolve(customers);
      },(error) => {
        reject(error);
      })
    })
  }



  customerController.getCustomer = (customerId) => {
    console.log("Customer ID:"+ customerId);
    return new Promise((resolve, reject) => {
      Customer.findById(customerId).then((customer) => {
        resolve(customer);
      },(error) => {
        reject(error);
      })
    })
  }

  customerController.deleteCustomer = (customerId) => {
    return new Promise((resolve, reject) => {
      Customer.remove({_id: customerId}).then((customer) => {
        resolve(customer);
      },(error) => {
        reject(error);
      })
    })
  }

  customerController.update = (customer) => {
    return new Promise((resolve, reject) => {
      Customer.findOneAndUpdate({_id: customer._id}, customer, {new: true},
      function(err, updatedCustomer) {
        if(err) {
          reject(error);
        } else {
            if(updatedCustomer) {
                resolve(updatedCustomer);
            } else {
                reject("No record updated");
            }
        }
      })
    })
  }

export default customerController;