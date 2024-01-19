const express = require('express');
const app = express();
const cors = require('cors')
const stripe = require('stripe')('sk_test_51JybTeSALb6khhNRinWH9Xb38ELvELmJ728IJxM31BNat7dV2IwjvpAzH0U2XPufLCn9jMzg4v2N1tv1ilM9PbEK00aH5iaDfK')

app.use(cors());
app.use(express.json());

app.post('/create-payment', async (req, res) => {
    const paymentIntent = await stripe.paymentIntents.create({
        amount: req.body.total * 100,
        currency: 'inr',
        description: 'TEST CUSTOM PAYMENT'
    });
    res.json({ clientSecret: paymentIntent.client_secret });
});

app.listen(5500, () => {
    console.log('Server is Running');
});