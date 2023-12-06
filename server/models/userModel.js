const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  batchYear: {
    type: Number,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  rollNumber: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "unverified", // Set the default value here
  },
});

// signup method without bcrypt
userSchema.statics.signup = async function (email, password, fullName, phoneNumber, batchYear, department, rollNumber) {
  // validation
  if (!email || !password || !fullName || !phoneNumber || !batchYear || !department || !rollNumber) {
    throw Error("All fields must be filled!");
  }

  // check the email validation
  if (!validator.isEmail(email)) {
    throw Error("Invalid Email");
  }

  const exist = await this.findOne({ email });

  if (exist) {
    throw Error("Email already used!");
  }

  // create a user without encrypting password
  const user = await this.create({
    email,
    password,
    fullName,
    phoneNumber,
    batchYear,
    department,
    rollNumber,
  });

  return user;
};

// login method without bcrypt
userSchema.statics.login = async function (email, password) {
  // validation
  if (!email || !password) {
    throw Error("All fields must be filled!");
  }

  const user = await this.findOne({ email });

  if (!user) {
    throw Error("Incorrect Email!");
  }

  if (user.password !== password) {
    throw Error("Incorrect Password!");
  }

  return user;
};

module.exports = mongoose.model("User", userSchema);
