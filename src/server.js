const express = require('express');
const app = express();


app.set('port', process.env.PORT || 3000);


app.use(express.json());

app.get('/',(req,res)=>{
  res.send("Hello World form NodeJS express.");
});


app.listen(app.get('port'),()=>{
  console.log("Start server on port "+app.get('port'))
})

const routes = require('./routes');
app.use('/test', routes);
