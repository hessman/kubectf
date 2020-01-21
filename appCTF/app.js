const express = require('express')
const path = require('path')
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const app = express();
const port = process.env.PORT || 8080

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// body parser
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride('_method'))

// Routes
app.use('/', require('./routes/index'))
app.use('/', require('./routes/auth'))

// Server
app.listen(port, () => {
  console.log('Server started on port ' + port)
})