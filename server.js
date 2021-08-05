let movies=require('./controllers/movie');
let genre=require('./controllers/genre');
let director=require('./controllers/director');
let express=require('express');
let app=express();
let port=8080||process.env.port;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/movie',movies);
app.use('/genre',genre);
app.use('/director',director);
app.listen(port,()=>{
    console.log('server started');
});