
const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');

// Helper to wrap controller methods if needed (not strictly necessary here given simple sync logic, but good practice for async)
// For this simple task, we'll route directly.

// GET Routes
router.get('/', mainController.getHome);
router.get('/about', mainController.getAbout);
router.get('/contact', mainController.getContact);
router.get('/time', mainController.getDynamicData);

// POST Routes
router.post('/echo', mainController.postEcho);

module.exports = router;
