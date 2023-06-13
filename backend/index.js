const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const productRoutes = require('./Routes/Products');

mongoose.connect('mongodb://localhost:27017/Daraz', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to the database");
}
).catch(err => {
    console.log("Cannot connect to the database", err);
    process.exit();
});

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ "message": "Server is running" });
});



app.use('/daraz', productRoutes);

let port = 8080;
app.listen(port, () => {
    console.log("Server is listening on port " + port);
});
