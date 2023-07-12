const express = require('express');
const app = express();

app.use(express.json());
app.use("/", async (req, res) => {

    const axios = require('axios');
    const options = {
        method: 'GET',
        url: 'https://imdb8.p.rapidapi.com/auto-complete',
        params: {q: 'game of thr'},
        headers: {
            'X-RapidAPI-Key': '0647afe6f2mshe92e90f94cf68aap16b84cjsn62450b8d1e95',
            'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        res.status(200).send(response.data);
    } catch (error) {
        res.status(500).send(error);
    }
})
app.listen(4000, () => console.log('server started'));


