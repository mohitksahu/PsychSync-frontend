import React from 'react';
import { useTranslation } from 'react-i18next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AdminDashboard = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-12 space-y-10">
  <h1 className="text-3xl font-bold mb-6 mt-8">{t('admin_dashboard.title')}</h1>
        <p className="mb-8 text-muted-foreground">{t('admin_dashboard.intro')}</p>

        {/* Customizable Widgets */}
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span role="img" aria-label="widgets">🧩</span> Customizable Widgets
          </h2>
          <div className="flex gap-4 mb-4">
            <button className="bg-blue-200 px-3 py-1 rounded hover:bg-blue-300 transition">Upcoming Sessions</button>
            <button className="bg-green-200 px-3 py-1 rounded hover:bg-green-300 transition">Alerts</button>
            <button className="bg-yellow-200 px-3 py-1 rounded hover:bg-yellow-300 transition">Mood Trends</button>
          </div>
          <div className="flex gap-4">
            <div className="bg-blue-50 rounded p-4 flex-1 min-w-[220px]">
              <div className="flex items-center gap-2 mb-2"><img src="https://img.icons8.com/color/48/000000/calendar--v1.png" alt="calendar" className="w-6 h-6"/> <span className="font-semibold">Next Session</span></div>
              <div className="text-sm">Amit Kumar with Dr. Sharma</div>
              <div className="text-xs text-gray-500">Tomorrow, 10:00 AM</div>
            </div>
            <div className="bg-green-50 rounded p-4 flex-1 min-w-[220px]">
              <div className="flex items-center gap-2 mb-2"><img src="https://img.icons8.com/color/48/000000/alarm.png" alt="alert" className="w-6 h-6"/> <span className="font-semibold">Active Alerts</span></div>
              <div className="text-sm text-red-600">2 users flagged for crisis</div>
              <div className="text-xs text-gray-500">Immediate action required</div>
            </div>
            <div className="bg-yellow-50 rounded p-4 flex-1 min-w-[220px]">
              <div className="flex items-center gap-2 mb-2"><img src="https://img.icons8.com/color/48/000000/combo-chart--v1.png" alt="mood" className="w-6 h-6"/> <span className="font-semibold">Mood Trend</span></div>
              <div className="w-full h-8 bg-gray-200 rounded-full mb-1">
                <div className="bg-green-400 h-8 rounded-full" style={{width:'75%'}}></div>
              </div>
              <div className="text-xs text-gray-500">Overall mood: Improving</div>
            </div>
          </div>
        </section>


        {/* Dynamic Charts & Graphs */}
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span role="img" aria-label="chart">📊</span> Dynamic Charts & Graphs
          </h2>
          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[250px]">
              <div className="font-semibold mb-1 flex items-center gap-2">Mood Trends <span className="text-xs text-gray-400" title="Shows average mood over the last week">ⓘ</span></div>
              <img src="https://quickchart.io/chart?c={type:'line',data:{labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],datasets:[{label:'Mood',data:[2,3,4,3,5,4,5],borderColor:'green',fill:false}]}}" alt="Mood Trends Chart" className="w-full h-32 object-contain bg-white rounded"/>
            </div>
            <div className="flex-1 min-w-[250px]">
              <div className="font-semibold mb-1 flex items-center gap-2">Session Attendance <span className="text-xs text-gray-400" title="Attendance for all sessions this month">ⓘ</span></div>
              <img src="https://quickchart.io/chart?c={type:'bar',data:{labels:['Wk1','Wk2','Wk3','Wk4'],datasets:[{label:'Attendance',data:[20,18,22,19],backgroundColor:'blue'}]}}" alt="Session Attendance Chart" className="w-full h-32 object-contain bg-white rounded"/>
            </div>
            <div className="flex-1 min-w-[250px]">
              <div className="font-semibold mb-1 flex items-center gap-2">Counselor Workload <span className="text-xs text-gray-400" title="Number of sessions per counselor">ⓘ</span></div>
              <img src="https://quickchart.io/chart?c={type:'pie',data:{labels:['Dr. Sharma','Dr. Patel','Priya'],datasets:[{data:[12,8,10],backgroundColor:['#60a5fa','#34d399','#fbbf24']}]} }" alt="Counselor Workload Chart" className="w-full h-32 object-contain bg-white rounded"/>
            </div>
          </div>
        </section>


        {/* Interactive Map of Users (Optional) */}
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span role="img" aria-label="map">🗺️</span> User Map (Demo)
          </h2>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/India_location_map.svg/800px-India_location_map.svg.png" alt="User Map" className="w-full h-48 object-cover rounded mb-2"/>
          <div className="flex gap-2 text-xs text-gray-600"><span className="w-3 h-3 bg-blue-500 rounded-full inline-block"></span> Delhi <span className="w-3 h-3 bg-green-500 rounded-full inline-block ml-4"></span> Mumbai <span className="w-3 h-3 bg-yellow-500 rounded-full inline-block ml-4"></span> Bangalore</div>
        </section>






        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span role="img" aria-label="tools">🔒</span> Smart Admin Tools
          </h2>
          {/* Role-based Access */}
          <div className="mb-4">
            <label className="font-semibold mr-2">Role-based View:</label>
            <select className="border rounded px-2 py-1">
              <option>Admin</option>
              <option>Counselor</option>
              <option>Researcher</option>
            </select>
          </div>
          {/* Anonymous Data Insights */}
          <div className="mb-4">
            <div className="font-semibold mb-1">Anonymous Data Insights</div>
            <div className="w-full h-20 bg-gray-100 rounded flex items-center justify-center text-gray-400">[Anonymous Data Chart]</div>
          </div>
          {/* Secure Notes for Counselors */}
          <div className="mb-4">
            <div className="font-semibold mb-1">Secure Notes (Counselor Only)</div>
            <textarea className="w-full border rounded p-2" placeholder="Enter private notes..."></textarea>
          </div>
          {/* Audit Logs */}
          <div className="mb-4">
            <div className="font-semibold mb-1">Audit Logs</div>
            <ul className="text-xs bg-gray-50 rounded p-2">
              <li>09/25/2025 10:12 - Admin viewed user list</li>
              <li>09/25/2025 10:15 - Counselor added session note</li>
              <li>09/25/2025 10:20 - Researcher exported anonymous data</li>
            </ul>
          </div>
        </section>
        {/* User Management */}
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span role="img" aria-label="users">👥</span> {t('user_dashboard.user_management.title')}
          </h2>
          {/* User Table Sample */}
          <div className="overflow-x-auto mb-4">
            <table className="min-w-full text-sm text-left border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-3 py-2">Name</th>
                  <th className="px-3 py-2">Role</th>
                  <th className="px-3 py-2">Progress</th>
                  <th className="px-3 py-2">Therapist</th>
                  <th className="px-3 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-3 py-2">Amit Kumar</td>
                  <td className="px-3 py-2">Patient</td>
                  <td className="px-3 py-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-green-500 h-2.5 rounded-full" style={{width:'70%'}}></div>
                    </div>
                  </td>
                  <td className="px-3 py-2">
                    <select className="border rounded px-2 py-1">
                      <option>Dr. Sharma</option>
                      <option>Dr. Patel</option>
                    </select>
                  </td>
                  <td className="px-3 py-2 space-x-2">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded">Remove</button>
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2">Priya Singh</td>
                  <td className="px-3 py-2">Counselor</td>
                  <td className="px-3 py-2">
                    <div className="w-32 bg-gray-200 rounded-full h-2.5">
                      <div className="bg-yellow-400 h-2.5 rounded-full" style={{width:'40%'}}></div>
                    </div>
                  </td>
                  <td className="px-3 py-2">
                    <select className="border rounded px-2 py-1">
                      <option>Dr. Sharma</option>
                      <option>Dr. Patel</option>
                    </select>
                  </td>
                  <td className="px-3 py-2 space-x-2">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button>
                    <button className="bg-red-500 text-white px-2 py-1 rounded">Remove</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Session Management */}
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span role="img" aria-label="calendar">📅</span> {t('user_dashboard.session_management.title')}
          </h2>
          {/* Calendar Sample */}
          <div className="mb-4">
            <div className="bg-gray-50 rounded p-4 inline-block">
              <div className="font-semibold mb-2">September 2025</div>
              <div className="grid grid-cols-7 gap-1 text-center">
                <div className="font-bold">S</div><div className="font-bold">M</div><div className="font-bold">T</div><div className="font-bold">W</div><div className="font-bold">T</div><div className="font-bold">F</div><div className="font-bold">S</div>
                <div className="text-gray-300">31</div><div>1</div><div>2</div><div className="bg-blue-200 rounded">3</div><div>4</div><div>5</div><div>6</div>
                <div>7</div><div>8</div><div>9</div><div>10</div><div className="bg-green-200 rounded">11</div><div>12</div><div>13</div>
                <div>14</div><div>15</div><div>16</div><div>17</div><div>18</div><div>19</div><div>20</div>
                <div>21</div><div>22</div><div>23</div><div>24</div><div>25</div><div>26</div><div>27</div>
                <div>28</div><div>29</div><div>30</div><div className="text-gray-300">1</div><div className="text-gray-300">2</div><div className="text-gray-300">3</div><div className="text-gray-300">4</div>
              </div>
              <div className="mt-2 text-xs text-gray-500">Blue: Scheduled, Green: Completed</div>
            </div>
          </div>
          {/* Reminder Sample */}
          <div className="mb-4 flex gap-4">
            <button className="bg-blue-500 text-white px-3 py-1 rounded flex items-center gap-2"><span>📧</span>Email Reminder</button>
            <button className="bg-green-500 text-white px-3 py-1 rounded flex items-center gap-2"><span>📱</span>SMS Reminder</button>
            <button className="bg-teal-500 text-white px-3 py-1 rounded flex items-center gap-2"><span>🟢</span>WhatsApp Reminder</button>
          </div>
          {/* Attendance Sample */}
          <div className="mb-4">
            <ul className="flex gap-4">
              <li className="flex items-center gap-2"><input type="checkbox" checked readOnly className="accent-green-500"/> Amit Kumar <span className="text-xs text-green-600">(Present)</span></li>
              <li className="flex items-center gap-2"><input type="checkbox" className="accent-red-500"/> Priya Singh <span className="text-xs text-red-600">(Absent)</span></li>
            </ul>
          </div>
        </section>

        {/* Psychological Assessments */}
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span role="img" aria-label="test">📝</span> Psychological Assessments
          </h2>
          <div className="mb-4 flex gap-4">
            <input type="file" className="border rounded p-2" />
            <button className="bg-purple-600 text-white px-4 py-2 rounded">Upload Assessment</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded">Manage Tests</button>
          </div>
          <div className="mb-4">
            <img src="https://quickchart.io/chart?c={type:'bar',data:{labels:['PHQ-9','GAD-7','MBTI','GHQ'],datasets:[{label:'Avg Score',data:[12,8,18,10],backgroundColor:['#a78bfa','#f472b6','#60a5fa','#34d399']}]} }" alt="Assessment Results" className="w-full h-40 object-contain bg-white rounded"/>
            <div className="text-xs text-gray-500 mt-1">Average scores for each assessment</div>
          </div>
          <div className="mb-4">
            <div className="w-full h-8 bg-gray-200 rounded-full">
              <div className="bg-green-500 h-8 rounded-full" style={{width:'72%'}}></div>
            </div>
            <div className="text-xs text-gray-500 mt-1">Improvement: 72% (last 3 months)</div>
          </div>
        </section>

        {/* Content Management */}
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span role="img" aria-label="content">📚</span> Content Management
          </h2>
          <div className="mb-4 flex gap-4">
            <input type="file" className="border rounded p-2" />
            <button className="bg-cyan-600 text-white px-4 py-2 rounded">Upload Blog</button>
            <button className="bg-pink-600 text-white px-4 py-2 rounded">Upload Audio</button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded">Upload Guide</button>
          </div>
          <div className="mb-4">
            <table className="min-w-full text-sm text-left border">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-3 py-2">Title</th>
                  <th className="px-3 py-2">Type</th>
                  <th className="px-3 py-2">Status</th>
                  <th className="px-3 py-2">Visibility</th>
                  <th className="px-3 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-3 py-2">Mindfulness Basics</td>
                  <td className="px-3 py-2">Blog</td>
                  <td className="px-3 py-2 text-green-600">Published</td>
                  <td className="px-3 py-2"><input type="checkbox" checked readOnly className="accent-green-500"/></td>
                  <td className="px-3 py-2"><button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button></td>
                </tr>
                <tr>
                  <td className="px-3 py-2">Relaxation Audio 1</td>
                  <td className="px-3 py-2">Audio</td>
                  <td className="px-3 py-2 text-yellow-600">Draft</td>
                  <td className="px-3 py-2"><input type="checkbox" className="accent-green-500"/></td>
                  <td className="px-3 py-2"><button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button></td>
                </tr>
                <tr>
                  <td className="px-3 py-2">Wellness Guide 2025</td>
                  <td className="px-3 py-2">Guide</td>
                  <td className="px-3 py-2 text-green-600">Published</td>
                  <td className="px-3 py-2"><input type="checkbox" checked readOnly className="accent-green-500"/></td>
                  <td className="px-3 py-2"><button className="bg-blue-500 text-white px-2 py-1 rounded">Edit</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Mood Tracker Heatmap */}
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span role="img" aria-label="heatmap">🌡️</span> Mood Tracker Heatmap
          </h2>
          <div className="flex flex-col items-center">
            <img src="https://quickchart.io/chart?c={type:'heatmap',data:{labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],datasets:[{label:'Week 1',data:[2,3,4,1,5,3,2]},{label:'Week 2',data:[3,2,5,4,3,2,1]},{label:'Week 3',data:[4,5,3,2,1,4,5]}]}}" alt="Mood Heatmap" className="w-full max-w-xl h-40 object-contain bg-white rounded"/>
            <div className="text-xs text-gray-500 mt-2">Color-coded mood entries (red: low, yellow: medium, green: high)</div>
          </div>
        </section>

        {/* AI Sentiment Insights */}
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span role="img" aria-label="ai">🤖</span> AI Sentiment Insights
          </h2>
          <div className="flex flex-col items-center">
            <img src="https://quickchart.io/chart?c={type:'doughnut',data:{labels:['Joy','Stress','Anxiety','Calm'],datasets:[{data:[12,8,6,14],backgroundColor:['#34d399','#f87171','#fbbf24','#60a5fa']}]} }" alt="AI Sentiment Chart" className="w-64 h-40 object-contain bg-white rounded"/>
            <div className="text-xs text-gray-500 mt-2">AI-analyzed emotions from journal/chat entries</div>
          </div>
        </section>

        {/* Engagement Dashboard */}
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span role="img" aria-label="engagement">🏆</span> Engagement Dashboard
          </h2>
          <div className="flex flex-wrap gap-6">
            <div className="flex-1 min-w-[220px] bg-yellow-100 rounded p-4">
              <div className="font-semibold mb-1">Active Users</div>
              <div className="text-3xl font-bold text-yellow-700">128</div>
              <div className="text-xs text-gray-500">users checked resources this week</div>
            </div>
            <div className="flex-1 min-w-[220px] bg-pink-100 rounded p-4">
              <div className="font-semibold mb-1">Journaling Streaks</div>
              <div className="flex items-center gap-2 text-2xl font-bold text-pink-700">7 <span className="text-base">days</span></div>
              <div className="text-xs text-gray-500">Longest streak: Priya Singh</div>
            </div>
            <div className="flex-1 min-w-[220px] bg-blue-100 rounded p-4">
              <div className="font-semibold mb-1">Session Bookings</div>
              <div className="text-3xl font-bold text-blue-700">42</div>
              <div className="text-xs text-gray-500">sessions booked this month</div>
            </div>
            <div className="flex-1 min-w-[220px] bg-green-100 rounded p-4">
              <div className="font-semibold mb-1">Gamification Points</div>
              <div className="flex items-center gap-2 text-2xl font-bold text-green-700">3200 <span className="text-base">pts</span></div>
              <div className="text-xs text-gray-500">Top user: Amit Kumar</div>
            </div>
          </div>
        </section>

        {/* Crisis Alerts Panel */}
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span role="img" aria-label="alert">🚨</span> Crisis Alerts Panel
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border">
              <thead className="bg-red-100">
                <tr>
                  <th className="px-3 py-2">User</th>
                  <th className="px-3 py-2">Risk Level</th>
                  <th className="px-3 py-2">Last Entry</th>
                  <th className="px-3 py-2">Alert</th>
                  <th className="px-3 py-2">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-red-50">
                  <td className="px-3 py-2 font-semibold">Amit Kumar</td>
                  <td className="px-3 py-2 text-red-600 font-bold">High</td>
                  <td className="px-3 py-2">"Feeling hopeless"</td>
                  <td className="px-3 py-2"><span className="bg-red-500 text-white px-2 py-1 rounded">Suicidal</span></td>
                  <td className="px-3 py-2 space-x-2">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded">Contact</button>
                    <button className="bg-orange-500 text-white px-2 py-1 rounded">Assign Therapist</button>
                  </td>
                </tr>
                <tr className="bg-orange-50">
                  <td className="px-3 py-2 font-semibold">Priya Singh</td>
                  <td className="px-3 py-2 text-orange-600 font-bold">Medium</td>
                  <td className="px-3 py-2">"Can't sleep, anxious"</td>
                  <td className="px-3 py-2"><span className="bg-orange-400 text-white px-2 py-1 rounded">At Risk</span></td>
                  <td className="px-3 py-2 space-x-2">
                    <button className="bg-blue-500 text-white px-2 py-1 rounded">Contact</button>
                    <button className="bg-orange-500 text-white px-2 py-1 rounded">Assign Therapist</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Wellness Scorecards */}
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span role="img" aria-label="scorecard">📈</span> Wellness Scorecards
          </h2>
          <div className="flex flex-col items-center">
            <img src="https://quickchart.io/chart?c={type:'radar',data:{labels:['Mood','Engagement','Progress','Attendance','Wellness'],datasets:[{label:'Before',data:[2,3,2,3,2],backgroundColor:'rgba(59,130,246,0.2)',borderColor:'#3b82f6'},{label:'After',data:[4,5,4,5,4],backgroundColor:'rgba(16,185,129,0.2)',borderColor:'#10b981'}]}}" alt="Wellness Scorecard" className="w-full max-w-lg h-56 object-contain bg-white rounded"/>
            <div className="text-xs text-gray-500 mt-2">Wellness index before vs. after therapy</div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default AdminDashboard;
