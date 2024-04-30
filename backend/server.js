// import express from 'express';

// const app=express()

// app.get('/',(req,res)=>{
//     res.send('Server is Ready')
// });

// app.get('/api/jokes',(req,res)=>{
//     const jokes=[
//         {
//             id: 1,
//             title: 'A joke',
//             content: 'This is an joke that is my life'
//         },
//         {
//             id: 2,
//             title: 'Second  joke',
//             content: 'This is second joke that is my life'
//         },
//         {
//             id: 3,
//             title: 'Third joke',
//             content: 'This is third joke that is my life'
//         },
//         {
//             id: 4,
//             title: 'Fourth joke',
//             content: 'This is fourth joke that is my life'
//         },
//         {
//             id: 5,
//             title: 'Fifth joke',
//             content: 'This is fifth joke that is my life'
//         }
//     ]
//     res.send(jokes)
// })

// const port=process.env.PORT || 3000;

// app.listen(port,()=>{
//     console.log(`Serve at http://localhost:${port}`)
// })

const express=require('express')
const app=express();
require('dotenv').config();

const bodyParser=require('body-parser');
app.use(bodyParser.json())
const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{
    console.log("listening on the port 3000")
})