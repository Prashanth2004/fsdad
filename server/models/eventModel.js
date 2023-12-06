const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    date: {
      type: Date, // Assuming you want to store the date as a JavaScript Date object
      required: true,
    },
    time: {
      type: String, // You might want to use a specific library for handling time, e.g., moment.js
      required: true,
    },
    venue: {
      type: String,
      required: true,
    },
    registrationLink: {
      type: String,
      required: true,
    },
    alumniIncharge: {
      type: String,
      required: true,
    },
    team: {
      type: Number,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Event", eventSchema);
