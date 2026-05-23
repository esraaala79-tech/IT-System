const Ticket = require('../models/Ticket'); // تأكدي أن مسار موديل التذاكر صح عندك

const getReportsStats = async (req, res) => {
  try {
    // 1. حساب الأرقام الحقيقية للكروت العلوية (لو مفيش تذاكر بيرجع 0)
    const totalTickets = await Ticket.countDocuments() || 0;
    const pendingTickets = await Ticket.countDocuments({ status: "pending" }) || 0;
    const inProgressTickets = await Ticket.countDocuments({ status: "in-progress" }) || 0;
    const resolvedTickets = await Ticket.countDocuments({ status: "resolved" }) || 0;

    // حساب نسبة الحل (Resolution Rate) وتجنب القسمة على صفر
    const resolutionRate = totalTickets > 0 ? Math.round((resolvedTickets / totalTickets) * 100) : 0;

    // 2. تجميع تذاكر الـ Status وتجهيزها للـ Pie Chart
    const statusGroup = await Ticket.aggregate([
      { $group: { _id: "$status", value: { $sum: 1 } } }
    ]) || [];
    
    // خريطة الألوان الموحدة للـ Charts
    const colorMap = { 
      "pending": "#ff9800",     // برتقالي
      "in-progress": "#2196f3", // أزرق
      "resolved": "#4caf50",    // أخضر
      "closed": "#9e9e9e"       // رمادي
    };

    // حماية الـ map بتشيك لو الـ _id موجود ولا لأ
    const statusData = statusGroup.map(item => ({
      name: item._id ? (item._id.charAt(0).toUpperCase() + item._id.slice(1)) : "Unknown",
      value: item.value || 0,
      color: item._id ? (colorMap[item._id.toLowerCase()] || "#8884d8") : "#8884d8"
    }));

    // 3. تجميع تذاكر الـ Priority وتجهيزها للـ Bar Chart
    const priorityGroup = await Ticket.aggregate([
      { $group: { _id: "$priority", count: { $sum: 1 } } }
    ]) || [];

    // حماية الـ map بتشيك لو الـ _id موجود ولا لأ
    const priorityData = priorityGroup.map(item => ({
      name: item._id ? (item._id.charAt(0).toUpperCase() + item._id.slice(1)) : "Unknown",
      count: item.count || 0
    }));

    // إرسال البيانات كاملة للفرونت إند
    res.status(200).json({
      metrics: { totalTickets, pendingTickets, inProgressTickets, resolutionRate },
      statusData,
      priorityData
    });

  } catch (error) {
    // عشان لو حصل أي حاجة تانية تطبع لكِ في الـ terminal بتاعة الباك إند بوضوح
    console.error("Error in ReportsController:", error);
    res.status(500).json({ 
      message: "Error fetching reports analytics data", 
      error: error.message 
    });
  }
};

module.exports = { getReportsStats };