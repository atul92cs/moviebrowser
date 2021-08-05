let db=require('../config/database');
let express=require('express');
let router=express.Router();
let multer=require('multer');
let cloudinary=require('cloudinary');
let storage=multer.diskStorage({
    filename:(req,file,callback)=>{
        callback(null,Date.now()+file.originalname);
    }
});
let upload=multer({storage:storage});
cloudinary.config({
    cloud_name:'dkhk4gyey',
    api_key:'459656749761335',
    api_secret:'AS_y6ZzH7FAjeoIxF1IjtMFKzQg'
    });
router.post('/add',upload.single('picture'),(req,res)=>{
    let {name,genre,director}=req.body;
    cloudinary.v2.uploader.upload(req.file.path).then((image)=>{
        let sql='insert into movies set ?';
        let body={name:name,genre:genre,director:director,picture:image.secure_url};
        db.query(sql,body,(err,result)=>{
            if(!err)
            {
                res.status(200).json({
                    msg:'movie created'
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
    }).catch(ex=>{
        res.status(402).json({
            msg:'error occured',
            error:ex
        });
    });
    
});

router.delete('/:id',(req,res)=>{
    let {id}=req.params;
    let params=[id];
    let sql='delete from movie where id=?';
    db.query(sql,params,(err,result)=>{
        if(err)
        {
            res.status(401).json({
                msg:'error occured',
                error:err
            });
        }
        else
        {
            res.status(200).json({
                msg:'movie deleted'
            });
        }
    });
});
router.get('/',(req,res)=>{
    let sql='select movies.id as id, movies.name as name ,movies.picture as picture,genre.name as genre ,director.name as director from movies join director on movies.director=director.id join genre on movies.genre=genre.id ';
    db.query(sql,(err,result)=>{
        if(err)
        {
            res.status(401).json({
                msg:'error occured',
                error:err
            });
        }
        else
        {
            res.status(200).json({
                movies:result
            });
        }
    });
});
router.get('/:id',(req,res)=>{
    let sql='select movies.id as id, movies.name as name ,movies.picture as picture,genre.name as genre ,director.name as director from movies join director on movies.director=director.id join genre on movies.genre=genre.id where movies.genre=?';
    let {id}=req.params;
    let params=[id];
    db.query(sql,params,(err,result)=>{
        if(err)
        {
            res.status(401).json({
                msg:'error occured',
                error:err
            });
        }
        else
        {
            res.status(200).json({
                movies:result
            });
        }
    });
});
module.exports=router;