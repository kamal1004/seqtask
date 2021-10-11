const express = require('express');
const app = express();


app.set('port', process.env.PORT || 5000);


app.use(express.json());

app.get('/',(req,res)=>{
  res.send("Server Is On");
});


app.listen(app.get('port'),()=>{
  console.log("Server running on port"+app.get('port'))
})

const routes = require('./routes');
app.use('/test', routes);
