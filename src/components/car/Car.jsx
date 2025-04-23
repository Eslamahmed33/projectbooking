import React, { useState } from 'react';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import './car.css';
import { FaCar, FaCalendarAlt, FaMapMarkerAlt, FaGasPump, FaCog } from 'react-icons/fa';

const carOptions = [
  {
    id: 1,
    make: 'Toyota',
    model: 'Corolla',
    fuelType: 'بنزين',
    transmission: 'أوتوماتيك',
    price: 350,
    features: ['تكييف', 'راديو', 'وسائد هوائية'],
    image: '../car/2026-toyota-corolla-rendered-does-the-new-year-new-me-look-suit-it_4.jpg'
  },
  {
    id: 2,
    make: 'Hyundai',
    model: 'Elantra',
    fuelType: 'بنزين',
    transmission: 'أوتوماتيك',
    price: 320,
    features: ['تكييف', 'نظام صوتي', 'فرامل ABS'],
    image: '../car/هيونداي-النترا-CN7-1.jpg'
  },
  {
    id: 3,
    make: 'Kia',
    model: 'Sportage',
    fuelType: 'بنزين',
    transmission: 'أوتوماتيك',
    price: 450,
    features: ['تكييف', 'فتحة سقف', 'نظام ملاحة'],
    image: '../car/images (1).jpeg.jpg'
  },
  {
    id: 4,
    make: 'Nissan',
    model: 'Sunny',
    fuelType: 'بنزين',
    transmission: 'مانيوال',
    price: 280,
    features: ['تكييف', 'راديو'],
    image: '../car/1584922910_576_61867_964x354_b.jpg.ximg_.l_12_m.smart_.jpg'
  },
  {
    id: 5,
    make: 'Mercedes-Benz',
    model: 'C-Class',
    fuelType: 'بنزين',
    transmission: 'أوتوماتيك',
    price: 800,
    features: ['تكييف', 'مقاعد جلدية', 'نظام صوت فاخر', 'GPS'],
    image: '../car/2023-AMG-C-COUPE-GAL-009-D-TE-FE-DR.webp'
  },
  {
    id: 6,
    make: 'BMW',
    model: '3 Series',
    fuelType: 'بنزين',
    transmission: 'أوتوماتيك',
    price: 750,
    features: ['تكييف', 'فتحة سقف', 'حساسات ركن'],
    image: '../car/P90485000_highRes_bmw-330e-xdrive-tour.jpg'
  },
  {
    id: 7,
    make: 'Ford',
    model: 'Focus',
    fuelType: 'بنزين',
    transmission: 'أوتوماتيك',
    price: 380,
    features: ['تكييف', 'مثبت سرعة', 'كاميرا خلفية'],
    image: '../car/image.webp'
  },
  {
    id: 8,
    make: 'Chevrolet',
    model: 'Cruze',
    fuelType: 'بنزين',
    transmission: 'أوتوماتيك',
    price: 300,
    features: ['تكييف', 'شاشة لمس', 'بلوتوث'],
    image: '../car/chevrolet-cruze-hatchback.jpg'
  },
  {
    id: 9,
    make: 'Volkswagen',
    model: 'Golf',
    fuelType: 'بنزين',
    transmission: 'أوتوماتيك',
    price: 420,
    features: ['تكييف', 'نظام صوتي متطور', 'حساسات أمامية وخلفية'],
    image: '../car/images.jpeg.jpg'
  },
  {
    id: 10,
    make: 'Peugeot',
    model: '301',
    fuelType: 'بنزين',
    transmission: 'مانيوال',
    price: 260,
    features: ['تكييف'],
    image: '../car/de451f995cb34b29987d0073abc1cc12_3c6a071b-1a5d-4925-afc1-28f699858bf7.webp'
  },
  {
    id: 11,
    make: 'Skoda',
    model: 'Octavia',
    fuelType: 'بنزين',
    transmission: 'أوتوماتيك',
    price: 400,
    features: ['تكييف', 'مساحة تخزين كبيرة', 'نظام أمان متكامل'],
    image: '../car/New_2024_Octavia-FL-Limo_Alex-3-kopie_820ba49a.jpg'
  },
  {
    id: 12,
    make: 'Renault',
    model: 'Megane',
    fuelType: 'بنزين',
    transmission: 'أوتوماتيك',
    price: 360,
    features: ['تكييف', 'نظام مساعدة على القيادة', 'إضاءة LED'],
    image: '../car/reno-megan-i-tek-elektrik.jpg'}
];

const Car = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [dropoffDate, setDropoffDate] = useState('');
  const [searchResults, setSearchResults] = useState(carOptions); // نعرض كل السيارات في البداية

  const handleSearch = () => {
    // هنا هنعمل عملية البحث بناءً على المدخلات
    const filteredResults = carOptions.filter(car =>
      car.make.toLowerCase().includes(pickupLocation.toLowerCase()) || // مثال بسيط للبحث باسم الشركة
      car.model.toLowerCase().includes(pickupLocation.toLowerCase()) // أو موديل السيارة
      // ممكن تضيف شروط بحث بناءً على موقع الاستلام وتاريخه لو عندك البيانات دي
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className="car-page">
      <Navbar />
      <Header type="list" />
      <div className="car-search-container">
        <div className="car-search-box">
          <h2>اعثر على سيارتك المثالية للإيجار</h2>
          <p>قارن بين أفضل عروض تأجير السيارات واحجز بأفضل الأسعار.</p>
          <div className="car-form">
            <div className="car-input">
              <FaMapMarkerAlt className="car-icon" />
              <input
                type="text"
                placeholder="ابحث عن اسم الشركة أو الموديل"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
              />
            </div>
            {/* <div className="car-input">
              <FaMapMarkerAlt className="car-icon" />
              <input
                type="text"
                placeholder="موقع التسليم (اختياري)"
                value={dropoffLocation}
                onChange={(e) => setDropoffLocation(e.target.value)}
              />
            </div>
            <div className="car-input">
              <FaCalendarAlt className="car-icon" />
              <input
                type="date"
                placeholder="تاريخ الاستلام"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
              />
            </div>
            <div className="car-input">
              <FaCalendarAlt className="car-icon" />
              <input
                type="date"
                placeholder="تاريخ التسليم"
                value={dropoffDate}
                onChange={(e) => setDropoffDate(e.target.value)}
              />
            </div> */}
            <button className="car-button" onClick={handleSearch}>ابحث عن سيارات</button>
          </div>
        </div>
      </div>

      <div className="car-options-container">
        <h2>أفضل عروض تأجير السيارات المتاحة</h2>
        <div className="car-options-grid">
          {searchResults.map((car) => (
            <div key={car.id} className="car-option-card">
              <img src={car.image} alt={car.model} className="car-image" />
              <div className="car-details">
                <h3>{car.make} - {car.model}</h3>
                <p><FaGasPump className="car-icon" /> نوع الوقود: {car.fuelType}</p>
                <p><FaCog className="car-icon" /> ناقل الحركة: {car.transmission}</p>
                <p className="car-price">السعر: {car.price} جنيه مصري / اليوم</p>
                <div className="car-features-list">
                  {car.features.map((feature, index) => (
                    <span key={index} className="car-feature-item">{feature}</span>
                  ))}
                </div>
                <button className="book-car-button">احجز الآن</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="car-tips-section">
        <h2>نصائح مهمة لتأجير سيارتك</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <h3>قارن الأسعار جيدًا</h3>
            <p>تحقق من عروض شركات تأجير متعددة قبل الحجز للحصول على أفضل صفقة.</p>
          </div>
          <div className="tip-card">
            <h3>اقرأ شروط الإيجار بعناية</h3>
            <p>تأكد من فهمك لسياسات التأمين والقيود وأي رسوم إضافية محتملة.</p>
          </div>
          <div className="tip-card">
            <h3>افحص السيارة عند الاستلام</h3>
            <p>وثّق أي خدوش أو أضرار موجودة قبل القيادة لتجنب أي مسؤولية غير ضرورية.</p>
          </div>
          <div className="tip-card">
            <h3>تحقق من سياسة الوقود</h3>
            <p>تعرف على كيفية تسليم السيارة بالوقود لتجنب رسوم إضافية.</p>
          </div>
        </div>
      </div>

      <div className="contact-us-section">
        <h2>تواصل معنا</h2>
        <p>هل لديك أي استفسارات حول تأجير السيارات؟ فريق الدعم لدينا هنا لمساعدتك.</p>
        <button className="contact-button">اتصل بنا</button>
      </div>
    </div>
  );
};

export default Car;