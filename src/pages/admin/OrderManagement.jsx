import { Search, Bell, ListTodo, History, Truck, BarChart3, Settings, Plus, ChevronDown, ChevronLeft, ChevronRight, Phone, MapPin, Package, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const OrderManagement = () => {
  return (
    <div style={{ backgroundColor: '#f6f9fc', minHeight: '100vh', display: 'flex', flexDirection: 'column', width: '100vw', overflow: 'hidden' }}>
      
      {/* Top Navigation */}
      <div style={{ height: '70px', backgroundColor: '#ffffff', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 32px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ backgroundColor: '#e5f0ff', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ backgroundColor: '#4fa6fd', width: '16px', height: '16px', borderRadius: '4px' }}></div>
            </div>
            <h1 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#121c2c', margin: 0 }}>LogiAdmin</h1>
          </div>
          
          {/* Main Links */}
          <nav style={{ display: 'flex', gap: '32px', height: '100%' }}>
            <Link to="/admin/dashboard" style={{ color: '#6b7a90', fontWeight: 600, fontSize: '0.875rem', display: 'flex', alignItems: 'center', cursor: 'pointer', textDecoration: 'none' }}>Dashboard</Link>
            <Link to="/admin/orders" style={{ color: '#4fa6fd', fontWeight: 700, fontSize: '0.875rem', display: 'flex', alignItems: 'center', cursor: 'pointer', borderBottom: '3px solid #4fa6fd', height: '70px', textDecoration: 'none' }}>Orders</Link>
            <Link to="/admin/riders" style={{ color: '#6b7a90', fontWeight: 600, fontSize: '0.875rem', display: 'flex', alignItems: 'center', cursor: 'pointer', textDecoration: 'none' }}>Riders</Link>
            <Link to="/admin/customers" style={{ color: '#6b7a90', fontWeight: 600, fontSize: '0.875rem', display: 'flex', alignItems: 'center', cursor: 'pointer', textDecoration: 'none' }}>Customers</Link>
          </nav>
        </div>

        {/* Right Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', backgroundColor: '#f1f5f9', borderRadius: '8px', padding: '8px 16px', width: '280px' }}>
            <Search size={18} color="#94a3b8" />
            <input type="text" placeholder="Search orders..." style={{ border: 'none', background: 'transparent', outline: 'none', marginLeft: '12px', width: '100%', fontSize: '0.875rem', color: '#121c2c' }} />
          </div>
          <Bell size={20} color="#6b7a90" style={{ cursor: 'pointer' }} />
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#cda896', overflow: 'hidden' }}>
             {/* Profile image placeholder */}
          </div>
        </div>
      </div>

      <div className="order-split-layout" style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        
        {/* Left Sidebar */}
        <div className="desktop-only" style={{ width: '280px', backgroundColor: '#f6f9fc', borderRight: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '32px 24px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Link to="/admin/orders" className="nav-link-hover" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', backgroundColor: '#4fa6fd', color: '#ffffff', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer', boxShadow: '0 4px 12px rgba(79, 166, 253, 0.3)' }}>
              <ListTodo size={20} /> Active Orders
            </Link>
            <div className="nav-link-hover" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', color: '#121c2c', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer' }}>
              <History size={20} /> Order History
            </div>
            <Link to="/delivery/active" className="nav-link-hover" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', color: '#121c2c', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer' }}>
              <Truck size={20} /> Fleet Tracking
            </Link>
            <div className="nav-link-hover" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', color: '#121c2c', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer' }}>
              <BarChart3 size={20} /> Performance
            </div>
            <div className="nav-link-hover" style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: '12px', color: '#121c2c', fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer', marginTop: '32px' }}>
              <Settings size={20} /> Settings
            </div>
          </div>

          {/* Live Status Widget */}
          <div className="hover-lift" style={{ backgroundColor: '#e5f0ff', padding: '24px', borderRadius: '16px', border: '1px solid #d0e3ff' }}>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#4fa6fd', letterSpacing: '0.05em', marginBottom: '16px' }}>LIVE STATUS</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '12px' }}>
              <div style={{ color: '#121c2c', fontSize: '0.875rem', fontWeight: 600 }}>Total Today</div>
              <div style={{ color: '#121c2c', fontSize: '1.25rem', fontWeight: 800 }}>142</div>
            </div>
            <div style={{ width: '100%', height: '6px', backgroundColor: '#d0e3ff', borderRadius: '3px', marginBottom: '12px', overflow: 'hidden' }}>
              <div style={{ width: '65%', height: '100%', backgroundColor: '#4fa6fd', borderRadius: '3px' }}></div>
            </div>
            <div style={{ fontStyle: 'italic', color: '#6b7a90', fontSize: '0.75rem' }}>65% Delivered successfully</div>
          </div>
        </div>

        {/* Center Content */}
        <div className="order-split-main" style={{ flex: 1, padding: '32px', overflowY: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#121c2c', margin: '0 0 8px 0' }}>Order Management</h1>
              <p style={{ color: '#6b7a90', fontSize: '1rem', margin: 0 }}>Real-time logistics monitoring and dispatch control.</p>
            </div>
            <button className="btn-scale" style={{ backgroundColor: '#4fa6fd', color: '#ffffff', borderRadius: '8px', padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '1rem', border: 'none', cursor: 'pointer', boxShadow: '0 4px 12px rgba(79, 166, 253, 0.3)' }}>
              <Plus size={20} /> New Manual Order
            </button>
          </div>

          {/* Tabs */}
          <div style={{ display: 'flex', gap: '32px', borderBottom: '1px solid #e2e8f0', marginBottom: '24px', flexWrap: 'wrap' }}>
            <div style={{ color: '#4fa6fd', fontWeight: 700, fontSize: '0.875rem', paddingBottom: '16px', borderBottom: '3px solid #4fa6fd', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              All Orders <span style={{ backgroundColor: '#e5f0ff', color: '#4fa6fd', padding: '2px 8px', borderRadius: '100px', fontSize: '0.75rem' }}>84</span>
            </div>
            <div style={{ color: '#6b7a90', fontWeight: 600, fontSize: '0.875rem', paddingBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              Pending <span style={{ backgroundColor: '#f1f5f9', color: '#6b7a90', padding: '2px 8px', borderRadius: '100px', fontSize: '0.75rem' }}>12</span>
            </div>
            <div style={{ color: '#6b7a90', fontWeight: 600, fontSize: '0.875rem', paddingBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              In Transit <span style={{ backgroundColor: '#f1f5f9', color: '#6b7a90', padding: '2px 8px', borderRadius: '100px', fontSize: '0.75rem' }}>34</span>
            </div>
            <div style={{ color: '#6b7a90', fontWeight: 600, fontSize: '0.875rem', paddingBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              Delivered <span style={{ backgroundColor: '#f1f5f9', color: '#6b7a90', padding: '2px 8px', borderRadius: '100px', fontSize: '0.75rem' }}>38</span>
            </div>
          </div>

          {/* Filters */}
          <div style={{ display: 'flex', gap: '16px', marginBottom: '24px' }}>
            <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px', color: '#121c2c', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer', border: '1px solid #e2e8f0' }}>
              Today <ChevronDown size={16} color="#6b7a90" />
            </div>
            <div style={{ backgroundColor: '#ffffff', borderRadius: '8px', padding: '10px 16px', display: 'flex', alignItems: 'center', gap: '8px', color: '#121c2c', fontSize: '0.875rem', fontWeight: 600, cursor: 'pointer', border: '1px solid #e2e8f0' }}>
              High Priority <span style={{ fontWeight: 'bold' }}>!</span> 
            </div>
          </div>

          {/* Core Table */}
          <div style={{ backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.05)', overflow: 'hidden' }}>
            <div className="table-responsive-wrapper">
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid #f1f5f9', color: '#6b7a90', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.05em', backgroundColor: '#ffffff' }}>
                  <th style={{ padding: '20px 24px' }}>ORDER ID</th>
                  <th style={{ padding: '20px 24px' }}>CUSTOMER</th>
                  <th style={{ padding: '20px 24px' }}>ITEMS</th>
                  <th style={{ padding: '20px 24px' }}>STATUS</th>
                  <th style={{ padding: '20px 24px' }}>TOTAL</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: '#ORD-9421', active: true, name: 'Sarah Jenkins', loc: 'New York, NY', items: '3x Kitchenware...', status: 'OUT FOR DELIVERY', statusBg: '#e5f0ff', statusColor: '#4fa6fd', total: '₹245.00' },
                  { id: '#ORD-9418', active: false, name: 'Michael Chen', loc: 'Jersey City, NJ', items: '1x Gaming Mouse', status: 'PENDING', statusBg: '#fef3c7', statusColor: '#d97706', total: '₹59.99' },
                  { id: '#ORD-9415', active: false, name: 'Elena Rodriguez', loc: 'Brooklyn, NY', items: '2x Wireless Head...', status: 'DELIVERED', statusBg: '#dcfce7', statusColor: '#10b981', total: '₹189.50' },
                  { id: '#ORD-9412', active: false, name: 'James Wilson', loc: 'Staten Island, NY', items: '5x Office Supplies', status: 'DELIVERED', statusBg: '#dcfce7', statusColor: '#10b981', total: '₹112.20' },
                ].map(row => (
                  <tr key={row.id} className="table-row-hover" style={{ borderBottom: '1px solid #f1f5f9', backgroundColor: row.active ? '#f8fafc' : '#ffffff' }}>
                    <td style={{ padding: '24px', fontWeight: 800, color: row.active ? '#4fa6fd' : '#121c2c', fontSize: '0.875rem', position: 'relative' }}>
                      {row.active && <div style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#4fa6fd' }}></div>}
                      <span style={{ marginLeft: row.active ? '8px' : '0' }}>{row.id}</span>
                    </td>
                    <td style={{ padding: '24px' }}>
                      <div style={{ fontWeight: 800, color: '#121c2c', fontSize: '0.875rem', marginBottom: '4px' }}>{row.name}</div>
                      <div style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 600 }}>{row.loc}</div>
                    </td>
                    <td style={{ padding: '24px', color: '#475569', fontSize: '0.875rem', fontWeight: 500 }}>{row.items}</td>
                    <td style={{ padding: '24px' }}>
                      <span style={{ backgroundColor: row.statusBg, color: row.statusColor, padding: '6px 12px', borderRadius: '100px', fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.05em' }}>{row.status}</span>
                    </td>
                    <td style={{ padding: '24px', fontWeight: 800, color: '#121c2c', fontSize: '0.875rem' }}>{row.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
            
            <div style={{ padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid #e2e8f0' }}>
              <div style={{ fontSize: '0.875rem', color: '#6b7a90', fontWeight: 500 }}>
                Showing 1 to 4 of 84 orders
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', color: '#6b7a90', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ChevronLeft size={16} /></button>
                <button style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', color: '#121c2c', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ChevronRight size={16} /></button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Order Details */}
        <div className="order-split-sidebar" style={{ width: '400px', backgroundColor: '#ffffff', borderLeft: '1px solid #e2e8f0', padding: '32px', overflowY: 'auto' }}>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#121c2c', margin: 0 }}>Order Details</h2>
            <div style={{ backgroundColor: '#e5f0ff', color: '#4fa6fd', padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.05em' }}>ACTIVE</div>
          </div>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: '#121c2c', margin: '0 0 8px 0' }}>#ORD-9421</h1>
          <p style={{ color: '#94a3b8', fontSize: '0.875rem', margin: '0 0 32px 0', fontWeight: 500 }}>Placed on Oct 24, 2023 • 11:24 AM</p>

          {/* Customer Info */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.05em', marginBottom: '16px' }}>CUSTOMER INFO</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', backgroundColor: '#e5f0ff', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '1.25rem', color: '#4fa6fd' }}>SJ</span>
              </div>
              <div>
                <div style={{ fontWeight: 800, color: '#121c2c', fontSize: '0.875rem', marginBottom: '4px' }}>Sarah Jenkins</div>
                <div style={{ color: '#6b7a90', fontSize: '0.75rem', marginBottom: '2px' }}>sarah.j@example.com</div>
                <div style={{ color: '#6b7a90', fontSize: '0.75rem' }}>+1 (555) 098-7654</div>
              </div>
            </div>
          </div>

          {/* Shipping To */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.05em', marginBottom: '16px' }}>SHIPPING TO</div>
            <div style={{ backgroundColor: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid #f1f5f9' }}>
              <div style={{ color: '#121c2c', fontSize: '0.875rem', fontWeight: 600, marginBottom: '4px' }}>422 E 14th St, Apt 4B</div>
              <div style={{ color: '#6b7a90', fontSize: '0.875rem', fontWeight: 500 }}>New York, NY 10009</div>
            </div>
          </div>

          {/* Delivery Partner */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ color: '#4fa6fd', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.05em' }}>DELIVERY PARTNER</div>
              <div style={{ color: '#4fa6fd', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer', textDecoration: 'underline' }}>Change</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ position: 'relative' }}>
                  <div style={{ width: '48px', height: '48px', backgroundColor: '#10b981', borderRadius: '50%', overflow: 'hidden' }}>
                    {/* DP image placeholder */}
                  </div>
                  <div style={{ position: 'absolute', bottom: 0, right: 0, backgroundColor: '#ffffff', borderRadius: '50%', padding: '2px' }}>
                    <div style={{ width: '12px', height: '12px', backgroundColor: '#10b981', borderRadius: '50%' }}></div>
                  </div>
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: '#121c2c', fontSize: '0.875rem', marginBottom: '4px' }}>David Miller</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#6b7a90', fontSize: '0.75rem', fontWeight: 600 }}>
                    <Star size={12} fill="#ca8a04" stroke="#ca8a04" /> 4.9 Rated • 2.4 mi away
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <Phone size={16} color="#4fa6fd" />
                </div>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <MapPin size={16} color="#4fa6fd" />
                </div>
              </div>
            </div>
          </div>

          {/* Items */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.05em', marginBottom: '16px' }}>ITEMS (3)</div>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Package size={24} color="#94a3b8" />
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: '#121c2c', fontSize: '0.875rem', marginBottom: '4px' }}>Professional Chef Knife</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 500 }}>SKU: KN-902 • Qty: 1</div>
                </div>
              </div>
              <div style={{ fontWeight: 800, color: '#121c2c', fontSize: '0.875rem' }}>₹129.00</div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: '#f1f5f9', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Package size={24} color="#94a3b8" />
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: '#121c2c', fontSize: '0.875rem', marginBottom: '4px' }}>Silicone Spatula Set</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.75rem', fontWeight: 500 }}>SKU: SP-110 • Qty: 2</div>
                </div>
              </div>
              <div style={{ fontWeight: 800, color: '#121c2c', fontSize: '0.875rem' }}>₹58.00</div>
            </div>

          </div>

          {/* Pricing Summary */}
          <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '24px', marginBottom: '32px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ color: '#6b7a90', fontSize: '0.875rem', fontWeight: 600 }}>Subtotal</div>
              <div style={{ color: '#121c2c', fontSize: '0.875rem', fontWeight: 800 }}>₹187.00</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
              <div style={{ color: '#6b7a90', fontSize: '0.875rem', fontWeight: 600 }}>Shipping & Tax</div>
              <div style={{ color: '#121c2c', fontSize: '0.875rem', fontWeight: 800 }}>₹58.00</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ color: '#121c2c', fontSize: '1.125rem', fontWeight: 800 }}>Total Amount</div>
              <div style={{ color: '#4fa6fd', fontSize: '1.5rem', fontWeight: 800 }}>₹245.00</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '16px' }}>
            <button className="btn-scale" style={{ flex: 1, backgroundColor: '#ffffff', color: '#121c2c', border: '1px solid #e2e8f0', borderRadius: '12px', padding: '16px 0', fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer' }}>
              Print Invoice
            </button>
            <button className="btn-scale" style={{ flex: 1, backgroundColor: '#4fa6fd', color: '#ffffff', border: 'none', borderRadius: '12px', padding: '16px 0', fontWeight: 700, fontSize: '0.875rem', cursor: 'pointer', boxShadow: '0 4px 12px rgba(79, 166, 253, 0.3)' }}>
              Update Status
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default OrderManagement;
