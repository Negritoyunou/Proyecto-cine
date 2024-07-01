const app = require('./src/server');
const conDb = require('./src/config/conDb');

conDb()
    .then( async (res) => {
    app.listen(3000, () => {
        console.log("Servidor corriendo en el puerto 3000");
    });
})
    .catch((err) => { 
        console.log(err); 
});

