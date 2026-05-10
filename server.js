const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());
app.use(express.static('Public'));

const serviciosFile = "./data/servicios.json";
const usuariosFile = "./data/usuarios.json";
const categoriasFile = "./data/categorias.json";
const productosFile = "./data/productos.json";

function leer(ruta) {
    return JSON.parse(fs.readFileSync(ruta, 'utf-8'));
}

function guardar(ruta, data) {
    fs.writeFileSync(ruta, JSON.stringify(data, null, 2));
}

//Levantar servidor en puerto 3000

app.listen(3000, () => {
    console.log('Servidor Premium en puerto 3000')
})

//Cargar productos

app.get("/api/servicios", (req, res) => {
    res.json(leer(serviciosFile))
})

app.get("/api/categorias", (req, res) => {
    res.json(leer(categoriasFile));
});

app.get("/api/productos", (req, res) => {
    res.json(leer(productosFile));
});