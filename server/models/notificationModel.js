const mongoose = require("mongoose");

const notificationSchema = mongoose.Schema(
  {
    sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    content: { type: String },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },
    visualized: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

const Notification = mongoose.model("Notification", notificationSchema);

module.exports = Notification;
