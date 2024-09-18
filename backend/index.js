import express, { json } from 'express'
import cors from 'cors'
// import products from './mocks/products.json' assert { type: 'json' };
import path from 'path'
import fs from 'fs'
const app = express()
const PORT = 5000

app.use(cors())
app.use(json())

// const products_dir = './mocks/products.json'
// const products = [{name: 'loqsea'}]

app.get('/', (req, res) => {
    const jsonFilePath = path.join('./', 'mocks', 'products.json');
    fs.readFile(jsonFilePath, 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Error al leer el archivo JSON' });
        }
        try {
            const products = JSON.parse(data);
            res.json(products);
        } catch (error){
            res.status(500).json({ error: 'Error al procesar el archivo JSON' });
        }
    })
})

app.listen(PORT, () => {
    console.log(`Server running in http://localhost:${PORT}`)
})

