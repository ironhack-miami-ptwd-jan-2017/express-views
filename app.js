const express = require('express');


const app = express();


app.use(express.static('public'));


  //              views/ folder
  //                |
app.set('views', 'views');
app.set('view engine', 'ejs');
  //                     |
  //        npm install ejs --save


app.get('/', (req, res, next) => {
  res.render('home-view.ejs');
    //             |
    //  views/home-view.ejs
});


app.get('/about', (req, res, next) => {
  res.render('about-view.ejs');
    //             |
    //  views/about-view.ejs
});


app.listen(3000);
