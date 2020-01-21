const router = require('express').Router()

router.get('/register', (req, res, next) => {
  res.render('register', {
    title: 'Register to KubeCTF'
  })
})

module.exports = router