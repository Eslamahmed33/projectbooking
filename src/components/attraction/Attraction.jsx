import React from 'react';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import './attraction.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const attractions = [
  {
    name: 'أهرامات الجيزة وأبو الهول',
    city: 'الجيزة',
    description: 'من عجائب الدنيا السبع القديمة وأشهر المعالم الأثرية في العالم.',
    image: '../attraction/198685829-اهرامات-الجيزة.jpg',
  },
  {
    name: 'معبد الكرنك',
    city: 'الأقصر',
    description: 'أكبر مجمع ديني قديم في العالم وموطن لمعابد وقاعات وأعمدة ضخمة.',
    image: '../attraction/Valley-of-kings-7.jpg',
  },
  {
    name: 'وادي الملوك',
    city: 'الأقصر',
    description: 'مقابر الفراعنة المصريين القدماء، بما في ذلك مقبرة توت عنخ آمون الشهيرة.',
    image: '../attraction/2023-638386393168330097-833.jpg',
  },
  {
    name: 'المتحف المصري',
    city: 'القاهرة',
    description: 'يضم أكبر مجموعة من الآثار المصرية القديمة في العالم.',
    image: '../attraction/2024_7_14_23_33_1_130.jpg',
  },
  {
    name: 'قلعة صلاح الدين الأيوبي',
    city: 'القاهرة',
    description: 'قلعة تاريخية تطل على القاهرة وتضم مساجد ومتاحف.',
    image: '../attraction/4202230154355802.jpg',
  },
  {
    name: 'خان الخليلي',
    city: 'القاهرة',
    description: 'سوق تقليدي يعج بالحياة ويضم مجموعة متنوعة من الحرف اليدوية والتوابل والهدايا التذكارية.',
    image: '../attraction/1525069351447622548.jpg',
  },
  {
    name: 'معبد أبو سمبل',
    city: 'أسوان',
    description: 'معبدان ضخمان بناهما رمسيس الثاني ويتميزان بواجهاتهما المهيبة.',
    image: '../attraction/17399443581675791639.jpg',
  },
  {
    name: 'كوم أمبو',
    city: 'كوم أمبو',
    description: 'معبد فريد مكرس للإلهين سوبك وحورس.',
    image: '../attraction/معبد-كوم-امبو.jpg',
  },
  {
    name: 'مكتبة الإسكندرية',
    city: 'الإسكندرية',
    description: 'إحياء للمكتبة القديمة الشهيرة ومركز ثقافي حديث.',
    image: '../attraction/images.jpeg.jpg',
  },
  {
    name: 'عمود السواري',
    city: 'الإسكندرية',
    description: 'عمود روماني ضخم يعتبر من أبرز المعالم الأثرية في الإسكندرية.',
    image: '../attraction/3d765a7b-b6f6-43b7-bf8c-ffadf57e6f7a_16x9_1200x676.webp',
  },
    {
    name: 'دير سانت كاترين',
    city: 'جنوب سيناء',
    description: 'أقدم دير مسيحي عامل في العالم ويقع في موقع مقدس.',
    image: '../attraction/1044069-St-Catherine-Mount-Sinai-C.webp',
  },
  {
    name: 'الأقصر (المدينة)',
    city: 'الأقصر',
    description: 'مدينة تضم العديد من المعالم الأثرية الهامة مثل معبد الأقصر.',
    image: '../attraction/Image1_1220242920489.png',
  },
];

const Attraction = () => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate('/');
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="attraction-container">
        <div className="attraction-header">
          <h2>استكشف أفضل المعالم السياحية في مصر</h2>
          <p>اكتشف جمال وتاريخ مصر العريق.</p>
        </div>
        <div className="attraction-grid">
          {attractions.map((attraction, index) => (
            <div key={index} className="attraction-card">
              <img src={attraction.image} alt={attraction.name} className="attraction-image" />
              <div className="attraction-content">
                <h3>{attraction.name}</h3>
                <p className="attraction-city">{attraction.city}</p>
                <p className="attraction-description">{attraction.description}</p>
                <button className="explore-btn" onClick={handleBookNow}>احجز فندق قريب</button>
              </div>
            </div>
          ))}
        </div>

        {/* ✨ قسم نصائح للزوار ✨ */}
        <div className="travel-tips-section">
          <h2>نصائح للزوار في مصر</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h3>التخطيط المسبق</h3>
              <p>احجز تذاكر الطيران والفنادق والجولات السياحية مسبقًا، خاصة في مواسم الذروة.</p>
            </div>
            <div className="tip-card">
              <h3>ارتداء ملابس مريحة</h3>
              <p>اختر ملابس قطنية خفيفة وقبعة ونظارات شمسية لحماية نفسك من حرارة الشمس.</p>
            </div>
            <div className="tip-card">
              <h3>شرب كمية كافية من الماء</h3>
              <p>حافظ على رطوبة جسمك بشرب الكثير من الماء طوال اليوم.</p>
            </div>
            <div className="tip-card">
              <h3>احترام الثقافة المحلية</h3>
              <p>ارتدِ ملابس محتشمة عند زيارة الأماكن الدينية وكن مهذبًا في تعاملك مع السكان المحليين.</p>
            </div>
            <div className="tip-card">
              <h3>التفاوض على الأسعار</h3>
              <p>في الأسواق التقليدية، لا تتردد في التفاوض للحصول على أفضل الأسعار.</p>
            </div>
            <div className="tip-card">
              <h3>الحذر من أشعة الشمس</h3>
              <p>استخدم واقي الشمس بانتظام، خاصة في ساعات الذروة.</p>
            </div>
            <div className="tip-card">
              <h3>تجربة المأكولات المحلية</h3>
              <p>لا تفوت فرصة تذوق الأطباق المصرية الشهية مثل الكشري والفول والطعمية.</p>
            </div>
            <div className="tip-card">
              <h3>تعلم بعض الكلمات العربية</h3>
              <p>بضع كلمات بسيطة مثل "شكرًا" و "مرحبًا" يمكن أن تحدث فرقًا كبيرًا في تفاعلك مع الناس.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attraction;