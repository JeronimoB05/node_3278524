const express = require('express')
const usuarioRoutes = require('./routes/usuario.routes')
const paisRoutes = require('./routes/pais.routes')
const app = express()

app.use(express.json())

app.use('/api/usuarios', usuarioRoutes),
app.use('/api/paises', paisRoutes);

app.get('/',(req,res)=>{
    res.send('🆗 API     funcionando correctamente')
});
/* const PORT=3000;
app.listen(PORT,()=>{
    console.log("Servidor activo ")
}); */
module.exports = app;