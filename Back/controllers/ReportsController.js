const Ticket = require('../models/Ticket'); 

const getReportsStats = async (req, res) => {
  try {
    const totalTickets = await Ticket.countDocuments() || 0;
    const pendingTickets = await Ticket.countDocuments({ status: "pending" }) || 0;
    const inProgressTickets = await Ticket.countDocuments({ status: "in-progress" }) || 0;
    const resolvedTickets = await Ticket.countDocuments({ status: "resolved" }) || 0;

    const resolutionRate = totalTickets > 0 ? Math.round((resolvedTickets / totalTickets) * 100) : 0;

    const statusGroup = await Ticket.aggregate([
      { $group: { _id: "$status", value: { $sum: 1 } } }
    ]) || [];
    
    const colorMap = { 
      "pending": "#ff9800",     
      "in-progress": "#2196f3", 
      "resolved": "#4caf50",    
      "closed": "#9e9e9e"      
    };

    const statusData = statusGroup.map(item => ({
      name: item._id ? (item._id.charAt(0).toUpperCase() + item._id.slice(1)) : "Unknown",
      value: item.value || 0,
      color: item._id ? (colorMap[item._id.toLowerCase()] || "#8884d8") : "#8884d8"
    }));

    const priorityGroup = await Ticket.aggregate([
      { $group: { _id: "$priority", count: { $sum: 1 } } }
    ]) || [];

    const priorityData = priorityGroup.map(item => ({
      name: item._id ? (item._id.charAt(0).toUpperCase() + item._id.slice(1)) : "Unknown",
      count: item.count || 0
    }));

    res.status(200).json({
      metrics: { totalTickets, pendingTickets, inProgressTickets, resolutionRate },
      statusData,
      priorityData
    });

  } catch (error) {
    console.error("Error in ReportsController:", error);
    res.status(500).json({ 
      message: "Error fetching reports analytics data", 
      error: error.message 
    });
  }
};

module.exports = { getReportsStats };