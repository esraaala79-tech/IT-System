const roleMiddleware = (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied: admin only" });
    }

    next();
  } catch (error) {
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = roleMiddleware;