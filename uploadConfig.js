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
function fileFilter (req, file, cb){
    const {mimetype} = file;
    if(mimetype === 'image/png' || mimetype === 'image/jpeg')
        return cb(null, true);
    cb(new Error('File khong dung dinh dang'));
}
const limit = { fileSize:102400 };
const upload = multer({storage:storage, limits:limit, fileFilter});

module.exports =upload;