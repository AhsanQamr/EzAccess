const asyncHandler = require('express-async-handler');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { getDBConnection } = require('../db');

function generateToken(email){
    const token = jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: '30d' });
    return token;
}

const signup = asyncHandler(async(req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password ) {
        const data = {
            status: 400,
            message: 'Error: Please fill all fields'
        };
        res.status(400).send(data);
        return;
    }

    // Get the EzAccess database client
    const client = getDBConnection('EzAccess');
    const db = client.db(); // This will get the EzAccess database as specified in the URI
    const usersCollection = db.collection('users');

    // Check if user already exists
    const userExists = await usersCollection.findOne({ email });
    if (userExists){
        const data = {
            status: 400,
            message: 'Error: User already exists'
        };
        res.status(400).send(data);
        return;
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const result = await usersCollection.insertOne({
        name,
        email,
        password: hashedPassword
    });

    if (result.insertedId){
        const data = {
            status: 200,
            _id: result.insertedId,
        };
        res.status(200).json(data);
        return;
    }
    else{
        const data = {
            status: 400,
            message: 'Error: User not created'
        };
        res.status(400).send(data);
        return;
    }
});


const login = asyncHandler(async(req,res) => {
    const {email,password} = await req.body
    if (!email || !password) {
        const data = {
            status: 400,
            message: 'Error: Please provide an email and password'
        }
        res.status(400).send(data)
        return
    }

    const client = getDBConnection('EzAccess');
    const db = client.db(); // This will get the EzAccess database as specified in the URI
    const usersCollection = db.collection('users');

    const user = await usersCollection.findOne({email})
    if (!user){
        const data = {
            status: 401,
            message: 'Error: Invalid email or password'
        }
        res.status(401).send(data)
        return
    }

    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch){
        const data = {
            status: 401,
            message: 'Error: Invalid email or password'
        }
        res.status(401).send(data)
        return
    }

    const data = {
        status: 200,
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user.email)
    }
    res.status(200).json(data)
})

module.exports ={
    signup,
    login
}