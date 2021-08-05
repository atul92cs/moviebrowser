let db=require('../config/database');
let express=require('express');
let router=express.Router();
router.post('/add',(req,res)=>{
    let {name}=req.body;
    let sql='insert into director set name=?';
    let param=[name];
    db.query(sql,param,(err,result)=>{
        if(!err)
        {
             res.status(200).json({
                 msg:'director created'
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
    let sql='select * from director';
    db.query(sql,(err,result)=>{
        if(!err)
        {
              res.status(200).json({
                  director:result
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
    let sql='update director set name=? where id=?';
    let params=[name,id];
    db.query(sql,params,(err,result)=>{
        if(!err)
        {
            res.status(200).json({
                msg:'director upadted'
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