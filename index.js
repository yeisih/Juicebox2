
const PORT=3000;
const express =require ('express');
const apiRouter= require ('./api')
const morgan = require('morgan')
const { client } = require ('./db/index.js');
require ('dotenv').config()


const app =express();


app.use(morgan('dev'));
app.use(express.json());


app.use((req,res,next)=>{
    console.log("<______Body Logger START_____>");
    console.log(req.body);

    next();
});


app.use('/api',apiRouter);

client.connect()

 app.listen(PORT,()=>{
        console.log('THE SERVER IS UPPP ON PORT',PORT);
    })





// app.use ('/api',apiRouter);
// const JWT = require ('jsonwebtoken');
// app.use(express.json())

// client.connect();

// app.use ((req,res,next)=> {
//     console.log('request');
//     next();
// })

// app.get ('/',(req,res,next)=>{
//     res.send(`<div>aloooo</div>`)
// console.log ("request")
// next ();
// });

// app.post('/api/users/register', (req,res,next)=>{
//     console.log("a request")
//     res.send({messsage:"yayyayayayya"})
// })
// app.post ('/api/users/login',(req,res,next)=>{
//     console.log('request login')
//     res.send({message:"ayyayayya"})
// })

// app.post('/api/users/:id')

// const PORT = 3000;

// app.listen(PORT, () => {
//   console.log(`port${PORT}`)  
// });