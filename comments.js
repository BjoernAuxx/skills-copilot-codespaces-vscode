// Create web server
const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

//load comment model
const Comment = require('../models/comment');
const config = require('../config/database');

//add comment
router.post('/add', (req, res, next) => {
    let newComment = new Comment({
        text: req.body.text,
        user: req.body.user,
        post: req.body.post
    });
    
    Comment.addComment(newComment, (err, comment) => {
        if(err){
            res.json({success: false, msg: 'Failed to add comment'});
        } else {
            res.json({success: true, msg: 'Comment added'});
        }
    });
}   );
