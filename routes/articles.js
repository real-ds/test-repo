const express = require('express')
const router = express.Router()


router.get('/aboutme',(req,res) => {
    res.render('aboutme')
});


router.get('/contactme',(req,res) => {
    res.render('contactme')
})

module.exports = router