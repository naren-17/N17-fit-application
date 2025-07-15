const express = require('express');
const router = express.Router();
const membershipController = require('../controllers/membershipController');
const { authMiddleware } = require('../middleware/authMiddleware');

// Route to create a new membership plan
router.post('/create', membershipController.createMembership);

// Route to get all membership plans
router.get('/', membershipController.getAllMemberships);

// Route to update a membership plan by ID
router.put('/:id', authMiddleware, membershipController.updateMembership);

// Route to delete a membership plan by ID
router.delete('/:id', authMiddleware, membershipController.deleteMembership);

module.exports = router;