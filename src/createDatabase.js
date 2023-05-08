const mongoose = require("mongoose");
const subscriberModel = require("./models/subscribers");
const data = require("./data");

// Connect to DATABASE
const DATABASE_URL = "mongodb://127.0.0.1:27017";

mongoose.connect(DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("Database connected");
})
.catch((err) => {
  console.log("Error connecting to database", err);
});


async function refreshData() {
  try {
    await subscriberModel.deleteMany({}, { wtimeout: 30000 });

    console.log("Deleted all subscribers");
    const newSubscribers = await subscriberModel.insertMany(data);
    console.log(`Added ${newSubscribers.length} new subscribers`);
  } catch (err) {
    console.log("Error refreshing data", err);
  } finally {
    mongoose.disconnect();
    console.log("Disconnected from database");
  }
}

refreshData();
// const refreshAll = async () => {
//   await subscriberModel.deleteMany({});
//   // console.log(connection);
//   await subscriberModel.insertMany(data);
//   await mongoose.disconnect();
// };
// refreshAll();
