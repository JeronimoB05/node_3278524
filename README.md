# Comandos
``git --version``
``node -v``
``npm -v``
## Inicializar un proyecto
``npm init -y``
`` npm install express``
## Manejo de Git
``git init``
``git add .``
``git commit -m "v1"``
``git branch -M master``



# 📁Estructura profesionales de una API en Node.js
api-node
    |-src **Aquí vive todo el código real del proyecto**
        |-config **Configuraciones globales**
        |-controllers **Controla las peticiones HTTP**
        |-middlewares **Intermediarios de seguridad y validación**
        |-models **Representa las tablas de la base de datos**
        |-routes **Define las URLs de la API**
        |-services **Lógica del negocio**
        |-utils **Funciones reutilizables**
        |-app.js **Configuración de la aplicación**
        |-server.js **Punto de arranque**


``npm install dotenv sequelize mysql2 pg pg-hstore``
``npm install nodemon --save-dev``
crear .env a nivel de src
```

DB_DIALECT=mysql
DB_HOST=localhost
DB_PORT=3306
DB_NAME=node_api3278524
DB_USER=root
DB_PASSWORD=
PORT=3000

```

📁 src/config/database.js

📁 src/server.js

configuramos package.json `` "start": "node src/server.js",``
ejecutamos el servidor con ``npm start``
ajustamos a app.js

```
/* const PORT=3000;
app.listen(PORT,()=>{
    console.log("Servidor activo ")
}); */
module.exports = app;
```

📁 src/models/usuario.model.js
📁 src/services/usuario.service.js
📁 src/controllers/usuario.controller.js