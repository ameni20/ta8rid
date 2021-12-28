// Import express module
const express = require('express');
// Import body-parser module
const bodyParser = require('body-parser');
// import mongoose module
const mongoose = require('mongoose');
// import bcrypt module
const bcrypt = require('bcrypt');
// import multer module
const multer = require('multer');
// import path module
const path = require('path');
// Create Express application
const app = express();

// import Models
const Plat = require('./models/plat');
const User = require('./models/user');
// Connect Application to DataBase
mongoose.connect('mongodb://localhost:27017/ta8ridDB');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/images', express.static(path.join('backend/images')))
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}

const storageConfig = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },
    // filename
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' + extension;
        cb(null, imgName);
    }
});

let plats = [
    { id: 1, name: 'Couscous', description: 'Plat TUN', price: 7 },
    { id: 2, name: 'Salade', description: 'Plat LIB', price: 5 },
    { id: 4, name: 'Pasta', description: 'Plat FR', price: 8 },
    { id: 5, name: 'Salade', description: 'Plat FR', price: 8 },
    { id: 3, name: 'Pasta', description: 'Plat FR', price: 10 }
];
// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

// business logic to get all plats
app.get("/api/plats", (req, res) => {
    console.log('Here into get all plats');
    Plat.find().then(
        (result) => {
            console.log('Here after find plats', result);
            res.status(200).json(
                {
                    plats: result,
                    message: "Here all plats"
                }
            );
        }
    )
});

// business logic to delete plat By ID
app.delete("/api/plats/:id", (req, res) => {
    console.log('Here into delete plat by ID', req.params.id);
    Plat.deleteOne({ _id: req.params.id }).then(
        (result) => {
            console.log('Result after delete', result);
            res.status(200).json({
                message: 'Object is deleted with success'
            });
        }
    )
});

// business logic to add plat to DB
app.post("/api/plats", multer({ storage: storageConfig }).single('img'), (req, res) => {
    console.log('Here into add Plat', req.body);
    console.log('file', req.file);
    console.log('req.protocol', req.protocol);
    console.log("req.get('host')", req.get('host'));
    let url = req.protocol + '://' + req.get('host');
    const platObj = new Plat({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        note: req.body.note,
        img: url + '/images/' + req.file.filename
    });
    platObj.save((err, result) => {
        console.log('Here result into save plat', result);
        if (err) {
            console.log('Here error with DB', err);
        } else {
            res.status(200).json({
                message: 'Added with success'
            });
        }
    });

});

// business logic to get plat by ID
app.get("/api/plats/:id", (req, res) => {
    console.log('Here into get plat by ID', req.params.id);
    // for (let i = 0; i < plats.length; i++) {
    //     if (plats[i].id == req.params.id) {
    //         res.status(200).json({
    //             message: 'Here object',
    //             plat: plats[i]
    //         });
    //         break;
    //     }
    // }
    Plat.findOne({ _id: req.params.id }).then(
        (result) => {
            console.log('Here result after get by ID', result);
            res.status(200).json({
                message: 'Here plat',
                plat: result
            })
        }
    )
});

// business logic to edit plat by ID
app.put("/api/plats/:id", (req, res) => {
    console.log("Here into edit plat by ID", req.params.id);
    console.log("Here into edit plat, object", req.body);
    Plat.updateOne({ _id: req.params.id }, req.body).then(
        (result) => {
            console.log('Result after update', result);
            res.status(200).json({
                message: "Plat edited with success"
            })
        }
    )
});

app.post("/api/plats/search", (req, res) => {
    console.log('Here into search', req.body);
    // search into plats all objects where name = req.body.name and price = req.body.price
    Plat.find({ name: req.body.name, price: req.body.price }).then(
        (result) => {
            console.log('Result by name and price', result);
            res.status(200).json({
                allPlats: result
            });
        }
    )

});
// business logic to signup
app.post("/api/users/signup", (req, res) => {
    console.log('Here into signup', req.body);
    bcrypt.hash(req.body.password, 10).then(
        (cryptedPwd) => {
            console.log('Pwd crypted', cryptedPwd);
            const user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: cryptedPwd,
                tel: req.body.tel,
                role: req.body.role
            });
            user.save((err, result) => {
                if (err) {
                    console.log('Here error', err.errors.email);
                    if (err.errors.email) {
                        res.status(200).json({
                            code: '0'
                        });
                    }
                } else {
                    res.status(200).json({
                        code: '1'
                    });
                }
            });
        }
    )
});

// business logic to login
app.post("/api/users/login", (req, res) => {
    console.log('Here user object', req.body);
    User.findOne({ email: req.body.email }).then(
        (emailResult) => {
            console.log('Here find user by email result', emailResult);
            if (!emailResult) {
                res.status(200).json({
                    message: '0'
                });
            }
            // compare aaaaaaaa with encrypted :$2b$10$A4cKG.vAS1rgLUUtQG8qruoE2Z1XDbCiqkgF1DpRjuMVhr59K2Kny
            return bcrypt.compare(req.body.pwd, emailResult.password);
        }).then((pwdResult) => {
            console.log('Here pwdResult', pwdResult);
            if (!pwdResult) {
                res.status(200).json({
                    message: '1'
                });
            }
            User.findOne({ email: req.body.email }).then(
                (finalResult) => {
                    let userToSend = {
                        fName: finalResult.firstName,
                        lName: finalResult.lastName,
                        role: finalResult.role,
                        id: finalResult._id,
                    }
                    res.status(200).json({
                        message: '2',
                        user: userToSend
                    })
                }
            )
        }
        )
});


module.exports = app;
