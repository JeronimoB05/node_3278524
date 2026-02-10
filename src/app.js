const express = require('express')
const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('🆗 API     funcionando correctamente')
});
/* const PORT=3000;
app.listen(PORT,()=>{
    console.log("Servidor activo ")
}); */
module.exports = app;