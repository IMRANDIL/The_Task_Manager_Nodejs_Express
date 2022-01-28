const express = require('express');

require('dotenv').config();

const path = require('path');
const app = express();
const router = require('./router/router')

//middleware...
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/tasks', router)


app.listen(process.env.PORT || 3000, () => {
    console.log(`server is running on port:${process.env.PORT}`);
})