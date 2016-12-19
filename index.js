"use strict";

const express = require('express');
const app = express();
const noUse;

// Routes
var index = require ('./routes/index.js');

app.use("/",index);

app.listen(process.env.PORT || 8080, () => 
  {
    console.log('Example app listening on port 3000!');
  }
);
