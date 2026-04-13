import { Link, useLocation } from 'react-router-dom';
import { ListTodo, Map as MapIcon, History, User } from 'lucide-react';

const DeliveryBottomNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: '50%',
      transform: 'translateX(-50%)',
      width: '100%',
      maxWidth: '1200px',
      backgroundColor: '#ffffff',
      borderTop: '1px solid #f1f5f9',
      display: 'flex',
      justifyContent: 'space-around',
      padding: '12px 0',
      zIndex: 50,
      paddingBottom: 'calc(12px + env(safe-area-inset-bottom))'
    }}>
      <Link to="/delivery/active" className="btn-scale" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: isActive('/delivery/active') ? '#4fa6fd' : '#94a3b8', textDecoration: 'none' }}>
        <ListTodo size={24} color={isActive('/delivery/active') ? '#4fa6fd' : '#94a3b8'} />
        <span style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Orders</span>
      </Link>
      <Link to="/delivery/map" className="btn-scale" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: isActive('/delivery/map') ? '#4fa6fd' : '#94a3b8', textDecoration: 'none' }}>
        <MapIcon size={24} color={isActive('/delivery/map') ? '#4fa6fd' : '#94a3b8'} />
        <span style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Map</span>
      </Link>
      <Link to="#" className="btn-scale" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: '#94a3b8', textDecoration: 'none' }}>
        <History size={24} color="#94a3b8" />
        <span style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>History</span>
      </Link>
      <Link to="/profile" className="btn-scale" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: '#94a3b8', textDecoration: 'none' }}>
        <User size={24} color="#94a3b8" />
        <span style={{ fontSize: '10px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Profile</span>
      </Link>
    </div>
  );
}

export default DeliveryBottomNav;
