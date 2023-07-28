const express=require('express');
const path=require('path');

const app=express();

// app.use(express.static(path.join(__dirname,'../NG2/dist/NG2')));

// app.get('*',(req,res)=>{
//     res.sendFile(path.join(__dirname,'../NG2/dist/NG2/index.html'));
// });

app.use(express.json());
app.post('/api/login',(req,res)=>{
    console.log(res);
    res.redirect('http://localhost:4200/camps');
}) ;
const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log('listening on port 3000');
});