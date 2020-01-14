const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Home',
    layout: 'unauthenticate'
  })
})

module.exports = router