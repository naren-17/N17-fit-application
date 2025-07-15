const Membership = require('../models/Membership');

// Create a new membership plan
exports.createMembership = async (req, res) => {
    try {
        const { planName, price, duration } = req.body;
        const newMembership = new Membership({ planName, price, duration });
        await newMembership.save();
        res.status(201).json({ message: 'Membership plan created successfully', newMembership });
    } catch (error) {
        res.status(500).json({ message: 'Error creating membership plan', error });
    }
};

// Get all membership plans
exports.getAllMemberships = async (req, res) => {
    try {
        const memberships = await Membership.find();
        res.status(200).json(memberships);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching membership plans', error });
    }
};

// Update a membership plan
exports.updateMembership = async (req, res) => {
    try {
        const { id } = req.params;
        const { planName, price, duration } = req.body;
        const updatedMembership = await Membership.findByIdAndUpdate(id, { planName, price, duration }, { new: true });
        res.status(200).json({ message: 'Membership plan updated successfully', updatedMembership });
    } catch (error) {
        res.status(500).json({ message: 'Error updating membership plan', error });
    }
};

// Delete a membership plan
exports.deleteMembership = async (req, res) => {
    try {
        const { id } = req.params;
        await Membership.findByIdAndDelete(id);
        res.status(200).json({ message: 'Membership plan deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting membership plan', error });
    }
};