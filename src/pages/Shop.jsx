import { useState } from 'react';
import { ShoppingCart, Menu, Search, Plus, Minus, SlidersHorizontal } from 'lucide-react';

export default function Shop() {
  const categories = ['Milk', 'Curd', 'Paneer', 'Butter', 'Ghee'];

  const [quantities, setQuantities] = useState({
    1: 1, 2: 1, 3: 1, 4: 0, 5: 1, 6: 1
  });

  const handleQtyChange = (id, delta) => {
    setQuantities(prev => ({
      ...prev,
      [id]: Math.max(0, (prev[id] || 0) + delta)
    }));
  };

  const products = [
    { id: 1, name: 'Farm Fresh Whole Milk', weight: '1 Litre', price: '4.50', img: '/milk.png', badge: 'ORGANIC', badgeColor: '#10b981' },
    { id: 2, name: 'Skimmed Low Fat Milk', weight: '500 ml', price: '2.25', img: '/milk.png', badge: null },
    { id: 3, name: 'Probiotic Thick Curd', weight: '400g', price: '3.10', img: '/curd.png', badge: 'POPULAR', badgeColor: '#f97316' },
    { id: 4, name: 'Fresh Malai Paneer', weight: '200g', price: '5.20', img: '/paneer.png', badge: null },
    { id: 5, name: 'Salted Cow Butter', weight: '500g', price: '6.80', img: '/butter.png', badge: null },
    { id: 6, name: 'Pure Desi Ghee', weight: '1 Litre', price: '18.00', img: '/butter.png', badge: null },
  ];

  return (
    <div className="flex flex-col h-full animate-fade-in" style={{ backgroundColor: '#f6f9fc', minHeight: '100vh', paddingBottom: '80px' }}>
      
      {/* Header */}
      <div className="flex justify-between items-center page-wrapper" style={{ paddingTop: '24px', paddingBottom: '16px' }}>
        <div className="flex items-center gap-4">
          <div style={{ width: '40px', height: '40px', backgroundColor: '#e5f0ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Menu size={20} color="#4fa6fd" />
          </div>
          <h2 className="text-lg font-bold">Dairy Fresh</h2>
        </div>
        <div style={{ width: '40px', height: '40px', backgroundColor: '#e5f0ff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <ShoppingCart size={20} color="#4fa6fd" />
          <div style={{ position: 'absolute', top: '8px', right: '8px', width: '14px', height: '14px', backgroundColor: '#4fa6fd', borderRadius: '50%', border: '2px solid #e5f0ff', color: 'white', fontSize: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
            2
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-light scrollbar-hide page-wrapper" style={{ overflowX: 'auto', gap: '24px' }}>
        {categories.map((cat, idx) => (
          <div 
            key={cat} 
            className={`text-sm font-semibold whitespace-nowrap ${idx === 0 ? 'text-primary' : 'text-gray'}`} 
            style={{ paddingBottom: '12px', borderBottom: idx === 0 ? '2px solid #4fa6fd' : '2px solid transparent', cursor: 'pointer' }}
          >
            {cat}
          </div>
        ))}
      </div>

      <div className="page-wrapper" style={{ paddingTop: '24px' }}>
        {/* Search */}
        <div className="flex items-center" style={{ backgroundColor: '#e2e8f0', borderRadius: '16px', padding: '12px 16px', marginBottom: '24px', opacity: 0.7 }}>
          <Search size={20} className="text-gray" style={{ marginRight: '12px' }} />
          <input 
            type="text" 
            placeholder="Search dairy products..." 
            style={{ background: 'none', border: 'none', outline: 'none', width: '100%', fontSize: '14px', color: 'var(--text-dark)' }}
          />
        </div>

        <div className="flex justify-between items-center" style={{ marginBottom: '20px' }}>
          <h3 className="text-lg font-bold">Fresh Milk</h3>
          <button className="text-sm text-primary flex items-center gap-1 font-semibold cursor-pointer">Filter</button>
        </div>

        {/* Product Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '16px', paddingBottom: '24px' }}>
          {products.map(product => (
            <div key={product.id} style={{ backgroundColor: 'white', borderRadius: '16px', overflow: 'hidden', boxShadow: 'var(--surface-shadow)' }}>
              <div style={{ position: 'relative' }}>
                 <img src={product.img} style={{ width: '100%', height: '160px', objectFit: 'cover' }} />
                 {product.badge && (
                   <span style={{ position: 'absolute', top: '12px', left: '12px', backgroundColor: product.badgeColor, color: 'white', fontSize: '10px', fontWeight: 'bold', padding: '4px 8px', borderRadius: '8px' }}>
                     {product.badge}
                   </span>
                 )}
              </div>
              <div style={{ padding: '16px' }}>
                <h4 className="font-bold text-sm" style={{ marginBottom: '4px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{product.name}</h4>
                <p className="text-xs text-gray" style={{ marginBottom: '12px' }}>{product.weight}</p>
                
                <div className="flex justify-between items-center" style={{ marginBottom: '16px' }}>
                   <span className="font-bold text-primary text-base">₹{parseFloat(product.price).toFixed(2)}</span>
                   <div className="flex items-center" style={{ backgroundColor: quantities[product.id] === 0 ? '#f8fafc' : '#f0f6fc', borderRadius: '8px', padding: '4px', opacity: quantities[product.id] === 0 ? 0.5 : 1 }}>
                     <button onClick={() => handleQtyChange(product.id, -1)} style={{ color: quantities[product.id] === 0 ? '#94a3b8' : '#4fa6fd', padding: '4px' }}><Minus size={14} /></button>
                     <span className="font-bold text-sm mx-2" style={{ width: '16px', textAlign: 'center' }}>{quantities[product.id]}</span>
                     <button onClick={() => handleQtyChange(product.id, 1)} style={{ color: '#4fa6fd', padding: '4px' }}><Plus size={14} /></button>
                   </div>
                </div>

                <button className="btn-primary text-sm" style={{ padding: '10px', borderRadius: '10px' }}>
                  <ShoppingCart size={16} /> Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
