const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Welcome to KubeCTF',
    layout: 'unauthenticate'
  })
})

module.exports = router