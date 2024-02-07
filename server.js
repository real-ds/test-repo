const express = require('express')
const app = express()
const articleRouter = require ('./routes/articles')

app.set('view engine','ejs')

app.use('/about', articleRouter)
app.use('/contact', articleRouter)


app.get('/',(req,res)=> {
    res.render('index')
})

app.get('/about/aboutme', (req,res)=>{
    res.render('aboutme')
})


app.listen(5000)

