const express= require('express');

const router= express.Router();

router.get('/administration/',(req,res,next)=> {
    res.render("faculte_section/administration");
})
router.get('/agronomie/',(req,res,next)=> {
    res.render("faculte_section/agronomie");
})
router.get('/informatique/',(req,res,next)=> {
    res.render("faculte_section/informatique");
})
router.get('/infirmiere/',(req,res,next)=> {
    res.render("faculte_section/infirmiere");
})
router.get('/theologie/',(req,res,next)=> {
    res.render("faculte_section/theologie");
})




module.exports =router;