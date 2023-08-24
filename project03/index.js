require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const cvschema = require('./schema/cvschema.json');
const { MongoClient, ServerApiVersion } = require('mongodb');
const indexRouter = require('./routes/index');
const client = new MongoClient(process.env.DATABASE_URL, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}
run().catch(console.dir);
app.use(express.json());
app.use(cors());
app.use("/api", indexRouter);


app.use("/", async (req, res) => {

    const axios = require('axios');
    const options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/auto-complete',
        params: {q: 'prison'},
        headers: {
            'X-RapidAPI-Key': '0647afe6f2mshe92e90f94cf68aap16b84cjsn62450b8d1e95',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        // desteructuring
        let {l:film , q:titre } = response.data.d[0] ;
        res.send(200,cvschema);
    } catch (error) {
        res.send(500,error);
    }
})
app.listen(4000, () => console.log('server started'));


