const express = require('express');
const app = express(); 
const PORT= 5000 || process.env.PORT;
const expressLayouts = require('express-ejs-layouts');
app.use(express.static("public"))


app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set("layout","layouts/layout");


app.get('/',(req,res,next)=> {
    res.render("first");
})


app.listen(PORT,() => console.log(`Server connected to port ${PORT}`));



