const express= require('express');
const app=express();
const port=8000;
//this is comment

app.listen(port,function(err){
    if(err){
        console.log('Error',err);
        consolr.log(`Error in running the server:${err}`);
    }
    console.log(`Server is running on port: ${port}`);
});