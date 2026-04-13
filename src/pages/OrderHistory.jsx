import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import Header from '../components/Header';

export default function OrderHistory() {
  const [activeTab, setActiveTab] = useState('WEEKLY');
  const tabs = ['WEEKLY', 'MONTHLY'];

  const recentOrders = [
    {
      id: 101, name: 'A2 Cow Milk', status: 'DELIVERED', date: 'Oct 24, 2023', items: 3, price: 24.50,
      image: '/milk.png'
    },
    {
      id: 102, name: 'Soft Malai Paneer', status: 'DELIVERED', date: 'Oct 21, 2023', items: 2, price: 32.00,
      image: '/paneer.png'
    },
    {
      id: 103, name: 'Fresh Set Curd', status: 'DELIVERED', date: 'Oct 19, 2023', items: 5, price: 45.20,
      image: '/curd.png'
    }
  ];

  const pastOrders = [
    {
      id: 104, name: 'Salted Cow Butter', status: '', date: 'Oct 15, 2023', items: 4, price: 18.75,
      image: '/butter.png',
      greyscale: true
    }
  ];

  const OrderCard = ({ order, isPast }) => (
    <div className="bg-white p-4 rounded-2xl mb-4 shadow-sm" style={{ border: '1px solid var(--border-light)' }}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h4 className="font-bold text-base text-dark">{order.name}</h4>
            {order.status && (
              <span className="text-[9px] font-bold px-2 py-0.5 rounded" style={{ backgroundColor: '#d1fae5', color: '#059669' }}>
                {order.status}
              </span>
            )}
          </div>
          <p className="text-xs text-gray mb-1">
            {order.date} • {order.items} items • ₹{order.price.toFixed(2)}
          </p>
        </div>
        <img 
          src={order.image} 
          alt={order.name} 
          className="w-16 h-16 rounded-xl object-cover" 
          style={{ filter: order.greyscale ? 'grayscale(100%)' : 'none' }}
        />
      </div>
      <div style={{ textAlign: 'left' }}>
        <button 
          className="flex items-center justify-center rounded-xl text-sm font-bold shadow-sm"
          style={{ 
            display: 'inline-flex',
            padding: '10px 24px',
            backgroundColor: isPast ? '#f1f5f9' : 'var(--primary-blue)', 
            color: isPast ? 'var(--text-dark)' : 'white'
          }}
        >
          <RotateCcw size={16} className="mr-2" /> Reorder
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col h-full bg-color pb-24 relative min-h-screen">
      <Header title="Order History" />

      {/* Tabs */}
      <div className="flex px-4 pt-2 bg-color border-b" style={{ borderBottomColor: 'var(--border-light)' }}>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className="flex-1 py-3 text-xs font-bold tracking-wider"
            style={{ 
              color: activeTab === tab ? 'var(--primary-blue)' : 'var(--text-gray)',
              borderBottom: activeTab === tab ? '2px solid var(--primary-blue)' : '2px solid transparent',
              transition: 'all 0.2s'
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="page-wrapper pt-6">
        <h3 className="font-bold text-lg text-dark mb-4">Recent Orders</h3>
        <div className="responsive-row">
          {recentOrders.map(order => <OrderCard key={order.id} order={order} />)}
        </div>

        <h3 className="font-bold text-lg text-dark mt-6 mb-4">Past Orders</h3>
        <div className="responsive-row">
          {pastOrders.map(order => <OrderCard key={order.id} order={order} isPast={true} />)}
        </div>
      </div>
    </div>
  );
}
