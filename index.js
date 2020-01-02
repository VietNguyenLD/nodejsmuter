const express = require('express');
const multer = require('multer');
const upload = multer({dest: './public'});
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req,res) => res.render('home'));
// app.post('/signup', parser, (req,res) => {
//     res.send(req.body);
// });
app.post('/singup',upload.single('profile'));
app.listen(3000, () => console.log('Server start')); 