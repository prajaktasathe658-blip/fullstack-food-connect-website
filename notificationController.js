const Notification = require("../models/Notification");


// Get notifications
const getNotifications = async (req, res) => {
    try {

        const notifications =
            await Notification.find({
                user: req.user.id
            })
                .sort({ createdAt: -1 })
                .limit(30);

        res.json(notifications);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


// Number of unread notifications
const getUnreadCount = async (req, res) => {
    try {

        const count =
            await Notification.countDocuments({
                user: req.user.id,
                read: false
            });

        res.json({
            count
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


// Mark notification as read
const markAsRead = async (req, res) => {
    try {

        const notification =
            await Notification.findOneAndUpdate(
                {
                    _id: req.params.id,
                    user: req.user.id
                },
                {
                    read: true
                },
                {
                    new: true
                }
            );

        if (!notification) {
            return res.status(404).json({
                message: "Notification not found"
            });
        }

        res.json(notification);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


// Mark all as read
const markAllAsRead = async (req, res) => {
    try {

        await Notification.updateMany(
            {
                user: req.user.id,
                read: false
            },
            {
                read: true
            }
        );

        res.json({
            message: "All notifications marked as read"
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }
};


module.exports = {
    getNotifications,
    getUnreadCount,
    markAsRead,
    markAllAsRead
};