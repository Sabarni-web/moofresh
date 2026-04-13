import { Users, Monitor, Bike, Banknote, ChevronRight } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#121c2c', margin: '0 0 8px 0' }}>Dashboard Overview</h1>
        <p style={{ color: '#6b7a90', fontSize: '1rem', margin: 0 }}>Welcome back, Alex. Here's your performance snapshot for today.</p>
      </div>

      {/* Metrics Row */}
      <div className="grid-4">
        
        {/* Metric 1 */}
        <div className="hover-lift" style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
            <div style={{ backgroundColor: '#e5f0ff', padding: '12px', borderRadius: '12px' }}>
              <Users size={24} color="#4fa6fd" />
            </div>
            <div style={{ backgroundColor: '#dcfce7', color: '#10b981', padding: '4px 10px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700 }}>+12%</div>
          </div>
          <div style={{ color: '#6b7a90', fontSize: '0.875rem', fontWeight: 600, marginBottom: '8px' }}>Total Customers</div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#121c2c' }}>12,842</div>
        </div>

        {/* Metric 2 */}
        <div className="hover-lift" style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
            <div style={{ backgroundColor: '#f0fdf4', padding: '12px', borderRadius: '12px' }}>
              <Monitor size={24} color="#10b981" />
            </div>
            <div style={{ backgroundColor: '#dcfce7', color: '#10b981', padding: '4px 10px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700 }}>+5%</div>
          </div>
          <div style={{ color: '#6b7a90', fontSize: '0.875rem', fontWeight: 600, marginBottom: '8px' }}>Active Subscriptions</div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#121c2c' }}>8,432</div>
        </div>

        {/* Metric 3 */}
        <div className="hover-lift" style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
            <div style={{ backgroundColor: '#f3e8ff', padding: '12px', borderRadius: '12px' }}>
              <Bike size={24} color="#a855f7" />
            </div>
            <div style={{ backgroundColor: '#fee2e2', color: '#ef4444', padding: '4px 10px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700 }}>-2%</div>
          </div>
          <div style={{ color: '#6b7a90', fontSize: '0.875rem', fontWeight: 600, marginBottom: '8px' }}>Total Riders</div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#121c2c' }}>1,205</div>
        </div>

        {/* Metric 4 */}
        <div className="hover-lift" style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
            <div style={{ backgroundColor: '#e0f2fe', padding: '12px', borderRadius: '12px' }}>
              <Banknote size={24} color="#0ea5e9" />
            </div>
            <div style={{ backgroundColor: '#dcfce7', color: '#10b981', padding: '4px 10px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700 }}>+18%</div>
          </div>
          <div style={{ color: '#6b7a90', fontSize: '0.875rem', fontWeight: 600, marginBottom: '8px' }}>Total Revenue</div>
          <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#121c2c' }}>₹45,230</div>
        </div>

      </div>

      {/* Charts Row */}
      <div className="grid-2">
        
        {/* Chart 1 */}
        <div className="hover-lift" style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div>
               <h3 style={{ fontSize: '1.125rem', fontWeight: 800, margin: '0 0 4px 0', color: '#121c2c' }}>Orders per Day</h3>
               <p style={{ margin: 0, color: '#6b7a90', fontSize: '0.875rem' }}>Daily transaction volume</p>
            </div>
            <div style={{ textAlign: 'right' }}>
               <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#121c2c' }}>1,420</div>
               <div style={{ color: '#10b981', fontSize: '0.75rem', fontWeight: 700 }}>+8% from last week</div>
            </div>
          </div>
          <div style={{ height: '200px', borderTop: '1px solid #f1f5f9', position: 'relative', display: 'flex', alignItems: 'flex-end', paddingTop: '20px' }}>
            <svg viewBox="0 0 400 150" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
              <path d="M0,100 C50,100 80,120 120,60 C160,0 200,140 240,120 C280,100 300,20 350,10 C380,5 400,80 400,80" fill="none" stroke="#4fa6fd" strokeWidth="4" />
            </svg>
            <div style={{ position: 'absolute', bottom: '-20px', left: 0, right: 0, display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.05em' }}>
              <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
            </div>
          </div>
        </div>

        {/* Chart 2 */}
        <div className="hover-lift" style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <div>
               <h3 style={{ fontSize: '1.125rem', fontWeight: 800, margin: '0 0 4px 0', color: '#121c2c' }}>Revenue Trends</h3>
               <p style={{ margin: 0, color: '#6b7a90', fontSize: '0.875rem' }}>Income growth analysis</p>
            </div>
            <div style={{ textAlign: 'right' }}>
               <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#121c2c' }}>₹12,400</div>
               <div style={{ color: '#ef4444', fontSize: '0.75rem', fontWeight: 700 }}>-3% from last week</div>
            </div>
          </div>
          <div style={{ height: '200px', borderTop: '1px solid #f1f5f9', position: 'relative', display: 'flex', alignItems: 'flex-end', paddingTop: '20px' }}>
            <svg viewBox="0 0 400 150" style={{ width: '100%', height: '100%' }} preserveAspectRatio="none">
              <path d="M0,80 C50,80 80,40 120,40 C160,40 180,120 220,120 C260,120 280,10 320,10 C360,10 380,130 400,90" fill="none" stroke="#4fa6fd" strokeWidth="4" strokeDasharray="6 6"/>
            </svg>
            <div style={{ position: 'absolute', bottom: '-20px', left: 0, right: 0, display: 'flex', justifyContent: 'space-between', color: '#94a3b8', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.05em' }}>
              <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
            </div>
          </div>
        </div>

      </div>

      {/* Table */}
      <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)', overflow: 'hidden' }}>
        <div style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f1f5f9' }}>
          <h3 style={{ fontSize: '1.125rem', fontWeight: 800, margin: 0, color: '#121c2c' }}>Recent Orders</h3>
          <button className="btn-scale" style={{ color: '#4fa6fd', fontWeight: 700, fontSize: '0.875rem' }}>View All</button>
        </div>
        
        <div className="table-responsive-wrapper">
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: '#f8fafc', color: '#6b7a90', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em' }}>
              <th style={{ padding: '16px 24px' }}>ORDER ID</th>
              <th style={{ padding: '16px 24px' }}>CUSTOMER</th>
              <th style={{ padding: '16px 24px' }}>STATUS</th>
              <th style={{ padding: '16px 24px' }}>DATE</th>
              <th style={{ padding: '16px 24px', textAlign: 'right' }}>AMOUNT</th>
            </tr>
          </thead>
          <tbody>
            <tr className="table-row-hover" style={{ borderBottom: '1px solid #f1f5f9' }}>
              <td style={{ padding: '20px 24px', fontWeight: 700, color: '#121c2c', fontSize: '0.875rem' }}>#ORD-9021</td>
              <td style={{ padding: '20px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#cda896' }}></div>
                  <span style={{ fontWeight: 600, color: '#121c2c', fontSize: '0.875rem' }}>Marcus Aurelius</span>
                </div>
              </td>
              <td style={{ padding: '20px 24px' }}>
                <span style={{ backgroundColor: '#dcfce7', color: '#10b981', padding: '4px 10px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700 }}>Completed</span>
              </td>
              <td style={{ padding: '20px 24px', color: '#6b7a90', fontSize: '0.875rem' }}>Oct 24, 2023</td>
              <td style={{ padding: '20px 24px', textAlign: 'right', fontWeight: 800, color: '#121c2c', fontSize: '0.875rem' }}>₹128.50</td>
            </tr>
            <tr className="table-row-hover">
              <td style={{ padding: '20px 24px', fontWeight: 700, color: '#121c2c', fontSize: '0.875rem' }}>#ORD-8842</td>
              <td style={{ padding: '20px 24px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#f2c9b6' }}></div>
                  <span style={{ fontWeight: 600, color: '#121c2c', fontSize: '0.875rem' }}>Sarah Jenkins</span>
                </div>
              </td>
              <td style={{ padding: '20px 24px' }}>
                <span style={{ backgroundColor: '#fef3c7', color: '#d97706', padding: '4px 10px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700 }}>Processing</span>
              </td>
              <td style={{ padding: '20px 24px', color: '#6b7a90', fontSize: '0.875rem' }}>Oct 24, 2023</td>
              <td style={{ padding: '20px 24px', textAlign: 'right', fontWeight: 800, color: '#121c2c', fontSize: '0.875rem' }}>₹342.00</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>

    </div>
  );
}

export default AdminDashboard;
