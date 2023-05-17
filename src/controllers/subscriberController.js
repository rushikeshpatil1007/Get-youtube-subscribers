const Subscriber = require("../models/subscribers");

// getsubcribersnames controller reponse with  all subscriber.
exports.getSubscribers = async (req, res) => {
  const subscribers = await Subscriber.find({});
  res.json(subscribers);
};

// getsubcribersnames controller reponse with subscriber having name and subcribe channel.
exports.getSubscriberNames = async (req, res) => {
  const subscribers = await Subscriber.find({}).select(
    "name subscribedChannel"
  );
  res.json(subscribers);
};

// getsubcribersnames controller reponse with subscriber by id  and subcribe channel and if not found below message will be send
exports.getSubscriberById = async (req, res) => {
  try {
    const subscriber = await Subscriber.findById(req.params.id);
     res.json(subscriber);
    
  } catch (error) {
     res.status(404).json({ message: "No Subscriber found related to this ID!" });
  }




};
