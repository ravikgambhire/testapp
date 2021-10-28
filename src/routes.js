const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});
router.get('/thanks', (req, res) => {
  res.render('thanks');
});

module.exports = router;
