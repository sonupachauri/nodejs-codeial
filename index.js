const express = require('express');
const app = express();
const port=8000;

// use of express router

app.use('/',require('./routes/index'));


app.listen(port,function(err){
   if(err){console.log(`error: ${err}`); return;}
   console.log(`server is running on port ${port}`);
})