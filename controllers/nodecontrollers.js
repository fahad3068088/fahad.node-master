const express = require('express')
const router = express.Router()
const Article = require("../models/articleSchema");

const sds=(req, res) => {
    Article.find()
        .then((b) => {
            res.render("index", { mytitle: "المنتج", arrArticle: b });
        })
        .catch((err) => {
            console.log(err);
        });
}


module.exports = sds







