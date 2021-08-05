let db=require('../config/database');
let express=require('express');
let router=express.Router();
router.post('/add',(req,res)=>{
    let {name}=req.body;
    let sql='insert into genre set Name= ?';
    let param=[name];
    db.query(sql,param,(err,result)=>{
        if(!err)
        {
            res.status(200).json({
                msg:'genre created'
            });
        }
        else
        {
            res.status(401).json({
                msg:'error occured',
                error:err
            });
        }
    });
});
router.get('/',(req,res)=>{
    let sql='select * from genre';
    db.query(sql,(err,result)=>{
        if(!err)
        {
            res.status(200).json({
                genre:result
            });
        }
        else
        {
            res.status(401).json({
                msg:'error occured',
                error:err
            });
        }
    });
});
router.delete('/:id',(req,res)=>{
    let {id}=req.params;
    let sql='delete from genre where id=?';
    let params=[id];
    db.query(sql,params,(err,result)=>{
        if(!err)
        {
            res.status(200).json({
                msg:'genre deleted'
            });
        }
        else
        {
            res.status(401).json({
                msg:'error occured',
                error:err
            });
        }
    });
});
router.put('/:id',(req,res)=>{
    let {id}=req.params;
    let {name}=req.body;
    let sql='update genre set Name=? where id=?';
    let params=[name,id];
    db.query(sql,params,(err,result)=>{
        if(!err)
        {
            res.status(200).json({
                msg:'genre updated'
            });
        }
        else
        {
            res.status(401).json({
                msg:'error occured',
                error:err
            });
        }
    });
});
module.exports=router;