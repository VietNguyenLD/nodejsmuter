const express = require('express');
const multer = require('multer');
//dest chi cho quyen moi quyen luu o vi tri 
//// const upload = multer({dest: './public'});
//storage nhan vao mot objects, trong mot object co hai thuoc tinh destination 
// va filename note: chi co the truyen vao dest or storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, './public'),
    // filename: (req, file, cb) => cb(null,Date.now() + '.png') 
    // filename: (req, file, cb) => cb(null,file.originalname) luu vs ten file tren may nguoi dung
    filename:(req, file, cb) => {
        if(file.size >= 102400){
            return cb(null,'big-'+ file.originalname);
        }
        cb(null,'small-'+ file.originalname);
    }
});
const upload = multer({storage:storage});
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.get('/', (req,res) => res.render('home'));
app.post('/singup',upload.single('profile'));
app.listen(3000, () => console.log('Server start')); 