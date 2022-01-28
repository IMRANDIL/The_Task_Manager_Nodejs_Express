const express = require('express');

require('dotenv').config();

const path = require('path');
const app = express();
const router = require('./router/router');
const cors = require('cors')
const notFound = require('./middlewares/not-found');
const errorHandler = require('./middlewares/error-handler')
//middleware...
app.use(cors())
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/tasks', router)

//404..Route.....Handling....

app.use(notFound)

app.use(errorHandler)

app.listen(process.env.PORT || 3000, () => {
    console.log(`server is running on port:${process.env.PORT}`);
})