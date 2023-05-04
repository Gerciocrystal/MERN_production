const Notification = require("../models/notificationModel");
const aysncHandler = require("express-async-handler");
const User = require("../models/userModel");
exports.createNotification = aysncHandler(async (req, res) => {
  const { content, chat } = req.body;
  console.log(content);
  if (!content || !chat) {
    console.log("Invalid data passed into reques");

    return res.sendStatus(400);
  }

  var newNotification = {
    sender: req.user._id,
    chat: chat._id,
    content: content,
  };

  try {
    var notification = await Notification.create(newNotification);

    notification = await notification.populate("sender", "name pic");
    notification = await notification.populate("chat");

    notification = await User.populate(notification, {
      path: "chat.users",
      select: "name pic email",
    });
    console.log(notification);
  } catch (error) {
    console.log(error);
    res.status(400);
    throw new Error("Falha no processo de envio de mensagem");
  }
});
