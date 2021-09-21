const express = require('express');
const app = express(); 
const PORT= 3000 || process.env.PORT;
const expressLayouts = require('express-ejs-layouts');
app.use(express.static("./public"))
const {presentation,vision,objectif,mission}=require('./datas/data')

app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set("layout","layouts/layout");
app.use("/faculte",require("./routes/faculte"));
app.use("/etudiant",require("./routes/etudiant"));

app.get('/',(req,res,next)=> {
    res.render("index",{presentation,vision:"",objectif:"",mission:""});
})
app.get('/about',(req,res,next)=> {
    res.render("about_section/about",{presentation,vision,objectif,mission});
})



app.listen(PORT,() => console.log(`Server connected to port ${PORT}`));



