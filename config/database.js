let mysql=require('mysql');
let db=mysql.createConnection({
    host:'localhost',
    user:'root',
    port:3306,
    database:'bqateyin3z4fcjjgix8x',
    password:'seed',
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