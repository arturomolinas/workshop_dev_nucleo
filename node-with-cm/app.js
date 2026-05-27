const express = require('express');
const fs = require('fs');
const app = express();
const configPath = '/opt/app-root/config/custom.json';

app.get('/', (req, res) => {
    let saludo = "Mensaje por defecto";

    if (fs.existsSync(configPath)) {
        const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
        saludo = config.saludo_custom || saludo;
    }

    res.send(`Respuesta del ConfigMap: "${saludo}"\n`);
});

app.listen(8080);