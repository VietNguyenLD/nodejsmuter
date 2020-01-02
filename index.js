const express = require('express');
const upload = require('./uploadConfig');

const app = express();
app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req,res) => res.render('home'));
app.post('/singup',upload.single('profile'));
// handler_error
app.use((err, req, res, next) => {
    res.send(err.message);
});

app.listen(3000, () => console.log('Server start')); 