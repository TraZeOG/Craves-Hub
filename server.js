const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

const dataDir = './data';

// Fonction pour charger les données depuis un fichier JSON spécifique
const loadStocks = (filename) => {
    const filePath = path.join(dataDir, `${filename}.json`);
    if (fs.existsSync(filePath)) {
        const data = fs.readFileSync(filePath);
        return JSON.parse(data);
    }
    return [];
};


// Route pour obtenir les stocks d'un tableau spécifique
app.get('/stocks/:tableName', (req, res) => {
    const tableName = req.params.tableName;
    const stocks = loadStocks(tableName);
    res.json(stocks);
});


app.listen(port, () => {
    console.log(`Serveur en écoute sur http://localhost:${port}`);
});
