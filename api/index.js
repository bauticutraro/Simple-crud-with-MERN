const router = require('express').Router();
const bookRoute = require('./book/bookRoute');
// rotues
router.use('/books', bookRoute);

module.exports = router;
