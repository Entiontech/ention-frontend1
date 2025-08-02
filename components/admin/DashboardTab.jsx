import React from 'react';
import { 
  FaDollarSign,
  FaShoppingCart,
  FaUsers,
  FaStar,
  FaArrowUp,
  FaArrowDown
} from 'react-icons/fa';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts';

// Custom Tooltip for PieChart
const CustomPieTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, sales, percent } = payload[0].payload;
    return (
      <div style={{ background: '#222', color: '#fff', padding: 10, borderRadius: 8 }}>
        <div><strong>{name}</strong></div>
        <div>Units Sold: {sales}</div>
        <div>Percentage: {(percent * 100).toFixed(1)}%</div>
      </div>
    );
  }
  return null;
};

const DashboardTab = ({ stats, revenueData, productSalesData, COLORS }) => {
  // Calculate total sales for summary
  const totalSales = productSalesData.reduce((sum, entry) => sum + entry.sales, 0);

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Total Revenue"
          value={`₹${stats.totalRevenue.toLocaleString()}`}
          icon={FaDollarSign}
          color="bg-green-500"
          change="+12.5%"
          changeType="positive"
        />
        <StatCard
          title="Total Orders"
          value={stats.totalOrders}
          icon={FaShoppingCart}
          color="bg-blue-500"
          change="+8.2%"
          changeType="positive"
        />
        <StatCard
          title="Total Customers"
          value={stats.totalCustomers}
          icon={FaUsers}
          color="bg-purple-500"
          change="+15.3%"
          changeType="positive"
        />
        <StatCard
          title="Total Reviews"
          value={stats.totalReviews}
          icon={FaStar}
          color="bg-yellow-500"
          change="+5.7%"
          changeType="positive"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Product Sales Chart */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Sales</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={productSalesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => `₹${value.toLocaleString()}`} />
              <Legend />
              <Bar dataKey="revenue" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Sales Distribution</h3>
        {/* Legend above */}
        <div className="flex justify-start mb-4">
          <PieChart width={600} height={40}>
            <Pie
              data={productSalesData}
              dataKey="sales"
              nameKey="name"
              outerRadius={1}
              fill="transparent"
            >
              {productSalesData.map((entry, index) => (
                <Cell key={`cell-legend-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend
              layout="horizontal"
              align="left"
              verticalAlign="middle"
              iconType="circle"
              wrapperStyle={{
                color: '#222',
                fontSize: 16,
                position: 'relative',
                left: 0,
                top: 0,
                padding: 0,
                marginLeft: 24,
              }}
            />
          </PieChart>
        </div>
        {/* Chart and summary row */}
        <div className="flex flex-row items-center justify-center w-full" style={{ minHeight: 400 }}>
          {/* Summary - left */}
          <div
            className="flex flex-col gap-2"
            style={{
              minWidth: 180,
              maxWidth: 240,
              borderRadius: 8,
              padding: '12px 16px',
              color: '#fff',
              fontSize: 16,
              flex: '0 0 220px',
            }}
          >
            {productSalesData.map((entry, idx) => (
              <div
                key={entry.name}
                className="flex items-center gap-3 py-1 px-1 rounded"
                style={{
                  borderLeft: `6px solid ${COLORS[idx % COLORS.length]}`,
                }}
              >
                {/* Color dot */}
                <span
                  style={{
                    display: 'inline-block',
                    width: 14,
                    height: 14,
                    borderRadius: '50%',
                    background: COLORS[idx % COLORS.length],
                    marginRight: 8,
                  }}
                />
                <span style={{ fontWeight: 600, color: COLORS[idx % COLORS.length], minWidth: 90 }}>
                  {entry.name}
                </span>
                <span style={{ fontWeight: 500, color: '#222', marginLeft: 8 }}>
                  {entry.sales} units
                </span>
                <span style={{ color: '#ffd700', fontWeight: 500, marginLeft: 8 }}>
                  ({((entry.sales / totalSales) * 100).toFixed(1)}%)
                </span>
              </div>
            ))}
          </div>
          {/* Pie Chart - center and large */}
          <div style={{ flex: '1 1 0', display: 'flex', justifyContent: 'center' }}>
            <ResponsiveContainer width={500} height={400}>
              <PieChart>
                <Pie
                  data={productSalesData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => (
                    <tspan style={{ fill: '#fff' }}>{`${name} ${(percent * 100).toFixed(0)}%`}</tspan>
                  )}
                  outerRadius={150}
                  fill="#8884d8"
                  dataKey="sales"
                >
                  {productSalesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomPieTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

// Stat Card Component
const StatCard = ({ title, value, icon: Icon, color, change, changeType }) => (
  <div className="bg-white overflow-hidden shadow rounded-lg">
    <div className="p-5">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <Icon className={`h-6 w-6 text-white ${color}`} />
        </div>
        <div className="ml-5 w-0 flex-1">
          <dl>
            <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
            <dd className="text-lg font-medium text-gray-900">{value}</dd>
          </dl>
        </div>
      </div>
    </div>
    <div className="bg-gray-50 px-5 py-3">
      <div className="text-sm">
        <div className={`flex items-center ${
          changeType === 'positive' ? 'text-green-600' : 'text-red-600'
        }`}>
          {changeType === 'positive' ? (
            <FaArrowUp className="h-3 w-3 mr-1" />
          ) : (
            <FaArrowDown className="h-3 w-3 mr-1" />
          )}
          <span>{change}</span>
        </div>
      </div>
    </div>
  </div>
);

export default DashboardTab; 