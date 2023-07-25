const express = require('express');
const apiRoutes = require('./server/routes/api.routes');
const cors = require('cors');


//setup enviroment
require('dotenv').config();

//database
require('./server/config/db')


const app = express();

app.use(cors());

app.use(express.json());

app.use('/api',apiRoutes);

// Port Number
const port = process.env.PORT;

// Start Server
app.listen(port, () => {
    console.log('Server is running at port: '+port);
  });