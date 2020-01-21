const router = require('express').Router()

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Welcome to KubeCTF',
  })
})

module.exports = router