require('dotenv').config();

const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;
const BACKEND_URL = process.env.BACKEND_URL;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.get('/', async (req, res) => {
  try {
    const response = await axios.get(BACKEND_URL);
    const posts = response.data;

    res.render('index', { posts });
  } catch (error) {
    console.error('Fehler beim Abrufen der Daten:', error);
    res.status(500).send('Fehler beim Abrufen der Daten');
  }
});

app.listen(PORT, () => {
  console.log(`Server läuft unter http://localhost:${PORT}`);
});
