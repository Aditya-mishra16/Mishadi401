const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/dynamicweb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("connection successful");

}).catch((error) => {
    console.log(error)
});