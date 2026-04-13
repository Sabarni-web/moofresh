import { Search, Bell, Map as MapIcon, BarChart2, Star, Bike, Truck, AlertTriangle, ChevronDown, LayoutGrid, Users, MapPin, TrendingUp, DollarSign, Download, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const RiderManagement = () => {
  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100vw', overflow: 'hidden' }}>
      
      {/* Top Navigation */}
      <div style={{ height: '70px', backgroundColor: '#ffffff', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px', height: '100%' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ backgroundColor: '#e5f0ff', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Bike size={18} color="#4fa6fd" />
            </div>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#121c2c', margin: 0 }}>RiderFlow</h1>
          </div>
          
          {/* Main Links */}
          <nav style={{ display: 'flex', gap: '32px', height: '100%' }}>
            <Link to="/admin/riders" style={{ color: '#4fa6fd', fontWeight: 700, fontSize: '0.875rem', display: 'flex', alignItems: 'center', cursor: 'pointer', borderBottom: '3px solid #4fa6fd', height: '70px', textDecoration: 'none' }}>Management</Link>
            <Link to="/admin/orders" style={{ color: '#6b7a90', fontWeight: 600, fontSize: '0.875rem', display: 'flex', alignItems: 'center', cursor: 'pointer', textDecoration: 'none' }}>Orders Info</Link>
            <Link to="/admin/dashboard" style={{ color: '#6b7a90', fontWeight: 600, fontSize: '0.875rem', display: 'flex', alignItems: 'center', cursor: 'pointer', textDecoration: 'none' }}>Overview Data</Link>
          </nav>
        </div>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f1f5f9', borderRadius: '8px', padding: '8px 16px', width: '280px' }}>
            <Search size={18} color="#94a3b8" />
            <input type="text" placeholder="Search riders..." style={{ border: 'none', background: 'transparent', outline: 'none', marginLeft: '12px', width: '100%', fontSize: '0.875rem', color: '#121c2c' }} />
          </div>
          <div style={{ width: '40px', height: '40px', backgroundColor: '#f1f5f9', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Bell size={20} color="#6b7a90" style={{ cursor: 'pointer' }} />
          </div>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#cda896', overflow: 'hidden' }}>
             {/* Profile image placeholder */}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        
        {/* Left Sidebar */}
        <div style={{ width: '260px', backgroundColor: '#ffffff', borderRight: '1px solid #e2e8f0', padding: '32px 16px' }}>
          
          <div style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.05em', padding: '0 16px', marginBottom: '16px' }}>OPERATIONS</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '32px' }}>
            <Link to="/admin/riders" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '8px', backgroundColor: '#e5f0ff', color: '#4fa6fd', fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer' }}>
              <LayoutGrid size={20} /> Overview
            </Link>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '8px', color: '#121c2c', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer' }}>
              <Users size={20} color="#6b7a90" /> Rider List
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '8px', color: '#121c2c', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer' }}>
              <MapPin size={20} color="#6b7a90" /> Live Tracking
            </div>
          </div>

          <div style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.05em', padding: '0 16px', marginBottom: '16px' }}>REPORTS</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '8px', color: '#121c2c', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer' }}>
              <TrendingUp size={20} color="#6b7a90" /> Performance
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '8px', color: '#121c2c', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer' }}>
              <DollarSign size={20} color="#6b7a90" /> Earnings
            </div>
          </div>
          
        </div>

        {/* Center Content */}
        <div style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
            <div>
              <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#121c2c', margin: '0 0 8px 0' }}>Rider Management</h1>
              <p style={{ color: '#6b7a90', fontSize: '1rem', margin: 0 }}>Monitor and optimize your delivery fleet performance.</p>
            </div>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button className="btn-scale" style={{ backgroundColor: '#4fa6fd', color: '#ffffff', borderRadius: '8px', padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '0.875rem', border: 'none', cursor: 'pointer', boxShadow: '0 4px 12px rgba(79, 166, 253, 0.3)' }}>
                <LayoutGrid size={18} /> Rider List
              </button>
              <button className="btn-scale" style={{ backgroundColor: '#ffffff', color: '#121c2c', borderRadius: '8px', padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '0.875rem', border: '1px solid #e2e8f0', cursor: 'pointer' }}>
                <MapIcon size={18} /> Live Map
              </button>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid-4">
            
            <div className="hover-lift" style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div style={{ backgroundColor: '#e5f0ff', padding: '12px', borderRadius: '12px' }}>
                  <Bike size={24} color="#4fa6fd" />
                </div>
                <div style={{ backgroundColor: '#dcfce7', color: '#10b981', padding: '4px 10px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 800 }}>+12%</div>
              </div>
              <div style={{ color: '#6b7a90', fontSize: '0.875rem', fontWeight: 600, marginBottom: '8px' }}>Total Active Riders</div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#121c2c' }}>1,284</div>
            </div>

            <div className="hover-lift" style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div style={{ backgroundColor: '#fef3c7', padding: '12px', borderRadius: '12px' }}>
                  <Star size={24} color="#d97706" fill="#d97706" />
                </div>
                <div style={{ backgroundColor: '#dcfce7', color: '#10b981', padding: '4px 10px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 800 }}>+0.2</div>
              </div>
              <div style={{ color: '#6b7a90', fontSize: '0.875rem', fontWeight: 600, marginBottom: '8px' }}>Average Rating</div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#121c2c' }}>4.85</div>
            </div>

            <div className="hover-lift" style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div style={{ backgroundColor: '#f3e8ff', padding: '12px', borderRadius: '12px' }}>
                  <Truck size={24} color="#a855f7" />
                </div>
                <div style={{ backgroundColor: '#f1f5f9', color: '#6b7a90', padding: '4px 10px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 800 }}>Weekly</div>
              </div>
              <div style={{ color: '#6b7a90', fontSize: '0.875rem', fontWeight: 600, marginBottom: '8px' }}>Avg. On-time %</div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#121c2c' }}>94.2%</div>
            </div>

            <div className="hover-lift" style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div style={{ backgroundColor: '#fee2e2', padding: '12px', borderRadius: '12px' }}>
                  <AlertTriangle size={24} color="#ef4444" />
                </div>
                <div style={{ backgroundColor: '#fee2e2', color: '#ef4444', padding: '4px 10px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 800 }}>Alert</div>
              </div>
              <div style={{ color: '#6b7a90', fontSize: '0.875rem', fontWeight: 600, marginBottom: '8px' }}>Critical Alerts</div>
              <div style={{ fontSize: '2rem', fontWeight: 800, color: '#121c2c' }}>24</div>
            </div>

          </div>

          {/* Table Container */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)', overflow: 'hidden' }}>
            
            {/* Table Header Controls */}
            <div style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f1f5f9', flexWrap: 'wrap', gap: '16px' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#121c2c', margin: 0 }}>Rider Performance Metrics</h2>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px', color: '#121c2c', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer', border: '1px solid #e2e8f0' }}>
                  Sort by: Rating <ChevronDown size={16} color="#6b7a90" />
                </div>
                <button className="btn-scale" style={{ backgroundColor: '#4fa6fd', color: '#ffffff', borderRadius: '8px', padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '0.875rem', border: 'none', cursor: 'pointer' }}>
                  Export Data
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="table-responsive-wrapper">
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #f1f5f9', color: '#94a3b8', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em' }}>
                  <th style={{ padding: '24px', width: '25%' }}>RIDER DETAILS</th>
                  <th style={{ padding: '24px', width: '15%' }}>RATING</th>
                  <th style={{ padding: '24px', width: '15%' }}>COMPLETED</th>
                  <th style={{ padding: '24px', width: '20%' }}>ON-TIME %</th>
                  <th style={{ padding: '24px', width: '15%' }}>STATUS</th>
                  <th style={{ padding: '24px', width: '10%', textAlign: 'right' }}>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: 'David Miller', id: '#RD-8921', rating: '4.9', completed: '1,420', ontime: '98%', status: 'Online', statusBg: '#dcfce7', statusText: '#10b981', barWidth: '98%', barColor: '#10b981', imgColor: '#4fa6fd' },
                  { name: 'Elena Rodriguez', id: '#RD-7732', rating: '4.7', completed: '856', ontime: '92%', status: 'Busy', statusBg: '#e5f0ff', statusText: '#4fa6fd', barWidth: '85%', barColor: '#4fa6fd', imgColor: '#a855f7' },
                  { name: 'James Wilson', id: '#RD-4410', rating: '4.2', completed: '312', ontime: '84%', status: 'Review Needed', statusBg: '#fef3c7', statusText: '#d97706', barWidth: '40%', barColor: '#ef4444', imgColor: '#f97316' },
                  { name: 'Sarah Parker', id: '#RD-1290', rating: '5.0', completed: '2,105', ontime: '99%', status: 'Top Performer', statusBg: '#dcfce7', statusText: '#10b981', barWidth: '99%', barColor: '#10b981', imgColor: '#ec4899' },
                ].map(row => (
                  <tr key={row.id} className="table-row-hover" style={{ borderBottom: '1px solid #f1f5f9' }}>
                    <td style={{ padding: '24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: row.imgColor }}></div>
                        <div>
                          <div style={{ fontWeight: 800, color: '#121c2c', fontSize: '0.875rem', marginBottom: '4px' }}>{row.name}</div>
                          <div style={{ fontStyle: 'italic', color: '#94a3b8', fontSize: '0.75rem', fontWeight: 500 }}>ID: {row.id}</div>
                        </div>
                      </div>
                    </td>
                    <td style={{ padding: '24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#d97706', fontWeight: 800, fontSize: '0.875rem' }}>
                        <Star size={16} fill="#d97706" /> {row.rating}
                      </div>
                    </td>
                    <td style={{ padding: '24px', color: '#6b7a90', fontSize: '0.875rem', fontWeight: 600 }}>{row.completed}</td>
                    <td style={{ padding: '24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ flex: 1, height: '6px', backgroundColor: '#f1f5f9', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{ width: row.barWidth, height: '100%', backgroundColor: row.barColor, borderRadius: '3px' }}></div>
                        </div>
                        <span style={{ color: row.barColor, fontWeight: 800, fontSize: '0.875rem' }}>{row.ontime}</span>
                      </div>
                    </td>
                    <td style={{ padding: '24px' }}>
                      <span style={{ backgroundColor: row.statusBg, color: row.statusText, padding: '6px 12px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 800 }}>{row.status}</span>
                    </td>
                    <td style={{ padding: '24px', textAlign: 'right' }}>
                      <button style={{ color: '#4fa6fd', fontWeight: 800, fontSize: '0.875rem', background: 'none', border: 'none', cursor: 'pointer' }}>Manage</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>

            {/* Table Footer */}
            <div style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.875rem', color: '#94a3b8', fontWeight: 500 }}>
                Showing 1 to 10 of 1,284 riders
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', color: '#6b7a90', padding: '8px 16px', borderRadius: '8px', fontSize: '0.875rem', fontWeight: 600 }}>Previous</button>
                <button style={{ backgroundColor: '#4fa6fd', border: 'none', color: '#ffffff', padding: '8px 16px', borderRadius: '8px', fontSize: '0.875rem', fontWeight: 700 }}>1</button>
                <button style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', color: '#121c2c', padding: '8px 16px', borderRadius: '8px', fontSize: '0.875rem', fontWeight: 600 }}>2</button>
                <button style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', color: '#6b7a90', padding: '8px 16px', borderRadius: '8px', fontSize: '0.875rem', fontWeight: 600 }}>...</button>
                <button style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', color: '#121c2c', padding: '8px 16px', borderRadius: '8px', fontSize: '0.875rem', fontWeight: 600 }}>Next</button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default RiderManagement;
