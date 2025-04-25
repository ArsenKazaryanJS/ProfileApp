const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const UserSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true, minlength: 2, index: true },
    username: { type: String, required: true, minlength: 2 },
    address: { type: String, required: false, minlength: 2 },
    age: { type: Number, required: true },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
      set: (v) => v.toLowerCase(),
    },
    image: {
      type: String,
      default: function () {
        return this.gender === "female"
          ? "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane"
          : "https://api.dicebear.com/7.x/avataaars/svg?seed=John";
      },
    },
    avatar: { type: String },
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
    password: { type: String, required: true, minlength: 6 },
    token: { type: String },
    active: { type: Boolean, default: false },
    friends: [
      {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "friends"
      },
    ],
  },
  { versionKey: false }
);

// Hash password before saving
UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return;
  this.password = await bcryptjs.hash(this.password, 10);
});

// Set registration token
UserSchema.post("save", async function () {
  this.token = jwt.sign({ id: this._id }, process.env.REGISTER_TOKEN_KEY, {
    expiresIn: "1d",
  });
});

// Login method
UserSchema.methods.validUser = async function () {
  await this.constructor.updateOne(
    { _id: this._id },
    { $set: { active: true } }
  );
  const { password, ...userData } = this._doc;
  const token = jwt.sign({ id: this._id }, process.env.LOGIN_TOKEN_KEY, {
    expiresIn: "1d",
  });
  return { ...userData, token };
};

module.exports = mongoose.model("users", UserSchema);
