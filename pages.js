const express = require('express');
const router = express.Router();
const keywordService = require('./api/keywords/service');

router.route('/about')
    .get((req,res)=>{
        res.render('templates/about',
        {
            message:'Hello EJS',
            values:['node','javascript','ejs']
    })
    });

router.route('/keywords')
    .get(async (req,res)=>{

        const keywords = await keywordService.search();
        res.render('templates/keywords',
        {
            message:'Hello EJS',
            values: keywords
        })
    })

module.exports = router;