import React, { useState } from 'react';
import './taxi.css';
import Navbar from '../navbar/Navbar';
import Header from '../header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faClock, faMoneyBillWave, faShieldAlt, faSmile } from '@fortawesome/free-solid-svg-icons'; // Import specific icons

const itemsData = [
  { id: 1, name: 'تاكسي المطار', details: 'خدمة توصيل مريحة وموثوقة من وإلى المطار في أي وقت.', image: '../taxi/تاكسي-المطار_20240205_205821_٠٠٠٠.png' },
  { id: 2, name: 'سيارة خاصة مع سائق', details: 'استئجار سيارة خاصة مع سائق ليوم كامل أو لجولات سياحية مخصصة.', image: '../taxi/istockphoto-162308450-612x612-1.jpg' },
  { id: 3, name: 'حافلة سياحية للمجموعات', details: 'حافلات مكيفة ومريحة لنقل المجموعات السياحية الكبيرة.', image: '../taxi/146.jpg' },
  { id: 4, name: 'سيارة أجرة اقتصادية', details: 'وسيلة تنقل اقتصادية للتجول داخل المدن والوصول إلى المعالم السياحية القريبة.', image: '../taxi/download.jpeg.jpg' },
  { id: 5, name: 'سيارة  للسفاري', details: 'الوصول إلى المعالم السياحية القريبة.', image: '../taxi/Safari-1.jpg' },
  { id: 6, name: 'خدمة النقل بين المدن', details: 'حجز سيارات أو حافلات مريحة للانتقال بين المدن السياحية المختلفة.', image: '../taxi/image-12.png' },
  { id: 7, name: 'تأجير سيارات', details: 'استئجار سيارة بنفسك للاستمتاع بحرية التنقل واستكشاف المناطق.', image: '../taxi/aaaa.jpg' },
  { id: 8, name: 'دراجات هوائية للاستكشاف', details: 'استئجار دراجات هوائية للاستمتاع بجولات ممتعة في المناطق السياحية أو على الكورنيش.', image: '../taxi/All-You-Need-to-Know-About-Bikes.webp' },
  { id: 9, name: 'خدمة نقل خاصة لذوي الاحتياجات', details: 'سيارات مجهزة خصيصًا لتوفير تنقل مريح وآمن لذوي الاحتياجات الخاصة.', image: '../taxi/aaaa.jpg' },
  { id: 11, name: 'توك توك سياحي', details: 'تجربة تنقل فريدة وممتعة في المناطق السياحية الشعبية والأسواق التقليدية.', image: '../taxi/2457273_0.jpg' },
  { id: 12, name: 'خدمة نقل بحري (قوارب/عبّارات)', details: 'للتنقل بين الجزر أو الاستمتاع برحلات بحرية في الأنهار والبحيرات.', image: '../taxi/10.jpg' },
];
const Taxi = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(itemsData);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const results = itemsData.filter(item =>
      item.name.toLowerCase().includes(term)
    );
    setSearchResults(results);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="taxi-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="ابحث عن وسيلة تنقلك المثالية..."
            value={searchTerm}
            onChange={handleSearch}
            className="search-input"
          />
          <button className="search-button">بحث</button>
        </div>

        <div className="promo-text">
          <p>استكشف مجموعتنا المتنوعة من وسائل النقل واحجز رحلتك بكل سهولة!</p>
        </div>

        {/* ✨ نتائج البحث هتكون هنا ✨ */}
        <div className="items-grid">
          {searchResults.map(item => (
            <div key={item.id} className="item-card">
              <img src={item.image} alt={item.name} className="item-image" />
              <div className="item-details">
                <h3>{item.name}</h3>
                <p>{item.details}</p>
                <button className="view-details-button">عرض التفاصيل</button>
              </div>
            </div>
          ))}
          {searchResults.length === 0 && searchTerm && (
            <p className="no-results">لا توجد نتائج للبحث "{searchTerm}"</p>
          )}
        </div>

        {/* ✨ قسم لماذا تختار خدمتنا؟ هيكون تحت ✨ */}
        <div className="why-choose-us">
          <h2>لماذا تختار خدمتنا؟</h2>
          <div className="features-grid">
            <div className="feature-card">
              <FontAwesomeIcon icon={faMoneyBillWave} className="feature-icon" />
              <h3>أسعار تنافسية</h3>
              <p>نقدم أفضل الأسعار لضمان حصولك على قيمة ممتازة مقابل نقودك.</p>
            </div>
            <div className="feature-card">
              <FontAwesomeIcon icon={faCar} className="feature-icon" />
              <h3>سائقون محترفون</h3>
              <p>سائقونا مدربون وذوو خبرة لضمان رحلة آمنة ومريحة.</p>
            </div>
            <div className="feature-card">
              <FontAwesomeIcon icon={faClock} className="feature-icon" />
              <h3>خدمة على مدار الساعة</h3>
              <p>نحن متواجدون لخدمتك في أي وقت تحتاج إلينا، على مدار 24 ساعة.</p>
            </div>
            <div className="feature-card">
              <FontAwesomeIcon icon={faShieldAlt} className="feature-icon" />
              <h3>أمان وراحة</h3>
              <p>نحرص على توفير أعلى معايير الأمان والراحة في جميع رحلاتنا.</p>
            </div>
            <div className="feature-card">
              <FontAwesomeIcon icon={faSmile} className="feature-icon" />
              <h3>تجربة ممتعة</h3>
              <p>نسعى لجعل رحلتك تجربة ممتعة وسلسة من البداية إلى النهاية.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Taxi;