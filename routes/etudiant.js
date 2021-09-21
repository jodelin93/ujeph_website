const express= require('express');

const router= express.Router();

router.get('/futur_etudiant/',(req,res,next)=> {
    res.render("pages/futur_etudiant");
})





module.exports =router;