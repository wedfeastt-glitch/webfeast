import { useState } from 'react';
import { Send } from 'lucide-react';
import './CateringCalculator.css';

const MENU_SECTIONS = [
  {
    id: 'welcome_drinks',
    label: '🍹 Welcome Drinks / Juices',
    items: ['Grape Juice', 'Watermelon Juice', 'Fruit Punch', 'Fresh Juice (3 varieties)', 'Mocktail Juice', 'Rooh Afza'],
  },
  {
    id: 'soups',
    label: '🥣 Soups',
    items: ['Vegetable Soup', 'Sweet Corn Soup', 'Tomato Soup', 'Mushroom Soup', 'Baby Corn Soup'],
  },
  {
    id: 'starters_veg',
    label: '🍢 Starters (Veg)',
    items: ['Veg Spring Roll', 'Paneer Tikka', 'Paneer Kabab', 'Cutlet', 'French Fries', 'Chilly Gobi', 'Cashew Pakoda', 'Ladies Finger Pakoda', 'Mini Idly', 'Mini Dosa', 'Butter Chilli', 'Stuffed Chapathi'],
  },
  {
    id: 'starters_nonveg',
    label: '🍗 Starters (Non-Veg)',
    items: ['Chicken 65', 'Chilli Chicken', 'Chicken Fry', 'Chicken Tandoori', 'Prawn Fry', 'Prawn Masala', 'Fish Fry (Vanjaram Fish)', 'Chicken Dry', 'Beef Dry / Beef Ularthu'],
  },
  {
    id: 'curries_veg',
    label: '🍛 Main Course – Veg Curries',
    items: ['Paneer Butter Masala', 'Palak Paneer', 'Veg Kurma', 'Aloo Mutter', 'Mushroom Pepper Masala', 'Dal Makhani', 'Veg Chettinad', 'Kadai Paneer', 'Brinjal Gravy', 'Beans Punjab Curry', 'Cauliflower 65', 'Vegetable Manchurian'],
  },
  {
    id: 'curries_nonveg',
    label: '🍗 Main Course – Non-Veg Curries',
    items: ['Chettinad Chicken', 'Naadan Chicken Curry', 'Mutton Sukka', 'Mutton Boti', 'Mutton Varutharacha Curry', 'Chicken Chettinad', 'Prawns Masala'],
  },
  {
    id: 'rice_biriyani',
    label: '🍚 Rice & Biriyani Items',
    items: ['Veg Dum Biriyani', 'Mushroom Biriyani', 'Chicken Biriyani', 'Mutton Biriyani', 'Hyderabad Biriyani', 'Bisibele Bath', 'Ghee Rice', 'Veg Pulao', 'Fried Rice', 'White Rice', 'Sambar Rice', 'Curd Rice', 'Aval Thayir Sadam', 'Curry Leaves Rice'],
  },
  {
    id: 'breads',
    label: '🫓 Breads / Tiffin Items',
    items: ['Rumali Roti', 'Chapathi', 'Parotta / Kerala Paratha', 'Phulka', 'Appam', 'Idiyappam', 'Pathiri', 'Dosa (Ghee, Masala, Onion, Oothappam, Kalakki)', 'Onion Podi Uttapam'],
  },
  {
    id: 'sadhya',
    label: '🥗 Sadhya / Traditional Veg Items',
    items: ['Sambar', 'Rasam', 'Moru', 'Kalan', 'Olan', 'Aviyal', 'Koottu Curry', 'Pineapple Pachadi', 'Thoran', 'Ghee Parippu', 'Pulinchi', 'Poriyal', 'Varavu (2 types)'],
  },
  {
    id: 'sides',
    label: '🥒 Side Dishes / Accompaniments',
    items: ['Onion Raitha', 'Salad', 'Pickle (Mango Pickle, More Milagai)', 'Appalam / Pappadam', 'Javvarasi Vadam', 'Potato Chips', 'Senai Chips', 'Urulai Pirai', 'Banana Leaf'],
  },
  {
    id: 'desserts',
    label: '🍰 Desserts / Sweets',
    items: ['Rasmalai', 'Bread Halwa', 'Badam Halwa', 'Carrot Halwa', 'Anarkali Sweet', 'Dry Jamun / Jamun Malai', 'Rasgulla', 'Jalebi', 'Ilaneer Payasam', 'Palada Payasam', 'Payasam', 'Badam Kajak / Kajukatli', 'Fruit Salad', 'Ice Cream', 'Ice Cream with Pudding', 'Badam with Ice Cream'],
  },
  {
    id: 'stalls',
    label: '🧃 Stalls / Extras',
    items: ['Pani Poori', 'Bhel Poori', 'Samosa', 'Popcorn', 'Sweet Candy', 'Sweet Beeda', 'Panjumittai'],
  },
  {
    id: 'beverages',
    label: '☕ Beverages',
    items: ['Tea', 'Coffee', 'Water Bottle / Mineral Water'],
  },
  {
    id: 'service',
    label: '👨‍🍳 Service Items',
    items: ['Service Boys', 'Supervisor', 'Welcome Girls'],
  },
];

const CateringCalculator = () => {
  const [guests, setGuests] = useState(100);
  const [selected, setSelected] = useState({});
  const [openSections, setOpenSections] = useState({ welcome_drinks: true });

  const toggle = (sectionId, item) => {
    setSelected(prev => {
      const sec = prev[sectionId] || [];
      return {
        ...prev,
        [sectionId]: sec.includes(item) ? sec.filter(i => i !== item) : [...sec, item],
      };
    });
  };

  const selectAll = (sectionId, items) => {
    setSelected(prev => ({ ...prev, [sectionId]: [...items] }));
  };

  const clearSection = (sectionId) => {
    setSelected(prev => ({ ...prev, [sectionId]: [] }));
  };

  const toggleSection = (id) => {
    setOpenSections(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const totalSelected = Object.values(selected).flat().length;

  const handleSubmit = () => {
    const lines = [`*Catering Enquiry*`, `Guests: ${guests}`];
    MENU_SECTIONS.forEach(sec => {
      const items = selected[sec.id];
      if (items && items.length > 0) {
        lines.push(`\n*${sec.label}*`);
        items.forEach(item => lines.push(`  • ${item}`));
      }
    });
    if (totalSelected === 0) {
      lines.push('\n_(No items selected yet)_');
    }
    const msg = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/918220136305?text=${msg}`, '_blank');
  };

  return (
    <div className="catering-calculator">
      <h2 className="calculator-title">Catering Menu Selector</h2>
      <p className="calculator-subtitle">Select your preferred items and send us your enquiry via WhatsApp</p>

      {/* Guest count */}
      <div className="control-group">
        <label>Number of Guests: <span className="guest-count-val">{guests}</span></label>
        <input
          type="range"
          min="50"
          max="1000"
          step="10"
          value={guests}
          onChange={e => setGuests(Number(e.target.value))}
          className="guest-slider"
        />
        <div className="slider-labels"><span>50</span><span>500</span><span>1000</span></div>
      </div>

      {/* Menu sections */}
      <div className="menu-sections">
        {MENU_SECTIONS.map(sec => (
          <div key={sec.id} className="menu-section">
            <button
              className={`menu-section-header${openSections[sec.id] ? ' open' : ''}`}
              onClick={() => toggleSection(sec.id)}
            >
              <span>{sec.label}</span>
              <span className="section-meta">
                {selected[sec.id]?.length > 0 && (
                  <span className="section-badge">{selected[sec.id].length}</span>
                )}
                <span className="section-arrow">{openSections[sec.id] ? '▲' : '▼'}</span>
              </span>
            </button>
            {openSections[sec.id] && (
              <div className="menu-section-body">
                <div className="section-actions">
                  <button
                    className="sec-action-btn select-all"
                    onClick={() => selectAll(sec.id, sec.items)}
                  >
                    Select All
                  </button>
                  <button
                    className="sec-action-btn clear-all"
                    onClick={() => clearSection(sec.id)}
                  >
                    Clear
                  </button>
                </div>
                <div className="menu-items-grid">
                  {sec.items.map(item => {
                    const checked = (selected[sec.id] || []).includes(item);
                    return (
                      <label key={item} className={`menu-item${checked ? ' checked' : ''}`}>
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggle(sec.id, item)}
                        />
                        <span>{item}</span>
                      </label>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Submit */}
      <div className="calculator-submit">
        <div className="submit-summary">
          {totalSelected > 0
            ? <span>{totalSelected} item{totalSelected > 1 ? 's' : ''} selected for {guests} guests</span>
            : <span>Select items above to build your menu</span>
          }
        </div>
        <button className="btn btn-primary submit-whatsapp" onClick={handleSubmit}>
          <Send size={18} />
          Send Enquiry on WhatsApp
        </button>
      </div>
    </div>
  );
};

export default CateringCalculator;
