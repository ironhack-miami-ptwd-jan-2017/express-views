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


app.get('/counting', (req, res, next) => {
  res.render('counting-view.ejs');
});


const citiesList = [
  'Paris', 'Ho Chi Minh City', 'Madrid',
  'Warsaw', 'Moscow', 'Toronto'
];

app.get('/cities', (req, res, next) => {
  res.render(
    'cities-view.ejs',
    {
      cities: citiesList,
      name: 'Izzy Ironside',
      age: 30
    }
  );
});


const foodsList = ['pizza', 'veal parmigiana', 'popcorn'];

app.get('/foods', (req, res, next) => {
  res.render('foods-view.ejs', { foods: foodsList });
});


app.listen(3000);
