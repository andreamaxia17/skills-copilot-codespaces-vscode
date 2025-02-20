// Create web server
var express = require('express');
var app = express();
var fs = require('fs');

// Load data
var comments = JSON.parse(fs.readFileSync('comments.json', 'utf8'));

// Create new comment
app.post('/comments', function(req, res) {
    var comment = req.body;
    comments.push(comment);
    fs.writeFileSync('comments.json', JSON.stringify(comments));
    res.send('Comment added');
});

// Get all comments
app.get('/comments', function(req, res) {
    res.send(comments);
});

// Get comment by id
app.get('/comments/:id', function(req, res) {
    var id = req.params.id;
    res.send(comments[id]);
});

// Update comment by id
app.put('/comments/:id', function(req, res) {
    var id = req.params.id;
    var comment = req.body;
    comments[id] = comment;
    fs.writeFileSync('comments.json', JSON.stringify(comments));
    res.send('Comment updated');
});

// Delete comment by id
app.delete('/comments/:id', function(req, res) {
    var id = req.params.id;
    comments.splice(id, 1);
    fs.writeFileSync('comments.json', JSON.stringify(comments));
    res.send('Comment deleted');
});

// Start server
app.listen(3000, function() {
    console.log('Server started');
});