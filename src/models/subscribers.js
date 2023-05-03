const mongoose = require('mongoose');

// subscriber schema created for subscriber
// in that schema we can create three types name,subscribedChannel,subscribedDate
const susbcriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subscribedChannel: {
        type: String,
        required: true,
    },
    subscribedDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('Subscriber', susbcriberSchema);