const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const userinfo_controller = require('../controllers/userinfo');

router.post('/create', userinfo_controller.userinfo_create);

router.get('/:id', userinfo_controller.userinfo_details);

router.put('/:id/update', userinfo_controller.userinfo_update);

router.delete('/:id/delete', userinfo_controller.userinfo_delete);

module.exports = router;