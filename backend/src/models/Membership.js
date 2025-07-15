const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
    planName: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    duration: {
        type: String,
        required: true,
        enum: ['Monthly', 'Quarterly', 'Yearly']
    },
    features: {
        type: [String],
        required: true
    }
}, { timestamps: true });

const Membership = mongoose.model('Membership', membershipSchema);

module.exports = Membership;