import '/src/styles/theme.scss'
import Layout from './components/Layout/index'
// var express = require('express')

const app = document.getElementById('app')



// const app2 = express();

app.appendChild(Layout)

// app2.get('/', (req, res) =>
//     //res.send("<h3>Rotas no Express</h3><p>Rota '/'")
//     console.log("teste")
// );


init();


function init(){
    //Draw a square on screen.
var stage = new createjs.Stage('myCanvas');
var shape = new createjs.Shape();
shape.graphics.beginFill('red').drawRect(0, 0, 120, 120);
stage.addChild(shape);
stage.update();

var circle = new createjs.Shape();
circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
circle.x = 100;
circle.y = 100;
stage.addChild(circle);
stage.update();
}