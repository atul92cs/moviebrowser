let mysql=require('mysql');
let db=mysql.createConnection({
    host:'bqateyin3z4fcjjgix8x-mysql.services.clever-cloud.com',
    user:'u78zhrz26qzbx3qh',
    port:3306,
    database:'bqateyin3z4fcjjgix8x',
    password:'0qVcqFrNpQpClC0rhA69',
    multipleStatements:true
});
db.connect(err=>{
    if(err)
    {
        console.log(`error ${err}`);
    }
    else
    {
        console.log('Database connected');
    }
});
module.exports=db;