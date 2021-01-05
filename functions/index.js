const functions = require('firebase-functions');
const express = require('express')
const cors = require ('cors');
const { request, response } = require('express');
const stripe = require('stripe')('sk_test_51HtdANLxCxIkrlLNNiRmtFLFCeXOSjvyOkMnfRvgfipaFkdHqT7fT6QRWMU7fNo4VnAqi3mshx6PHVRCb47tdisi000lfY4JP8')

//API

// - App config
const app = express();

// - Midleware
app.use(cors({origin: true }));
app.use(express.json());

//API routes
app.get('/', (request,response) => response.status(200).send('hello world'))

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    

    const paymentIntent = await stripe.paymentIntents.create({
        amount : total, //subunits of currency
        currency : 'INR'
    });

    // ok created
    response.status(201).send({
        clientSecret : paymentIntent.client_secret,
    
    })
   
})


// - Listen command 
exports.api = functions.https.onRequest(app)

// - Example endpoint
// http://localhost:5001/e-clone-96aaa/us-central1/api

