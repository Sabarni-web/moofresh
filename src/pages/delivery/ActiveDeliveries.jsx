import { useState } from 'react';
import { Search, Bell, MapPin, Package, Navigation2, CheckCircle2, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ActiveDeliveries = () => {
  const [activeTab, setActiveTab] = useState('Upcoming');
  return (
    <div style={{ padding: '0', backgroundColor: '#f6f9fc', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div className="page-wrapper" style={{ backgroundColor: '#f6f9fc', paddingTop: '2rem', paddingBottom: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ backgroundColor: '#e0efff', padding: '8px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4fa6fd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
          </div>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#121c2c', margin: 0 }}>Active Deliveries</h1>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Search size={24} color="#121c2c" />
          <Bell size={24} color="#121c2c" />
        </div>
      </div>

      {/* Tabs */}
      <div className="page-wrapper" style={{ display: 'flex', borderBottom: '1px solid #e2e8f0', marginBottom: '1rem' }}>
        {['Upcoming', 'Completed', 'Issues'].map(tab => (
          <div 
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{ 
              paddingBottom: '12px', marginRight: '24px', 
              borderBottom: activeTab === tab ? '3px solid #4fa6fd' : 'none', 
              color: activeTab === tab ? '#4fa6fd' : '#94a3b8', 
              fontWeight: 600, fontSize: '14px', cursor: 'pointer' 
            }}
          >
            {tab} {tab === 'Upcoming' && '(4)'}
          </div>
        ))}
      </div>

      {/* List */}
      <div className="page-wrapper responsive-row mb-8" style={{ paddingBottom: '80px' }}>
        
        {activeTab === 'Upcoming' && (
          <>
        {/* Card 1 */}
        <div className="hover-lift" style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 700, margin: 0, color: '#121c2c' }}>Sarah Jenkins</h2>
            <div style={{ backgroundColor: '#e5f0ff', color: '#4fa6fd', fontSize: '10px', fontWeight: 700, padding: '4px 10px', borderRadius: '100px', letterSpacing: '0.05em' }}>
              NEXT STOP
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#4fa6fd', fontWeight: 600, fontSize: '0.875rem' }}>
            <Clock size={16} />
            <span>09:00 AM - 10:30 AM</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#6b7a90', fontSize: '0.875rem' }}>
            <MapPin size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
            <span>482 Oakwood Ave, Willow Creek, North District</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#6b7a90', fontSize: '0.875rem' }}>
            <Package size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
            <span><strong style={{ color: '#121c2c' }}>2x</strong> Fresh Produce, <strong style={{ color: '#121c2c' }}>1x</strong> Dairy Box</span>
          </div>
          <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
            <Link to="/delivery/map" className="btn-scale" style={{ flex: 1, backgroundColor: '#f1f5f9', color: '#121c2c', borderRadius: '12px', padding: '12px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none' }}>
              <Navigation2 size={18} />
              Navigate
            </Link>
            <Link to="/delivery/confirm" className="btn-scale" style={{ flex: 1, backgroundColor: '#4fa6fd', color: '#ffffff', borderRadius: '12px', padding: '12px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none' }}>
              <CheckCircle2 size={18} />
              Complete
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="hover-lift" style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '16px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 700, margin: 0, color: '#121c2c' }}>Robert Chen</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6b7a90', fontWeight: 600, fontSize: '0.875rem' }}>
            <Clock size={16} />
            <span>10:45 AM - 12:00 PM</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#6b7a90', fontSize: '0.875rem' }}>
            <MapPin size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
            <span>12 Market Plaza, Suite 402, Downtown</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#6b7a90', fontSize: '0.875rem' }}>
            <Package size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
            <span><strong style={{ color: '#121c2c' }}>1x</strong> Electronics Parcel, <strong style={{ color: '#121c2c' }}>1x</strong> Office Supplies</span>
          </div>
          <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
            <Link to="/delivery/map" className="btn-scale" style={{ flex: 1, backgroundColor: '#f1f5f9', color: '#121c2c', borderRadius: '12px', padding: '12px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none' }}>
              <Navigation2 size={18} />
              Navigate
            </Link>
            <button className="btn-scale" style={{ flex: 1, backgroundColor: '#e5f0ff', color: '#4fa6fd', borderRadius: '12px', padding: '12px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '0.875rem' }}>
              <CheckCircle2 size={18} />
              Complete
            </button>
          </div>
        </div>

        {/* Card 3 - With map image */}
        <div className="hover-lift" style={{ backgroundColor: '#ffffff', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}>
          <div style={{ width: '100%', height: '120px', backgroundColor: '#e2f0d9', backgroundImage: 'url("https://www.mapquestapi.com/staticmap/v5/map?key=GMMpXpS4tW1eD4G8gQAgfAdJ9U59D9Zk&center=39.75,-104.99&zoom=11&size=400,150@2x")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Map Placeholder Graphic */}
          </div>
          <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h2 style={{ fontSize: '1.125rem', fontWeight: 700, margin: 0, color: '#121c2c' }}>Emma Thompson</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6b7a90', fontWeight: 600, fontSize: '0.875rem' }}>
              <Clock size={16} />
              <span>12:30 PM - 02:00 PM</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#6b7a90', fontSize: '0.875rem' }}>
              <MapPin size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>89 Bluebell Way, Garden District</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#6b7a90', fontSize: '0.875rem' }}>
              <Package size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
              <span><strong style={{ color: '#121c2c' }}>3x</strong> Home Decor, <strong style={{ color: '#121c2c' }}>1x</strong> Large Box</span>
            </div>
            <div style={{ display: 'flex', gap: '12px', marginTop: '4px' }}>
              <Link to="/delivery/map" className="btn-scale" style={{ flex: 1, backgroundColor: '#f1f5f9', color: '#121c2c', borderRadius: '12px', padding: '12px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none' }}>
                <Navigation2 size={18} />
                Navigate
              </Link>
              <button className="btn-scale" style={{ flex: 1, backgroundColor: '#e5f0ff', color: '#4fa6fd', borderRadius: '12px', padding: '12px 0', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '0.875rem' }}>
                <CheckCircle2 size={18} />
                Complete
              </button>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="hover-lift" style={{ backgroundColor: '#ffffff', borderRadius: '16px', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '8px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 700, margin: 0, color: '#121c2c' }}>Liam Wilson</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#6b7a90', fontWeight: 600, fontSize: '0.875rem' }}>
            <Clock size={16} />
            <span>02:30 PM - 04:00 PM</span>
          </div>
          <div style={{ fontStyle: 'italic', color: '#94a3b8', fontSize: '0.875rem', marginTop: '8px' }}>
            Awaiting your arrival at previous stops
          </div>
        </div>

          </>
        )}

        {activeTab === 'Completed' && (
          <div style={{ padding: '40px', textAlign: 'center', color: '#94a3b8', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <CheckCircle2 size={48} style={{ margin: '0 auto 16px auto', opacity: 0.5 }} />
            <p>You have no completed deliveries today.</p>
          </div>
        )}
        
        {activeTab === 'Issues' && (
          <div style={{ padding: '40px', textAlign: 'center', color: '#94a3b8', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
            <p>No issues reported.</p>
          </div>
        )}

      </div>
    </div>
  );
}

export default ActiveDeliveries;
