const express = require('express')
const path = require('path')
const hbs = require('express-handlebars')
const methodOverride = require('method-override')

const app = express();
const port = process.env.PORT || 8080

// View engine
app.set('view engine', 'hbs')
app.engine('.hbs', hbs({extname: '.hbs', defaultLayout: 'unauthenticate'}))

// body parser
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(methodOverride('_method'))

// Routes
app.use('/', require('./routes/index'))
// app.use('/', require('./routes/auth'))

// Server
app.listen(port, () => {
  console.log('Server started on port ' + port)
})