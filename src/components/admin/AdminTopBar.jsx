import { Bell, Settings, Search, Menu } from 'lucide-react';

const AdminTopBar = ({ toggleSidebar }) => {
  return (
    <div style={{ height: '80px', backgroundColor: '#ffffff', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px' }} className="mobile-header-padding">
      
      {/* Search */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: 1 }}>
        <button className="mobile-nav-toggle btn-scale" onClick={toggleSidebar}>
          <Menu size={24} color="#121c2c" />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f6f9fc', borderRadius: '8px', padding: '10px 16px', maxWidth: '400px', width: '100%' }}>
          <Search size={20} color="#94a3b8" />
          <input type="text" placeholder="Search..." style={{ border: 'none', background: 'transparent', outline: 'none', marginLeft: '12px', width: '100%', fontSize: '0.875rem', color: '#121c2c' }} />
        </div>
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button style={{ width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f7ff', border: 'none', cursor: 'pointer', color: '#4fa6fd' }}>
           <Bell size={20} />
        </button>
        <button style={{ width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f0f7ff', border: 'none', cursor: 'pointer', color: '#4fa6fd' }}>
           <Settings size={20} />
        </button>
      </div>
    </div>
  );
}

export default AdminTopBar;
