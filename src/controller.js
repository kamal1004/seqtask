const controller = {}

var Users = require('./models/Users');

const { Op } = require("sequelize");


controller.index = (req,res) => {

  const data = {
    name: "Kamalesh",
    age: 21,
    city: 'Chennai'
  }

  res.json(data);
};

controller.create = async( req, res) =>{

  try {

    const response = await Users.create({
      name:"Kamalesh Prabakar",
      email:"kamal@gmail.com",
      phone:"12345789012",
      age:"10"
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

  }
   catch (e) {
    console.log(e);
  }
}


module.exports = controller;
