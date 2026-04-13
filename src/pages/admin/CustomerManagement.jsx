import { Users, CheckCircle, DollarSign, ChevronDown, UserPlus } from 'lucide-react';

const CustomerManagement = () => {
  return (
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#121c2c', margin: '0 0 8px 0' }}>Customer Management</h1>
        <p style={{ color: '#6b7a90', fontSize: '1rem', margin: 0 }}>Review, manage, and audit your user base and their subscription health.</p>
      </div>

      {/* Metrics Row */}
      <div className="grid-3">
        
        {/* Metric 1 */}
        <div className="hover-lift" style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ color: '#6b7a90', fontSize: '0.875rem', fontWeight: 600, marginBottom: '8px' }}>Total Customers</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#121c2c', marginBottom: '8px' }}>12,482</div>
            <div style={{ color: '#10b981', fontSize: '0.75rem', fontWeight: 600 }}>↗ +12% from last month</div>
          </div>
          <div style={{ backgroundColor: '#e5f0ff', padding: '16px', borderRadius: '16px' }}>
             <Users size={24} color="#4fa6fd" />
          </div>
        </div>

        {/* Metric 2 */}
        <div className="hover-lift" style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ color: '#6b7a90', fontSize: '0.875rem', fontWeight: 600, marginBottom: '8px' }}>Active Subscriptions</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#121c2c', marginBottom: '8px' }}>8,912</div>
            <div style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 600 }}>71.4% retention rate</div>
          </div>
          <div style={{ backgroundColor: '#dcfce7', padding: '16px', borderRadius: '16px' }}>
             <CheckCircle size={24} color="#10b981" />
          </div>
        </div>

        {/* Metric 3 */}
        <div className="hover-lift" style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '24px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ color: '#6b7a90', fontSize: '0.875rem', fontWeight: 600, marginBottom: '8px' }}>Premium Revenue</div>
            <div style={{ fontSize: '1.75rem', fontWeight: 800, color: '#121c2c', marginBottom: '8px' }}>₹42.5k</div>
            <div style={{ color: '#10b981', fontSize: '0.75rem', fontWeight: 600 }}>↗ +5.2% vs target</div>
          </div>
          <div style={{ backgroundColor: '#fef9c3', padding: '16px', borderRadius: '16px' }}>
             <DollarSign size={24} color="#ca8a04" />
          </div>
        </div>

      </div>

      {/* Controls */}
      <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '20px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)', marginBottom: '24px', display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, backgroundColor: '#f8fafc', borderRadius: '8px', padding: '10px 16px', display: 'flex', alignItems: 'center' }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input type="text" placeholder="Search name, email, or phone..." style={{ border: 'none', background: 'transparent', outline: 'none', marginLeft: '12px', width: '100%', fontSize: '0.875rem', color: '#121c2c' }} />
        </div>
        <div style={{ backgroundColor: '#f8fafc', borderRadius: '8px', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px', color: '#121c2c', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer' }}>
          Status: All <ChevronDown size={16} color="#6b7a90" />
        </div>
        <div style={{ backgroundColor: '#f8fafc', borderRadius: '8px', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px', color: '#121c2c', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer' }}>
          Plan: All <ChevronDown size={16} color="#6b7a90" />
        </div>
        <button className="btn-scale" style={{ backgroundColor: '#4fa6fd', color: '#ffffff', borderRadius: '8px', padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '0.875rem' }}>
          <UserPlus size={18} /> Add Customer
        </button>
      </div>

      {/* Table */}
      <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)', overflow: 'hidden' }}>
        <div className="table-responsive-wrapper">
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ backgroundColor: '#ffffff', borderBottom: '1px solid #f1f5f9', color: '#6b7a90', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.05em' }}>
              <th style={{ padding: '24px 24px 16px 24px' }}>CUSTOMER NAME</th>
              <th style={{ padding: '24px 24px 16px 24px' }}>PHONE NUMBER</th>
              <th style={{ padding: '24px 24px 16px 24px' }}>SUBSCRIPTION</th>
              <th style={{ padding: '24px 24px 16px 24px' }}>STATUS</th>
              <th style={{ padding: '24px 24px 16px 24px', textAlign: 'right' }}>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: 'JD', bg: '#e0f2fe', text: '#0ea5e9', name: 'Jordan Daniels', email: 'jordan.d@example.com', phone: '+1 (555) 012-3456', plan: 'PRO PLAN', planBg: '#e0f2fe', planText: '#0ea5e9', status: 'Active', statusColor: '#10b981' },
              { id: 'SK', bg: '#f1f5f9', text: '#64748b', name: 'Sarah Jenkins', email: 's.jenkins@corp.com', phone: '+44 20 7946 0123', plan: 'ENTERPRISE', planBg: '#fef3c7', planText: '#d97706', status: 'Inactive', statusColor: '#cbd5e1' },
              { id: 'MR', bg: '#e0f2fe', text: '#0ea5e9', name: 'Marcus Rodriguez', email: 'm.rod@webmail.io', phone: '+1 (555) 987-6543', plan: 'FREE TIER', planBg: '#f1f5f9', planText: '#64748b', status: 'Active', statusColor: '#10b981' },
              { id: 'EL', bg: '#e0f2fe', text: '#0ea5e9', name: 'Elena Laine', email: 'elena@design.co', phone: '+1 (555) 444-2211', plan: 'PRO PLAN', planBg: '#e0f2fe', planText: '#0ea5e9', status: 'Active', statusColor: '#10b981' },
            ].map(row => (
              <tr key={row.name} className="table-row-hover" style={{ borderBottom: '1px solid #f1f5f9' }}>
                <td style={{ padding: '20px 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: row.bg, color: row.text, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.875rem' }}>{row.id}</div>
                    <div>
                      <div style={{ fontWeight: 700, color: '#121c2c', fontSize: '0.875rem', marginBottom: '4px' }}>{row.name}</div>
                      <div style={{ color: '#6b7a90', fontSize: '0.75rem' }}>{row.email}</div>
                    </div>
                  </div>
                </td>
                <td style={{ padding: '20px 24px', color: '#475569', fontSize: '0.875rem', fontWeight: 500 }}>{row.phone}</td>
                <td style={{ padding: '20px 24px' }}>
                  <span style={{ backgroundColor: row.planBg, color: row.planText, padding: '4px 10px', borderRadius: '100px', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.05em' }}>{row.plan}</span>
                </td>
                <td style={{ padding: '20px 24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#121c2c', fontSize: '0.875rem', fontWeight: 600 }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: row.statusColor }}></div>
                    {row.status}
                  </div>
                </td>
                <td style={{ padding: '20px 24px', textAlign: 'right' }}>
                  {/* Actions normally icon like horizontal dots */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>

        {/* Footer */}
        <div style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #f1f5f9' }}>
          <div style={{ fontSize: '0.875rem', color: '#6b7a90' }}>
            Showing <strong style={{ color: '#121c2c' }}>1 - 4</strong> of <strong style={{ color: '#121c2c' }}>12,482</strong> results
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn-scale" style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', color: '#6b7a90', padding: '6px 12px', borderRadius: '6px', fontSize: '0.875rem', fontWeight: 600 }}>Previous</button>
            <button className="btn-scale" style={{ backgroundColor: '#4fa6fd', border: '1px solid #4fa6fd', color: '#ffffff', padding: '6px 12px', borderRadius: '6px', fontSize: '0.875rem', fontWeight: 600 }}>1</button>
            <button className="btn-scale" style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', color: '#121c2c', padding: '6px 12px', borderRadius: '6px', fontSize: '0.875rem', fontWeight: 600 }}>2</button>
            <button className="btn-scale" style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', color: '#121c2c', padding: '6px 12px', borderRadius: '6px', fontSize: '0.875rem', fontWeight: 600 }}>3</button>
            <button className="btn-scale" style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', color: '#121c2c', padding: '6px 12px', borderRadius: '6px', fontSize: '0.875rem', fontWeight: 600 }}>Next</button>
          </div>
        </div>

      </div>

    </div>
  );
}

export default CustomerManagement;
