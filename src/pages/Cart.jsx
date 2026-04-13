import { useState } from 'react';
import { Minus, Plus, Ticket, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

export default function Cart() {
  const navigate = useNavigate();
  const [items, setItems] = useState([
    { id: 1, name: 'A2 Cow Milk', price: 4.50, qty: 2, image: '/milk.png' },
    { id: 2, name: 'Soft Malai Paneer', price: 45.00, qty: 1, image: '/paneer.png' },
    { id: 3, name: 'Fresh Set Curd', price: 3.25, qty: 1, image: '/curd.png' }
  ]);

  const updateQty = (id, delta) => {
    setItems(items.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.qty + delta);
        return { ...item, qty: newQty };
      }
      return item;
    }));
  };

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const deliveryFee = 2.99;
  const taxes = 1.45;
  const total = subtotal + deliveryFee + taxes;
  console.log("Total is", total);

  return (
    <div className="flex flex-col h-full animate-fade-in pb-24 bg-color">
      <Header title="My Basket" />
      
      <div className="page-wrapper mt-4">
        <div className="responsive-row">
          
          {/* Left Column: Items */}
          <div style={{ flex: '1.5' }}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg text-dark">Order Items</h3>
              <span className="text-primary text-sm font-semibold">{items.length} Items</span>
            </div>

            <div className="flex flex-col gap-4 mb-6">
              {items.map(item => (
                <div key={item.id} className="flex p-4 bg-white rounded-2xl shadow-sm items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-16 h-16 rounded-xl object-cover" />
                  <div className="flex-1">
                    <h4 className="font-bold text-sm text-dark">{item.name}</h4>
                    <p className="text-xs text-gray mb-1">₹{item.price.toFixed(2)} / unit</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-primary">₹{(item.price * item.qty).toFixed(2)}</span>
                      <div className="flex items-center gap-3 bg-color rounded-full px-2 py-1">
                        <button onClick={() => updateQty(item.id, -1)} className="text-primary w-6 h-6 flex justify-center items-center rounded-full hover:bg-white"><Minus size={14} /></button>
                        <span className="text-sm font-bold w-4 text-center">{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1)} className="text-primary w-6 h-6 flex justify-center items-center rounded-full hover:bg-white"><Plus size={14} /></button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Checkout Summary */}
          <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
            <div className="bg-white p-2 rounded-2xl flex items-center shadow-sm mb-6 gap-2">
              <div className="pl-3 text-gray">
                <Ticket size={24} />
              </div>
              <input 
                type="text" 
                placeholder="Apply Promo Code" 
                className="flex-1 bg-transparent border-none outline-none text-sm px-2 text-dark"
              />
              <button className="bg-blue-50 text-primary px-6 py-3 rounded-xl font-bold text-sm" style={{backgroundColor: 'var(--accent-blue-light)'}}>
                Apply
              </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
              <div className="flex flex-col gap-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray text-sm">Subtotal</span>
                  <span className="font-bold text-dark">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray text-sm">Delivery Fee</span>
                  <span className="font-bold text-dark">₹{deliveryFee.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray text-sm">Estimated Taxes</span>
                  <span className="font-bold text-dark">₹{taxes.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-3 border-t border-light mt-2">
                  <span className="text-dark font-bold">Total</span>
                  <span className="font-bold text-primary text-lg">₹{total.toFixed(2)}</span>
                </div>
              </div>

              <button 
                onClick={() => navigate('/checkout')}
                className="w-full btn-primary flex justify-center items-center py-4 text-base shadow-md"
              >
                Proceed to Checkout <ArrowRight size={20} className="ml-2" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
