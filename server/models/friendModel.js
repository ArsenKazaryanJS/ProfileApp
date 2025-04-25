const mongoose = require("mongoose");

const FriendSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    minlength: 2,
    index: true,
  },
  username: {
    type: String,
    required: true,
    minlength: 2,
  },
  image: {
    type: String,
    default: function () {
      return this.gender === "female"
        ? "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane"
        : "https://api.dicebear.com/7.x/avataaars/svg?seed=John";
    },
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
},
email: {
  type: String,
  required: true,
  unique: true,
  validate: {
    validator: function (v) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
    },
    message: (props) => `${props.value} is not a valid email!`,
  },
},
}, { versionKey: false });

module.exports = mongoose.model("friends", FriendSchema);
