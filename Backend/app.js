const express = require('express');
const app = new express();

var port = process.env.PORT || 7000
const jwt = require('jsonwebtoken');

var LoginData = require("./src/models/logindata");
var RecipeData = require("./src/models/recipedata");


const cors = require('cors');
app.use(cors());
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(express.urlencoded({ extended: true }));

app.post('/register', (req, res) => {

    LoginData.find({ email: req.body.user.email }).then(data => {
        if (data[0]) {
            res.send({ "message": "email dupe" });
        }
        else {
            var user = LoginData(req.body.user);
            user.save();
            res.send({ "message": "success" });
        }
    });

});

app.post('/login', (req, res) => {
    var user = req.body.user;
    LoginData.find({ email:user.email }).then(data => {
        if (data[0]) {
            if (data[0].password == user.password) {
                res.send({ "message": "success" });
            }
            else {

                res.send({ "message": "Incorrect Password" });
            }
        }
        else {

            res.send({ "message": "Invalid Email" });
        }
    });

});

app.post('/getallrecipes', (req, res) => {
    RecipeData.find().then(data => {
        res.send(data);
    })
});

app.post('/getrecipe', (req, res) => {
    RecipeData.find({ _id: req.body.id }).then(data => {
        res.send(data[0]);
    });
});

app.post('/deleterecipe', (req, res) => {
    RecipeData.findByIdAndDelete({ _id: req.body.id }).then(data => {
        res.send({ "message": "success" });
    });
});

app.post('/addrecipe', (req, res) => {
    var recipe = RecipeData(req.body.recipe);
    recipe.save();
    res.send({ "message": "success" });
});

app.post('/editrecipe', (req, res) => {
    var recipe = req.body.recipe;
    RecipeData.findByIdAndUpdate({ _id: recipe._id }, recipe, function (err, result) {
        if (err) console.log(err)
        else {
            res.send({ "message": "success" });
        }
    });

});

app.get('/', function (req, res) {
    res.send('yes');
});

app.listen(port, function () {
    console.log('Backend listening at port ' + port);
});