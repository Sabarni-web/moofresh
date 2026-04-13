import { ArrowLeft, Info, MapPin, Camera, PenTool, RotateCcw, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const DeliveryConfirmation = () => {
  const [photo, setPhoto] = useState('url("https://images.unsplash.com/photo-1513694203232-719a280e022f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")');
  const [isPhotoTaken, setIsPhotoTaken] = useState(false);
  
  const takePhoto = () => {
    setPhoto('url("https://plus.unsplash.com/premium_photo-1664303498967-73a7fd96d5e7?q=80&w=800&auto=format&fit=crop")');
    setIsPhotoTaken(true);
  };
  return (
    <div style={{ backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ padding: '20px 24px', display: 'flex', alignItems: 'center', borderBottom: '1px solid #f1f5f9' }}>
        <Link to="/delivery/active" style={{ marginRight: '16px' }}>
          <ArrowLeft size={24} color="#121c2c" />
        </Link>
        <h1 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0, color: '#121c2c', flex: 1, textAlign: 'center', marginRight: '40px' }}>Delivery Confirmation</h1>
      </div>

      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        
        {/* Info Alert */}
        <div style={{ backgroundColor: '#f0f7ff', border: '1px solid #e0efff', borderRadius: '12px', padding: '16px', display: 'flex', gap: '12px' }}>
          <div style={{ backgroundColor: '#4fa6fd', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexShrink: 0, marginTop: '2px' }}>
            <Info size={14} color="#ffffff" />
          </div>
          <div>
            <h3 style={{ color: '#4fa6fd', margin: '0 0 4px 0', fontSize: '0.875rem', fontWeight: 700 }}>Arrived at Location</h3>
            <p style={{ color: '#6b7a90', margin: 0, fontSize: '0.875rem', lineHeight: '1.4' }}>Please complete the steps below to finish the delivery.</p>
          </div>
        </div>

        {/* Delivery Details */}
        <div>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#121c2c', marginBottom: '16px' }}>Delivery Details</h2>
          <div style={{ borderRadius: '16px', border: '1px solid #f1f5f9', overflow: 'hidden', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)' }}>
            <div style={{ width: '100%', height: '160px', backgroundColor: '#e2e8f0', backgroundImage: photo, backgroundSize: 'cover', backgroundPosition: 'center', transition: 'all 0.3s ease' }}></div>
            <div style={{ padding: '16px' }}>
              <h3 style={{ fontSize: '1.125rem', margin: '0 0 4px 0', color: '#121c2c', fontWeight: 700 }}>Package for John Doe</h3>
              <p style={{ margin: '0 0 12px 0', color: '#6b7a90', fontSize: '0.875rem', fontWeight: 600 }}>Order #88291 • Standard Express</p>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#6b7a90', fontSize: '0.875rem' }}>
                <MapPin size={16} color="#4fa6fd" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>123 Sunset Blvd, Los Angeles, CA</span>
              </div>
            </div>
            
            <div style={{ padding: '0 16px 16px 16px' }}>
               <button onClick={takePhoto} className="btn-scale" style={{ width: '100%', backgroundColor: isPhotoTaken ? '#dcfce7' : '#f0f7ff', color: isPhotoTaken ? '#10b981' : '#4fa6fd', border: `2px dashed ${isPhotoTaken ? '#10b981' : '#4fa6fd'}`, borderRadius: '12px', padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '0.875rem' }}>
                 {isPhotoTaken ? <CheckCircle size={20} /> : <Camera size={20} />}
                 {isPhotoTaken ? 'Photo Captured' : 'Take Photo of Delivery'}
               </button>
            </div>
          </div>
        </div>

        {/* Customer Signature */}
        <div>
          <h2 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#121c2c', marginBottom: '16px' }}>Customer Signature</h2>
          <div style={{ backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '16px', height: '160px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
             <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: '#cbd5e1', gap: '8px' }}>
               <PenTool size={32} />
               <span style={{ fontWeight: 700, fontSize: '0.75rem', letterSpacing: '0.05em' }}>SIGN HERE</span>
             </div>
             <div className="btn-scale" style={{ position: 'absolute', bottom: '12px', right: '16px', display: 'flex', alignItems: 'center', gap: '4px', color: '#6b7a90', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer', padding: '4px' }}>
               <RotateCcw size={14} />
               Clear
             </div>
          </div>
        </div>

        <div style={{ marginTop: '8px' }}>
          <button className="btn-scale" style={{ width: '100%', backgroundColor: '#4fa6fd', color: '#ffffff', borderRadius: '12px', padding: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 700, fontSize: '1rem', border: 'none', cursor: 'pointer', boxShadow: '0 4px 12px rgba(79, 166, 253, 0.3)' }}>
            Mark as Delivered
          </button>
          <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.75rem', marginTop: '12px', lineHeight: '1.5', padding: '0 16px' }}>
            By clicking "Mark as Delivered", you confirm the items were successfully handed over or left at a secure location.
          </p>
        </div>

      </div>
    </div>
  );
}

export default DeliveryConfirmation;
