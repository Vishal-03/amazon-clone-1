const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51Jp3DXSFzB7ioZyDQR41g7yF8OMS1u2T4tXJMAd68p0724wUl1813hDyHvS91KgvAR68Y05lHJBgOatzZB5l1Xuo002GABtISw')

// - API

// - App Config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send('hello world'))

app.post("/payment/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total)

    const paymentIntent = await stripe.paymentIntents.create({
        amaount: total, // subunits of the currency
        currency: "INR",
    });

    // OK -Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// - Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
// http://localhost:5001/clone-f246b/us-central1/api