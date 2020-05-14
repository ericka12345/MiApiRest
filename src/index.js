const express = require('express');
const app= express();

//configuracion del servidor
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(express.json());
//routes
app.use(require('./routes/employees'));
//Starting the server 
app.listen(app.get('port') , () => {
    console.log('Server on Port', app.get('port'));
});