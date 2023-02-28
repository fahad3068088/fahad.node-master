
const aaav = require('../controllers/nodecontrollers')
const express = require('express')
const router = express.Router()
const Article = require("../models/articleSchema");







router.get('/', function (req, res) {
    res.redirect('/a')
})
router.get('/a', function (req, res) {
    res.render("fahad", { title: 'ادارة فضاء الديجيتال' })
})

router.get("/b",aaav

);




router.post('/a', function (req, res) {
    const article = new Article(req.body);

    article
        .save()
        .then(console.log(req.body))
        .then(result => {
            res.redirect("/b");
        })
        .catch((err) => { console.log(err) })
})

router.get("/asd/:a", (req, res) => {
    Article.findById(req.params.a)
        .then((a) => {
            res.render("asd", { mytitle: "المنتج", aArticle: a });

        })
        .then((s) => {
            console.log("صفحة الاظهار");
        })
})






router.delete("/asd/:a", (req, res) => {
    Article.findByIdAndDelete(req.params.a)
        .then((e) => { res.json({ mayname: "/a" }) })
        .catch((err) => {
            console.log(err);
        });
});






module.exports = router

