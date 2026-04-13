import { Outlet } from 'react-router-dom';
import DeliveryBottomNav from './DeliveryBottomNav';

const DeliveryLayout = () => {
  return (
    <div style={{ backgroundColor: '#f6f9fc', minHeight: '100vh', width: '100%', position: 'relative', paddingBottom: '80px' }}>
      <Outlet />
      <DeliveryBottomNav />
    </div>
  );
}

export default DeliveryLayout;
