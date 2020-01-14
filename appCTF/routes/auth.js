const router = require('express').Router()

router.get('/register', (req, res) => {
  res.render('register', {
    title: 'Register',
    layout: 'unauthenticate'
  })
})

module.exports = router