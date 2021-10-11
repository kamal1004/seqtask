const controller = {}

var Customers = require('./models/Customers');

const { Op } = require("sequelize");


controller.index = (req,res) => {

  const data = {
    name: "Jhon Smith",
    age: 20,
    city: 'London'
  }

  res.json(data);
};


controller.list = async (req, res) => {
try{
  const response = await Customers.findAll()
  .then(function(data){
    const res = { success: true, message:"load ok" }
    return res;
  })
  .catch(error =>{
    const res = { success: false, error: error }
    return res;
  })
  return res.json(response);

} catch (e){
  console.log("error controller.list");
}
}


controller.create = async ( req, res) =>{

  try {

    const response = await Customers.create({
      name:"John Smith",
      email:"john@smith.com",
      address:"Cll 100 Malibu",
      phone:"123456789"
    })
    .then(function(data){
      const res = { success: true, data: data, message:"created successful" }
      return res;
    })
    .catch(error=>{
      const res = { success: false, error: error }
      return res;
    })
    res.json(response);

  } catch (e) {
    console.log(e);
  }
}


module.exports = controller;
