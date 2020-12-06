const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');


const app = express();

//init middleware
//app.use(logger);

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

//members api route
app.use('/api/members', require('./routes/api/members'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//app.get('/', (req, res) =>{
   // res.sendFile(path.join(__dirname, 'public', 'index.html'));
//});
