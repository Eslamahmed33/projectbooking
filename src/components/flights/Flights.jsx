import React, { useState } from 'react'; // استوردنا useState
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import './flight.css';
import { FaPlaneDeparture, FaPlaneArrival, FaCalendarAlt, FaUserTie, FaStar } from 'react-icons/fa';

const flightOptions = [
  { id: 1, airline: 'مصر للطيران', departure: 'القاهره', arrival: 'دبي', price: 1500, duration: '4 ساعات 30 دقيقة', features: ['وجبات مجانية', 'واي فاي', 'ترفيه على متن الطائرة'], rating: 4.5, image: '../flight/194965.jpg' },
  { id: 2, airline: 'طيران الإمارات', departure: 'القاهره', arrival: 'لندن', price: 2800, duration: '6 ساعات', features: ['مقاعد مريحة', 'نظام ترفيه متطور', 'خدمة ممتازة'], rating: 4.8, image: '../flight/1920_cairoa380new-135207 (1).jpg' },
  { id: 4, airline: 'القطرية', departure: 'الدوحه', arrival: 'نيويورك', price: 3500, duration: '12 ساعة', features: ['أجنحة خاصة في درجة رجال الأعمال', 'قائمة طعام فاخرة', 'خدمة على مدار الساعة'], rating: 4.9, image: '../flight/GettyImages-1819254568.jpg' },
  { id: 5, airline: 'مصر للطيران', departure: 'الاسكندريه', arrival: 'روما', price: 1800, duration: '3 ساعات 15 دقيقة', features: ['وجبات خفيفة', 'ترفيه بسيط'], rating: 3.9, image: '../flight/194965.jpg' },
  {
    id: 6,
    airline: 'Air France',
    departure: 'القاهره',
    arrival: 'باريس',
    price: 2500,
    duration: '4 ساعات 45 دقيقة',
    features: ['وجبات فرنسية', 'أفلام حديثة', 'مجلات'],
    rating: 4.3,
    image: '../flight/000_33XN76J.jpg'
  },
  {
    id: 7,
    airline: 'British Airways',
    departure: 'جده',
    arrival: 'لندن',
    price: 2900,
    duration: '6 ساعات 15 دقيقة',
    features: ['مقاعد واسعة', 'مشروبات مجانية', 'خدمة ممتازة'],
    rating: 4.6,
    image: '../flight/British-Airways.jpg'
  },
  {
    id: 8,
    airline: 'Lufthansa',
    departure: 'دبى',
    arrival: 'فرانكفورت',
    price: 2700,
    duration: '5 ساعات 30 دقيقة',
    features: ['خيارات وجبات متعددة', 'واي فاي مدفوع', 'أخبار'],
    rating: 4.1,
    image: '../flight/GkfygzEXwAA4wmn.jpg'
  },
  {
    id: 9,
    airline: 'Iberia',
    departure: 'الرياض',
    arrival: 'مدريد',
    price: 2300,
    duration: '5 ساعات 50 دقيقة',
    features: ['مساحة إضافية للأرجل', 'مجموعة ترفيهية', 'مساعدة شخصية'],
    rating: 4.0,
    image: '../flight/223037.jpg'
  },
  {
    id: 10,
    airline: 'KLM Royal Dutch Airlines',
    departure: 'الدوحه',
    arrival: 'أمستردام',
    price: 2600,
    duration: '6 ساعات',
    features: ['هدايا للأطفال', 'مشروبات هولندية', 'خدمة ودودة'],
    rating: 4.4,
    image: '../flight/th.jpeg.jpg'
  },
  {
    id: 11,
    airline: 'Swiss International Air Lines',
    departure: 'القاهره',
    arrival: 'زيورخ',
    price: 2400,
    duration: '4 ساعات 10 دقائق',
    features: ['شوكولاتة سويسرية مجانية', 'صحف ومجلات', 'مقاعد مريحة'],
    rating: 4.5,
    image: '../flight/Edelweiss_A350_Air2Air-1-850x638.jpg'
  },
  {
    id: 12,
    airline: 'Alitalia',
    departure: 'جده',
    arrival: 'ميلانو',
    price: 2100,
    duration: '5 ساعات 20 دقيقة',
    features: ['مأكولات إيطالية', 'مشروبات إيطالية', 'ترفيه على الطلب'],
    rating: 4.2,
    image: '../flight/news_o4kq87qhfx.jpg'
  }
];

const Flights = () => {
  const [departureCity, setDepartureCity] = useState(''); // حالة لمدينة المغادرة
  const [arrivalCity, setArrivalCity] = useState(''); // حالة لمدينة الوصول
  const [searchResults, setSearchResults] = useState(flightOptions); // حالة لنتائج البحث (تبدأ بكل الخيارات)

  const handleSearch = () => {
    const filteredResults = flightOptions.filter(flight =>
      flight.departure.toLowerCase().includes(departureCity.toLowerCase()) &&
      flight.arrival.toLowerCase().includes(arrivalCity.toLowerCase())
    );
    setSearchResults(filteredResults);
  };

  return (
    <div className="flights-page">
      <Navbar />
      <Header type="list" />
      <div className="flight-search-container">
        <div className="flight-search-box">
          <h2>ابحث عن رحلتك المثالية</h2>
          <p>قارن أفضل عروض الرحلات واحجز بأفضل الأسعار.</p>
          <div className="flight-form">
            <div className="flight-input">
              <FaPlaneDeparture className="flight-icon" />
              <input
                type="text"
                placeholder="من"
                value={departureCity}
                onChange={(e) => setDepartureCity(e.target.value)}
              />
            </div>
            <div className="flight-input">
              <FaPlaneArrival className="flight-icon" />
              <input
                type="text"
                placeholder="إلى"
                value={arrivalCity}
                onChange={(e) => setArrivalCity(e.target.value)}
              />
            </div>
            <div className="flight-input">
              <FaCalendarAlt className="flight-icon" />
              <input type="date" />
            </div>
            <div className="flight-input">
              <FaUserTie className="flight-icon" />
              <select>
                <option>الدرجة الاقتصادية</option>
                <option>درجة رجال الأعمال</option>
                <option>الدرجة الأولى</option>
              </select>
            </div>
            <button className="flight-button" onClick={handleSearch}>ابحث عن رحلات</button>
          </div>
        </div>
      </div>

      <div className="flight-options-container">
        <h2>أفضل عروض الرحلات المتاحة</h2>
        <div className="flight-options-grid">
          {searchResults.map((flight) => (
            <div key={flight.id} className="flight-option-card">
              <img src={flight.image} alt={flight.airline} className="flight-image" />
              <div className="flight-details">
                <h3>{flight.airline}</h3>
                <p>
                  {flight.departure} <FaPlaneDeparture /> - {flight.arrival} <FaPlaneArrival />
                </p>
                <p>
                  <FaCalendarAlt /> المدة: {flight.duration}
                </p>
                <p className="flight-price">السعر: {flight.price} جنيه مصري</p>
                <div className="flight-features-list">
                  {flight.features.map((feature, index) => (
                    <span key={index} className="flight-feature-item">{feature}</span>
                  ))}
                </div>
                <div className="flight-rating">
                  التقييم: <FaStar className="star-icon" /> {flight.rating}
                </div>
                <button className="book-flight-button">احجز الآن</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="travel-tips-section">
        <h2>نصائح قيمة لرحلتك القادمة</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <h3>خطط مبكرًا</h3>
            <p>احجز رحلتك وفندقك مسبقًا للحصول على أفضل الأسعار وتجنب الازدحام.</p>
          </div>
          <div className="tip-card">
            <h3>كن مرنًا في مواعيدك</h3>
            <p>إذا كانت لديك مرونة في تواريخ السفر، فقد تجد عروضًا أرخص في أيام أو أوقات مختلفة.</p>
          </div>
          <div className="tip-card">
            <h3>تحقق من سياسات الأمتعة</h3>
            <p>تأكد من فهمك لسياسات الأمتعة الخاصة بكل شركة طيران لتجنب أي رسوم إضافية.</p>
          </div>
          <div className="tip-card">
            <h3>استفد من برامج الولاء</h3>
            <p>إذا كنت مسافرًا دائمًا، انضم إلى برامج الولاء لشركات الطيران والفنادق للحصول على مزايا وخصومات.</p>
          </div>
        </div>
      </div>

      <div className="contact-us-section">
        <h2>تواصل معنا</h2>
        <p>هل لديك أي استفسارات أو تحتاج إلى مساعدة في حجز رحلتك؟ فريق الدعم لدينا هنا لمساعدتك.</p>
        <button className="contact-button">اتصل بنا</button>
      </div>
    </div>
  );
};

export default Flights;