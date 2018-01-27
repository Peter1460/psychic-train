const EXPRESS = require('express');
const APP = EXPRESS();
const MONGOOSE = require('mongoose');
MONGOOSE.connect('mongodb://<lu97is:eagle1997>;<dbpassword>@ds117148.mlab.com:1748/nodetest1997',(err)=>{
if (err){
    console.log('error' + err)
}
else{
    console.log('conectado')
}
})

APP.get('/',(req,rest)=>{
    res.send('hola mundo');
});
APP.get('/test',(req,res)=>{
    res.send('HOLA MUNDO DESDE TEST')
});
APP.listen(8080,()=>{
    console.log('servidor en puerto 8081')
})