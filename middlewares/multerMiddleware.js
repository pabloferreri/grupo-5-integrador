const multer = require('multer');
const path = require("path");


const multerDiskStorage = multer.diskStorage({

    destination: (req,file,cb)=>{
        cb(null,"./public/images/avatars");
    },
    filename: (req,file,cb)=>{
        let imageName = `${Date.now()}_img${path.extname(file.originalname)}`;
        cb(null,imageName);
    }

})

let fileUpload = multer({storage: multerDiskStorage});

module.exports = fileUpload;