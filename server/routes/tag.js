const router = require('express').Router();
const {getTags, newTag, getTag} = require('../controllers/tag');

router.get('/tags',getTags);
router.post('/tags', newTag);
router.get('/tags/:id', getTag);

module.exports = router;