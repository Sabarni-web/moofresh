import { Home, Grid, Calendar, ShoppingCart, User } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink 
        to="/home" 
        className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
      >
        <Home size={20} />
        <span>Home</span>
      </NavLink>
      <NavLink 
        to="/shop" 
        className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
      >
        <Grid size={20} />
        <span>Categories</span>
      </NavLink>
      <NavLink 
        to="/plan" 
        className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
      >
        <Calendar size={20} />
        <span>Orders</span>
      </NavLink>
      <NavLink 
        to="/cart" 
        className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
      >
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <ShoppingCart size={20} />
          <div style={{
            position: 'absolute',
            top: '-6px',
            right: '-8px',
            backgroundColor: '#ef4444',
            color: 'white',
            fontSize: '9px',
            fontWeight: 'bold',
            borderRadius: '50%',
            width: '16px',
            height: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #f6f9fc'
          }}>
            2
          </div>
        </div>
        <span>Cart</span>
      </NavLink>
      <NavLink 
        to="/profile" 
        className={({ isActive }) => `bottom-nav-item ${isActive ? 'active' : ''}`}
      >
        <User size={20} />
        <span>Profile</span>
      </NavLink>
    </nav>
  );
}
