import React from 'react'
import { FaChartLine, FaChartPie, FaChartBar } from "react-icons/fa";
import { HiTrendingUp, HiUsers, HiChip } from "react-icons/hi";


const Analytics = () => {
    return (
        <section className="container mx-auto px-6 py-20 bg-white">
            <div className="text-center mb-12">
                {/* Small tag */}
                <div className="inline-block bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    Powerful Analytics
                </div>

                {/* H2 */}
                <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                    See Your Data Like Never Before
                </h2>

                {/* Description */}
                <p className="text-slate-600 max-w-2xl mx-auto">
                    Real-time dashboards, custom reports, and AI-driven insights to help you make better decisions faster.
                </p>
            </div>

            {/* Main Grid */}
            <div className="grid md:grid-cols-2 gap-12 items-center">

                {/* Left side - Stats Cards */}
                <div className="space-y-6">
                    {/* Card 1 */}
                    <div className="bg-gradient-to-r from-green-600 to-blue-100 p-6 rounded-xl shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-semibold text-slate-800">Monthly Growth</h3>
                            <HiTrendingUp className="text-green-500 text-2xl" />
                        </div>
                        <p className="text-3xl font-bold text-blue-600">+34.5%</p>
                        <p className="text-slate-500 text-sm mt-2">vs last month</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-gradient-to-r from-green-600 to-blue-100 p-6 rounded-xl shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-semibold text-slate-800">Active Users</h3>
                            <HiUsers className="text-blue-500 text-2xl" />
                        </div>
                        <p className="text-3xl font-bold text-blue-600">10,284</p>
                        <p className="text-slate-500 text-sm mt-2">+1,200 this week</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-gradient-to-r from-green-600 to-blue-100 p-6 rounded-xl shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-semibold text-slate-800">AI Accuracy</h3>
                            <HiChip className="text-purple-500 text-2xl" />
                        </div>
                        <p className="text-3xl font-bold text-blue-600">99.2%</p>
                        <p className="text-slate-500 text-sm mt-2">Predictive precision</p>
                    </div>
                </div>

                {/* Right side - Chart Icons Grid */}
                <div className="bg-blue-100 p-8 rounded-2xl border border-slate-200">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                            <FaChartLine className="text-blue-600 text-4xl mx-auto mb-3" />
                            <p className="font-semibold text-slate-700">Trend Analysis</p>
                            <p className="text-sm text-slate-500">Track patterns</p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                            <FaChartPie className="text-green-600 text-4xl mx-auto mb-3" />
                            <p className="font-semibold text-slate-700">Audience Split</p>
                            <p className="text-sm text-slate-500">Demographics</p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                            <FaChartBar className="text-purple-600 text-4xl mx-auto mb-3" />
                            <p className="font-semibold text-slate-700">Performance</p>
                            <p className="text-sm text-slate-500">Key metrics</p>
                        </div>

                        <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                            <HiTrendingUp className="text-orange-600 text-4xl mx-auto mb-3" />
                            <p className="font-semibold text-slate-700">Forecasting</p>
                            <p className="text-sm text-slate-500">Predict growth</p>
                        </div>
                    </div>

                    {/* Button inside Analytics */}
                    <div className="mt-8 text-center">
                        <button className="border-2 border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition font-semibold">
                            View Full Dashboard →
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Analytics