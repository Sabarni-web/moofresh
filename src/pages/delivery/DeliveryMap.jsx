import { ArrowLeft, Navigation as NavIcon, Phone, MessageSquare, History, Bike, Search as SearchIcon, Layers, Crosshair } from 'lucide-react';
import { Link } from 'react-router-dom';
import DeliveryBottomNav from '../../components/DeliveryBottomNav';

const DeliveryMap = () => {
  return (
    <div style={{ height: '100vh', width: '100%', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>

      {/* Native Map Layout */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
        <iframe
          title="Google Map Live"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12094.571407289895!2d-74.00441443425712!3d40.72591605333552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2598f804cc8f1%3A0xe54d89617ab275f1!2sNew%20York%2C%20NY%2010009%2C%20USA!5e0!3m2!1sen!2s!4v1698248834924!5m2!1sen!2s"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Top Header Controls */}
      <div style={{ position: 'absolute', top: '40px', left: '24px', right: '24px', display: 'flex', justifyContent: 'space-between', zIndex: 10 }}>
        <Link to="/delivery/active" className="btn-scale" style={{ width: '48px', height: '48px', backgroundColor: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <ArrowLeft size={24} color="#121c2c" />
        </Link>
        <div style={{ flex: 1, margin: '0 12px', backgroundColor: '#ffffff', borderRadius: '100px', display: 'flex', alignItems: 'center', padding: '0 16px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
          <SearchIcon size={20} color="#4fa6fd" />
          <input type="text" placeholder="Search for next stop..." style={{ border: 'none', outline: 'none', padding: '12px', width: '100%', fontSize: '14px', color: '#121c2c' }} />
        </div>
        <Link to="/orders" className="btn-scale" style={{ width: '48px', height: '48px', backgroundColor: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', cursor: 'pointer', textDecoration: 'none' }}>
          <History size={24} color="#121c2c" />
        </Link>
      </div>

      {/* Floating Status Badge */}
      <div style={{ position: 'absolute', top: '90px', left: '50%', transform: 'translateX(-50%)', backgroundColor: '#121c2c', color: '#ffffff', padding: '10px 24px', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '8px', zIndex: 10, fontSize: '0.875rem', fontWeight: 600 }}>
        <Bike size={18} />
        FASTEST ROUTE FOUND
      </div>

      {/* Floating Address Badge */}
      <div style={{ position: 'absolute', top: '168px', left: '60%', transform: 'translateX(-50%)', backgroundColor: '#ffffff', color: '#121c2c', padding: '6px 16px', borderRadius: '8px', fontWeight: 800, fontSize: '0.75rem', zIndex: 10, boxShadow: '0 4px 12px rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'center' }}>
        123 Maple Avenue
        <div style={{ position: 'absolute', bottom: '-5px', width: '10px', height: '10px', backgroundColor: '#ffffff', transform: 'rotate(45deg)', borderRadius: '2px' }}></div>
      </div>

      {/* Map Controls */}
      <div style={{ position: 'absolute', top: '210px', right: '16px', display: 'flex', flexDirection: 'column', gap: '16px', zIndex: 10 }}>
        <div className="btn-scale" style={{ width: '48px', height: '48px', backgroundColor: '#ffffff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
          <Layers size={22} color="#121c2c" strokeWidth={2.5} />
        </div>
        <div className="hover-lift" style={{ width: '48px', backgroundColor: '#ffffff', borderRadius: '12px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
          <div style={{ width: '100%', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #f1f5f9', cursor: 'pointer' }}>
            <span style={{ fontSize: '24px', fontWeight: 400, color: '#121c2c' }}>+</span>
          </div>
          <div style={{ width: '100%', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <span style={{ fontSize: '24px', fontWeight: 400, color: '#121c2c' }}>-</span>
          </div>
        </div>
        <div className="btn-scale" style={{ width: '48px', height: '48px', backgroundColor: '#ffffff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', cursor: 'pointer' }}>
          <Crosshair size={22} color="#4fa6fd" strokeWidth={2.5} />
        </div>
      </div>

      {/* Bottom Information Card */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: '#ffffff', borderTopLeftRadius: '24px', borderTopRightRadius: '24px', padding: '24px', zIndex: 10, paddingBottom: '90px', boxShadow: '0 -4px 16px rgba(0,0,0,0.05)' }}>
        <div style={{ width: '48px', height: '6px', backgroundColor: '#e2e8f0', borderRadius: '3px', margin: '0 auto 24px auto' }}></div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
              <h2 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#121c2c', margin: 0 }}>12 mins</h2>
              <span style={{ fontSize: '1.5rem', fontWeight: 400, color: '#94a3b8' }}>to delivery</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '12px' }}>
              <div style={{ color: '#4fa6fd', fontWeight: 700, fontSize: '1rem' }}>
                3.4<br />miles
              </div>
              <div style={{ width: '4px', height: '4px', backgroundColor: '#cbd5e1', borderRadius: '50%' }}></div>
              <div style={{ color: '#6b7a90', fontSize: '0.875rem', fontWeight: 500 }}>
                Arriving at 2:45<br />PM
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px' }}>
            <div style={{ backgroundColor: '#dcfce7', color: '#10b981', padding: '4px 12px', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', fontWeight: 800 }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
              ON TIME
            </div>
            <div style={{ color: '#94a3b8', fontSize: '0.75rem', textAlign: 'right', fontWeight: 500 }}>
              Next: ₹8.50<br />Earning
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
          <button className="btn-scale" style={{ flex: 1, backgroundColor: '#4fa6fd', color: '#ffffff', borderRadius: '12px', padding: '16px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', fontWeight: 800, fontSize: '1rem', border: 'none', cursor: 'pointer', boxShadow: '0 4px 12px rgba(79, 166, 253, 0.3)' }}>
            <NavIcon size={20} fill="currentColor" />
            Start Navigation
          </button>
          <button className="btn-scale" style={{ width: '56px', height: '56px', backgroundColor: '#f1f5f9', color: '#121c2c', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'none', cursor: 'pointer' }}>
            <Phone size={24} />
          </button>
          <button className="btn-scale" style={{ width: '56px', height: '56px', backgroundColor: '#f1f5f9', color: '#121c2c', borderRadius: '12px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: 'none', cursor: 'pointer' }}>
            <MessageSquare size={24} />
          </button>
        </div>
      </div>

      {/* Delivery Bottom Navigation */}
      <DeliveryBottomNav />

    </div>
  );
}

export default DeliveryMap;
