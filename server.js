let movies=require('./controllers/movie');
let genre=require('./controllers/genre');
let director=require('./controllers/director');
let cors=require('cors');
let express=require('express');
let app=express();
let port=process.env.PORT||8080;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',movies);
app.use('/genre',genre);
app.use('/director',director);
app.listen(port,()=>{
    console.log('server started on'+port);
});