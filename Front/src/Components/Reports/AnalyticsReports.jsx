import React, { useEffect, useState } from "react";
import axios from "axios";
import ReportCard from "./ReportCard/ReportCard";
import ReportChart from "./ReportChart/ReportChart";
import { 
  PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  LineChart, Line 
} from "recharts";

const weeklyData = [
  { day: "Mon", tickets: 4 },
  { day: "Tue", tickets: 8 },
  { day: "Wed", tickets: 2 },
  { day: "Thu", tickets: 6 },
];

export default function Reports() {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/reports");
        setAnalyticsData(res.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching reports data:", err);
        setError("Failed to load reports data");
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="container-fluid p-4 bg-light min-vh-100 d-flex justify-content-center align-items-center">
        <div className="fw-bold text-secondary fs-4">Loading Analytics & Reports...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container-fluid p-4 bg-light min-vh-100 d-flex justify-content-center align-items-center">
        <div className="text-danger fw-bold fs-5">{error}</div>
      </div>
    );
  }

  const metrics = analyticsData?.metrics || { totalTickets: 0, pendingTickets: 0, inProgressTickets: 0, resolutionRate: 0 };
  const statusData = analyticsData?.statusData || [];
  const priorityData = analyticsData?.priorityData || [];

  return (
    <div className="container-fluid p-4 bg-light min-vh-100">
      <h2 className="fw-bold mb-4 text-dark">Analytics & Reports</h2>

      {/* 1. صف الـ Cards العلوية (داتا حقيقية من الباك إند) */}
      <div className="row g-3 mb-4">
        <ReportCard title="Total Tickets" value={metrics.totalTickets} textColor="text-dark" />
        <ReportCard title="Pending" value={metrics.pendingTickets} textColor="text-warning" />
        <ReportCard title="In Progress" value={metrics.inProgressTickets} textColor="text-primary" />
        <ReportCard title="Resolution Rate" value={`${metrics.resolutionRate}%`} textColor="text-success" />
      </div>

      {/* 2. صف الـ Charts (داتا حقيقية + داتا وهمية للثالث) */}
      <div className="row g-4">
        
        {/* التشارت الأول: Status */}
        <ReportChart title="Tickets by Status">
          {statusData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={statusData} cx="50%" cy="45%" outerRadius={75} dataKey="value">
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" align="center" iconType="square" />
              </PieChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-100 d-flex justify-content-center align-items-center text-muted">No status data available</div>
          )}
        </ReportChart>

        {/* التشارت الثاني: Priority */}
        <ReportChart title="Tickets by Priority">
          {priorityData.length > 0 ? (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={priorityData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} />
                <YAxis allowDecimals={false} axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="count" fill="#1e75d0" radius={[2, 2, 0, 0]} barSize={28} />
              </BarChart>
            </ResponsiveContainer>
          ) : (
            <div className="h-100 d-flex justify-content-center align-items-center text-muted">No priority data available</div>
          )}
        </ReportChart>

        {/* 👈 التشارت الثالث: اللي كان ناقصك وضفتهولك هنا ومربوط بالـ weeklyData */}
        <ReportChart title="Weekly Ticket Trend">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={weeklyData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="day" axisLine={false} tickLine={false} />
              <YAxis allowDecimals={false} axisLine={false} tickLine={false} />
              <Tooltip />
              <Line type="monotone" dataKey="tickets" stroke="#1e75d0" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </ReportChart>

      </div>
    </div>
  );
}