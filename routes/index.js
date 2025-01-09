const router = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

router.get('/',lesson1Controller.davidrouter);
router.get('/samuel',lesson1Controller.samuelrouter);

module.exports = router;

