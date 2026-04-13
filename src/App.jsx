import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Splash from './pages/Splash';
import Onboarding from './pages/Onboarding';
import Login from './pages/Login';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Subscription from './pages/Subscription';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import TrackDelivery from './pages/TrackDelivery';
import Notifications from './pages/Notifications';
import OrderHistory from './pages/OrderHistory';
import Profile from './pages/Profile';

// Delivery App imports
import DeliveryLayout from './components/DeliveryLayout';
import ActiveDeliveries from './pages/delivery/ActiveDeliveries';
import DeliveryMap from './pages/delivery/DeliveryMap';
import DeliveryConfirmation from './pages/delivery/DeliveryConfirmation';

import CustomerLayout from './components/CustomerLayout';

// Admin Dashboard imports
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboard from './pages/admin/AdminDashboard';
import CustomerManagement from './pages/admin/CustomerManagement';
import OrderManagement from './pages/admin/OrderManagement';
import RiderManagement from './pages/admin/RiderManagement';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Customer App Routes */}
          <Route path="/" element={<Splash />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/checkout" element={<Checkout />} />

          {/* Customer Routes with BottomNav */}
          <Route element={<CustomerLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/track-delivery" element={<TrackDelivery />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/plan" element={<OrderHistory />} />
            <Route path="/orders" element={<OrderHistory />} />
            <Route path="/profile" element={<Profile />} />
          </Route>

          {/* Delivery Boy App Routes */}
          <Route path="/delivery" element={<DeliveryLayout />}>
            <Route index element={<Navigate to="/delivery/active" replace />} />
            <Route path="active" element={<ActiveDeliveries />} />
          </Route>
          <Route path="/delivery/map" element={<DeliveryMap />} />
          <Route path="/delivery/confirm" element={<DeliveryConfirmation />} />

          {/* Admin Dashboard Routes (Shared SaaS Layout) */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="customers" element={<CustomerManagement />} />
            <Route path="subscriptions" element={<div style={{ padding: '32px' }}>Subscription Plans Placeholder</div>} />
            <Route path="reports" element={<div style={{ padding: '32px' }}>Usage Reports Placeholder</div>} />
          </Route>

          {/* Custom Admin Layouts */}
          <Route path="/admin/orders" element={<OrderManagement />} />
          <Route path="/admin/riders" element={<RiderManagement />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

