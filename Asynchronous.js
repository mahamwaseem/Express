const express = require('express');
const app = express();

app.get('/', async(req , res) => {
  try{
    const data = await fetchDataFromDatabase();
    res.json(data);
  }
  catch(err){
    res.status(500).semd('Error fetching data');
  }
});
async function  fetchDataFromDatabase(){
  return { id : 1, name : 'Product A'};
}

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
});