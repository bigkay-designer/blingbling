const functions = require('firebase-functions');
const express = require("express");
const cors = require('cors')
const stripe = require('stripe')("sk_test_51ITBiPDkKKCnsU3mUDaDBfIOEakthRp3jfL8svARzKG6SbhUJOiGuo8Np8XNyVTsx5pE3yobPlW3TTZxHnmmjieZ00AE57O652")
//API

// App Config
const app = express()

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());
// Api routes
app.get('/',  (req, res)=>{
    res.status(200).send('hello world')
});

app.post('/payments/create', async (req, res)=>{
    const total = req.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // subunits of the currency
      currency: "usd",
    });
  
    // OK - Created
    res.status(201).send({
      clientSecret: paymentIntent.client_secret,
    });
})


// Listen command
exports.api = functions.https.onRequest(app)

///
// http://localhost:5001/blingbling-b2ccb/us-central1/api