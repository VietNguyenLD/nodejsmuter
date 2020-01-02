const express = require('express');
const upload = require('./uploadConfig');

const app = express();
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req,res) => res.render('home'));
app.post('/singup',upload.single('profile'));
app.listen(3000, () => console.log('Server start')); 