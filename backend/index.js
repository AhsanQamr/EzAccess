const express = require('express');
const routes = require('./Routes/routes')
const app = express();
const port = 8081;
const {connectDatabase} = require('./db');
const cors = require('cors');

connectDatabase();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
    }
);