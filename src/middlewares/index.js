import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      //console.log(file)
      cb(null, `${Date.now()}-${file.originalname}`)
    }
})
export const upload = multer({ storage: storage })

export const middleware1 = (req, res, next) => {
    let rol = req.query.rol;
    if(rol == 'admin'){
        next()
    }else{
        res.send('No tenes permisos')
    }
}

export const middleware2 = (req, res, next) => {
    console.log('El usuario es admin')
    next()
}

