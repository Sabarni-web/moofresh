import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, CreditCard, BarChart3, LogOut, Rocket, Home, ListTodo, Truck } from 'lucide-react';

const AdminSidebar = ({ onClose }) => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Dashboard Overview', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Order Management', path: '/admin/orders', icon: ListTodo },
    { name: 'Rider Management', path: '/admin/riders', icon: Truck },
    { name: 'Customer Management', path: '/admin/customers', icon: Users },
    { name: 'Subscription Plans', path: '/admin/subscriptions', icon: CreditCard },
    { name: 'Usage Reports', path: '/admin/reports', icon: BarChart3 },
    { name: 'Back to Customer App', path: '/home', icon: Home }
  ];

  return (
    <div style={{ width: '260px', backgroundColor: '#ffffff', borderRight: '1px solid #f1f5f9', display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Logo */}
      <div style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ backgroundColor: '#4fa6fd', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Rocket size={18} color="#ffffff" />
        </div>
        <div>
          <h1 style={{ fontSize: '1rem', fontWeight: 800, color: '#121c2c', margin: 0 }}>SaaS Admin</h1>
          <span style={{ fontSize: '0.65rem', color: '#6b7a90', fontWeight: 600 }}>Management Console</span>
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, padding: '16px' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {navItems.map(item => {
            const isActive = location.pathname.includes(item.path);
            const Icon = item.icon;
            return (
              <li key={item.path}>
                <Link to={item.path} className="nav-link-hover" onClick={onClose} style={{
                  display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '8px',
                  backgroundColor: isActive ? '#e5f0ff' : 'transparent',
                  color: isActive ? '#4fa6fd' : '#6b7a90',
                  fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none'
                }}>
                  <Icon size={20} />
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Profile & Logout */}
      <div style={{ padding: '24px 16px', borderTop: '1px solid #f1f5f9' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '40px', height: '40px', backgroundColor: '#fb923c', borderRadius: '50%' }}></div>
            <div>
              <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#121c2c' }}>Alex Rivera</div>
              <div style={{ fontSize: '0.75rem', color: '#6b7a90' }}>Admin Account</div>
            </div>
          </div>
          <button style={{ color: '#ef4444', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', padding: '8px' }}>
             <LogOut size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminSidebar;
