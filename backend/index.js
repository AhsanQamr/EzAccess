const express = require('express');
const routes = require('./Routes/routes')
const controller = require('./Controllers/controller');
const app = express();
const port = 8080;
const {connectDatabases} = require('./db');
const cors = require('cors');


connectDatabases();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

//     next();
//     });

app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
    }
);