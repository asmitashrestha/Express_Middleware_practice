const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Watch = require('./model/Watch')


mongoose.connect('mongodb://127.0.0.1:27017/asmita')
  .then(() => console.log('Database Connected!'))
  .catch(err =>{
    console.log(err)
  })

app.get('.api/asmita',(req,res) =>{
    let watches = Watch.find({})
    .then(res =>{
        console.log(watches)
    })
    console.log(watches)
    res.send("mongoose used")
})


function checkAuthentication(req, res, next) {
    let logged_in = false;
    if (logged_in) {
        console.log("go to next middleware..");
        next();
    } else {
        res.status(401).send({
            msg: "user not logged in"
        })
    }
}

function isAdmin(req, res, next) {
    let is_admin = false;
    if (isAdmin) {
        next();
        console.log('user is admin');
    } else {
        res.status(403).send({
            msg: "Access denied...."
        })
    }
}

app.use(checkAuthentication);
app.use(isAdmin)


app.get('/api', (req, res) => {
    res.send("home page loaded")
})

app.get('/api/users', (req, res) => {
    res.send([
        {
            id: 1, name: "asmita shrestha", faculty: "CSIT"
        },
        {
            id: 2, name: "Ashok Shrestha", faculty: "BCA"
        },
        {
            id: 3, name: "Arya", faculty: "Nursing"
        },

    ])
})

app.listen(8000, () => {
    console.log("server started again")
})