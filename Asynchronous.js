const express = require('express');
const app = express();

app.get('/', async(req , res) => {
  try{
    const data = await fetchdatafromdatabase();
    res.json(data);
  }
  catch(err){
    res.status(500).semd('Error fetching data');
  }
});
