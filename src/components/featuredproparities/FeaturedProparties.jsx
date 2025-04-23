import React from 'react';
import './featuredpropartie.css';
import { Link } from 'react-router-dom';

const featuredData = [
  {
    id: 1,
    img: "../imagehotel/456051765.jpg",
    name: "فندق النيل ريتز-كارلتون، القاهرة",
    city: "القاهرة",
    price: "$250",
    rating: 9.1,
    review: "رائع",
    description: "يقع هذا الفندق الفاخر على ضفاف نهر النيل ويوفر إطلالات خلابة ومرافق عالمية المستوى.",
    photos: [
      "../gusts/راس شيطان/basata (3).jpg",
      "../gusts/راس شيطان/basata (4).jpg",
      "../gusts/راس شيطان/basata (5).jpg",
      "../gusts/راس شيطان/basata (7).jpg",
      "../gusts/راس شيطان/basata (8).jpg",
      "../gusts/راس شيطان/basata (11).jpg",
      "../gusts/راس شيطان/filename-img-2532-jpg.jpg",
      "../gusts/راس شيطان/dsc-0349-largejpg.jpg",
      "../gusts/راس شيطان/basata.jpg",
      "../gusts/راس شيطان/basata (13).jpg",
      "../gusts/راس شيطان/basata (12).jpg",
      "../gusts/راس شيطان/basata (10).jpg",
      "../gusts/راس شيطان/basata (4).jpg",
      "../gusts/راس شيطان/basata (1).jpg",
      "../gusts/راس شيطان/basata.jpg"
    ],
    facilities: ["واي فاي مجاني", "مسبح", "مركز لياقة بدنية", "مواقف سيارات مجانية"],
    policies: "تسجيل الوصول من الساعة 3 مساءً، تسجيل المغادرة حتى الساعة 12 ظهرًا.",
  },
  {
    id: 2,
    img: "../gusts/4سيزوناسكندريه/306079712.jpg",
    name: "فندق فور سيزونز الإسكندرية سان ستيفانو",
    city: "الإسكندرية",
    price: "$200",
    rating: 8.8,
    review: "جيد جدًا",
    description: "يقع هذا الفندق الفاخر على شاطئ سان ستيفانو ويوفر إطلالات رائعة على البحر الأبيض المتوسط.",
    photos: [
      "../gusts/4سيزوناسكندريه/213150059.jpg",
      "../gusts/4سيزوناسكندريه/228999779.jpg",
      "../gusts/4سيزوناسكندريه/306070973.jpg",
      "../gusts/4سيزوناسكندريه/373521951 (1).jpg",
      "../gusts/4سيزوناسكندريه/306079712.jpg",
      "../gusts/4سيزوناسكندريه/373520548.jpg",
      "../gusts/4سيزوناسكندريه/373514768.jpg",
      "../gusts/4سيزوناسكندريه/373517481.jpg",
      "../gusts/4سيزوناسكندريه/373517561.jpg",
      "../gusts/4سيزوناسكندريه/373520558.jpg",
      "../gusts/4سيزوناسكندريه/383675147.jpg",
      "../gusts/4سيزوناسكندريه/383675626.jpg"
    ],
    facilities: ["واي فاي مجاني", "شاطئ خاص", "مسابح داخلية وخارجية", "سبا"],
    policies: "تسجيل الوصول من الساعة 2 ظهرًا، تسجيل المغادرة حتى الساعة 11 صباحًا.",
  },
  {
    id: 3,
    img: "../imagehotel/164455414.jpg",
    name: "فندق كمبينسكي النيل، القاهرة",
    city: "القاهرة",
    price: "$180",
    rating: 9.0,
    review: "ممتاز",
    description: "يتميز هذا الفندق الأنيق بموقعه المركزي على نهر النيل ويوفر تجربة إقامة فاخرة.",
    photos: [
      "../gusts/Sofitel Legend Old Cataract Aswan/326740590.jpg",
      "../gusts/Sofitel Legend Old Cataract Aswan/326740594.jpg",
      "../gusts/Sofitel Legend Old Cataract Aswan/502837930.jpg",
      "../gusts/Sofitel Legend Old Cataract Aswan/502837965.jpg",
      "../gusts/Sofitel Legend Old Cataract Aswan/502837965.jpg",
      "../gusts/Sofitel Legend Old Cataract Aswan/515872192.jpg",
      "../gusts/Sofitel Legend Old Cataract Aswan/515872197.jpg",
      "../gusts/Sofitel Legend Old Cataract Aswan/519486372.jpg",
      "../gusts/Sofitel Legend Old Cataract Aswan/588028687.jpg",
      "../gusts/Sofitel Legend Old Cataract Aswan/588028690.jpg",
      "../gusts/Sofitel Legend Old Cataract Aswan/588028701.jpg",
      "../gusts/Sofitel Legend Old Cataract Aswan/588028701.jpg",
      "../gusts/Sofitel Legend Old Cataract Aswan/593144782.jpg",
      "../gusts/Sofitel Legend Old Cataract Aswan/593144784.jpg",
      "../gusts/Sofitel Legend Old Cataract Aswan/593144787.jpg"
    ],
    facilities: ["واي فاي مجاني", "مسبح على السطح", "مطاعم وبارات متعددة", "خدمة غرف 24 ساعة"],
    policies: "تسجيل الوصول من الساعة 3 مساءً، تسجيل المغادرة حتى الساعة 12 ظهرًا.",
  },{
    id: 7,
    img: "../gusts/Sofitel Winter Palace Luxor/300488641.jpg",
    name: "Sofitel Winter Palace Luxor",
    city: "الأقصر",
    price: "$276",
    rating: 9.1,
    review: "رائع",
    description: "يقدم خدمات فاخرة وإطلالة خلابة على البحر أو النيل.",
    photos: [
      "../gusts/Sofitel Winter Palace Luxor/327064428.jpg",
      "../gusts/Sofitel Winter Palace Luxor/336909721.jpg",
      "../gusts/Sofitel Winter Palace Luxor/496537295.jpg",
      "../gusts/Sofitel Winter Palace Luxor/513509998.jpg",
      "../gusts/Sofitel Winter Palace Luxor/513510003.jpg",
      "../gusts/Sofitel Winter Palace Luxor/513510030.jpg",
      "../gusts/Sofitel Winter Palace Luxor/513510060.jpg",
      "../gusts/Sofitel Winter Palace Luxor/513510064.jpg",
      "../gusts/Sofitel Winter Palace Luxor/513510076.jpg",
      "../gusts/Sofitel Winter Palace Luxor/513510083.jpg",
      "../gusts/Sofitel Winter Palace Luxor/513510094.jpg",
      "../gusts/Sofitel Winter Palace Luxor/593144700.jpg"
    ],
    facilities: ["واي فاي", "مسبح خارجي", "بار", "مواقف سيارات مجانية"],
    policies: "تسجيل الوصول من الساعة 3 مساءً، تسجيل المغادرة حتى الساعة 12 ظهرًا."
  },
  {
    id: 8,
    img: "../imagehotel/7503498.webp",
    name: "  فندق سى جاردن ",
    city: "الغردقة",
    price: "$121",
    rating: 9.0,
    review: "ممتاز",
    description: "يوفر غرف واسعة ومرافق ترفيهية لجميع الأعمار.",
    photos: [
      "../gusts/Four Seasons Resort Sharm El Sheikh/364786361 (1).jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/364786364.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/364786865 (1).jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/364791360.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/364797241.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/download.jpeg.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/517659974.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/517656436.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/517646036.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/517646031.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/517645291.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/364797241.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/364791360.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/364786364.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/364797241.jpg"
    ],
    facilities: ["شاطئ خاص", "سبا", "مطاعم متعددة", "خدمة غرف"],
    policies: "تسجيل الوصول من الساعة 3 مساءً، تسجيل المغادرة حتى الساعة 12 ظهرًا."
  },
  {
    id: 9,
    img: "../imagehotel/261850783.webp",
    name: "New yalla Hotel",
    city: "دهب",
    price: "$114",
    rating: 8.8,
    review: "جيد جدًا",
    description: "مكان مثالي لقضاء العطلات والاستمتاع بالهدوء والراحة.",
    photos: [
      "../gusts/راس شيطان/basata (3).jpg",
      "../gusts/راس شيطان/basata (4).jpg",
      "../gusts/راس شيطان/basata (5).jpg",
      "../gusts/راس شيطان/basata (7).jpg",
      "../gusts/راس شيطان/basata (8).jpg",
      "../gusts/راس شيطان/basata (11).jpg",
      "../gusts/راس شيطان/filename-img-2532-jpg.jpg",
      "../gusts/راس شيطان/dsc-0349-largejpg.jpg",
      "../gusts/راس شيطان/basata.jpg",
      "../gusts/راس شيطان/basata (13).jpg",
      "../gusts/راس شيطان/basata (12).jpg",
      "../gusts/راس شيطان/basata (10).jpg",
      "../gusts/راس شيطان/basata (4).jpg",
      "../gusts/راس شيطان/basata (1).jpg",
      "../gusts/راس شيطان/basata.jpg"
    ],
    facilities: ["واي فاي مجاني", "مسبح", "مطعم", "مركز لياقة بدنية"],
    policies: "تسجيل الوصول من الساعة 3 مساءً، تسجيل المغادرة حتى الساعة 12 ظهرًا."
  },
  {
    id: 10,
    img: "../imagehotel/462874844.webp",
    name: "Royal City Hotel",
    city: "الغردقة",
    price: "$225",
    rating: 8.5,
    review: "جيد",
    description: "فندق يتميز بموقع رائع بالقرب من أهم المعالم السياحية.",
    photos: [
      "../gusts/Four Seasons Resort Sharm El Sheikh/364786361 (1).jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/364786364.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/364786865 (1).jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/364791360.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/364797241.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/download.jpeg.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/517659974.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/517656436.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/517646036.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/517646031.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/517645291.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/364797241.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/364791360.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/364786364.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/364797241.jpg"
    ],
    facilities: ["واي فاي", "مسبح خارجي", "بار", "مواقف سيارات مجانية"],
    policies: "تسجيل الوصول من الساعة 3 مساءً، تسجيل المغادرة حتى الساعة 12 ظهرًا."
  },
  {
    id: 11,
    img: "../gusts/Sofitel Legend Old Cataract Aswan/61180943.jpg",
    name: " Sofitel Legend Old Cataract Aswan ",
    city: "أسوان",
    price: "$264",
    rating: 9.0,
    review: "ممتاز",
    description: "مناسب للعائلات والأزواج ويحتوي على مرافق عالمية.",
    photos: [
      "../gusts/Sofitel Legend Old Cataract Aswan/326740590.jpg",
      "../gusts/Sofitel Legend Old Cataract Aswan/326740594.jpg",
      "../gusts/Sofitel Legend Old Cataract Aswan/502837930.jpg",
      "../gusts/Sofitel Legend Old Cataract Aswan/502837965.jpg",
      "../gusts/Sofitel Legend Old Cataract Aswan/502837965.jpg",
      "../gusts/Sofitel Legend Old Cataract Aswan/515872192.jpg",
      "../gusts/Sofitel Legend Old Cataract Aswan/515872197.jpg",
      "../gusts/Sofitel Legend Old Cataract Aswan/519486372.jpg",
      "../gusts/Sofitel Legend Old Cataract Aswan/588028687.jpg",
      "../gusts/Sofitel Legend Old Cataract Aswan/588028690.jpg",
      "../gusts/Sofitel Legend Old Cataract Aswan/588028701.jpg",
      "../gusts/Sofitel Legend Old Cataract Aswan/588028701.jpg",
      "../gusts/Sofitel Legend Old Cataract Aswan/593144782.jpg",
      "../gusts/Sofitel Legend Old Cataract Aswan/593144784.jpg",
      "../gusts/Sofitel Legend Old Cataract Aswan/593144787.jpg"
    ],
    facilities: ["شاطئ خاص", "سبا", "مطاعم متعددة", "خدمة غرف"],
    policies: "تسجيل الوصول من الساعة 3 مساءً، تسجيل المغادرة حتى الساعة 12 ظهرًا."
  },
  {
    id: 12,
    img: "../imagehotel/661129282.webp",
    name: "سوفيتيل القاهره النيل الجزيره",
    city: "القاهرة",
    price: "$183",
    rating: 8.8,
    review: "جيد جدًا",
    description: "مكان مثالي لقضاء العطلات والاستمتاع بالهدوء والراحة.",
    photos: [
      "../gusts/راس شيطان/basata (3).jpg",
      "../gusts/راس شيطان/basata (4).jpg",
      "../gusts/راس شيطان/basata (5).jpg",
      "../gusts/راس شيطان/basata (7).jpg",
      "../gusts/راس شيطان/basata (8).jpg",
      "../gusts/راس شيطان/basata (11).jpg",
      "../gusts/راس شيطان/filename-img-2532-jpg.jpg",
      "../gusts/راس شيطان/dsc-0349-largejpg.jpg",
      "../gusts/راس شيطان/basata.jpg",
      "../gusts/راس شيطان/basata (13).jpg",
      "../gusts/راس شيطان/basata (12).jpg",
      "../gusts/راس شيطان/basata (10).jpg",
      "../gusts/راس شيطان/basata (4).jpg",
      "../gusts/راس شيطان/basata (1).jpg",
      "../gusts/راس شيطان/basata.jpg"
    ],
    facilities: ["واي فاي مجاني", "مسبح", "مطعم", "مركز لياقة بدنية"],
    policies: "تسجيل الوصول من الساعة 3 مساءً، تسجيل المغادرة حتى الساعة 12 ظهرًا."
  },
  {
    id: 13,
    img: "../gusts/Four Seasons Resort Sharm El Sheikh/FourSeasons_SharmElSheikh_01.jpg",
    name: " Four Seasons Resort   ",
    city: "شرم الشيخ",
    price: "$108",
    rating: 8.5,
    review: "جيد",
    description: "يوفر غرف واسعة ومرافق ترفيهية لجميع الأعمار.",
    photos: [
      "../gusts/Four Seasons Resort Sharm El Sheikh/364786361 (1).jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/364786364.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/364786865 (1).jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/364791360.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/364797241.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/download.jpeg.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/517659974.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/517656436.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/517646036.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/517646031.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/517645291.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/364797241.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/364791360.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/364786364.jpg",
      "../gusts/Four Seasons Resort Sharm El Sheikh/364797241.jpg"
    ],
    facilities: ["واي فاي", "مسبح خارجي", "بار", "مواقف سيارات مجانية"],
    policies: "تسجيل الوصول من الساعة 3 مساءً، تسجيل المغادرة حتى الساعة 12 ظهرًا."
  },
  {
    id: 14,
    img: "../imagehotel/363689492.webp",
    name: "فندق هلنان رويال",
    city: "الإسكندرية",
    price: "$171",
    rating: 9.1,
    review: "رائع",
    description: "مكان مثالي لقضاء العطلات والاستمتاع بالهدوء والراحة.",
    photos: [
      "../gusts/4سيزوناسكندريه/213150059.jpg",
      "../gusts/4سيزوناسكندريه/228999779.jpg",
      "../gusts/4سيزوناسكندريه/306070973.jpg",
      "../gusts/4سيزوناسكندريه/373521951 (1).jpg",
      "../gusts/4سيزوناسكندريه/306079712.jpg",
      "../gusts/4سيزوناسكندريه/373520548.jpg",
      "../gusts/4سيزوناسكندريه/373514768.jpg",
      "../gusts/4سيزوناسكندريه/373517481.jpg",
      "../gusts/4سيزوناسكندريه/373517561.jpg",
      "../gusts/4سيزوناسكندريه/373520558.jpg",
      "../gusts/4سيزوناسكندريه/383675147.jpg",
      "../gusts/4سيزوناسكندريه/383675626.jpg"
    ],
    facilities: ["واي فاي مجاني", "مسبح", "مطعم", "مركز لياقة بدنية"],
    policies: "تسجيل الوصول من الساعة 3 مساءً، تسجيل المغادرة حتى الساعة 12 ظهرًا."
  },
  {
    id: 15,
    img: "../gusts/elalmin/285228111.jpg",
    name: "Marassi Golf Resort",
    city: "العلمين",
    price: "$180",
    rating: 9.0,
    review: "ممتاز",
    description: "فندق يتميز بموقع رائع بالقرب من أهم المعالم السياحية.",
    photos: [
      "../gusts/elalmin/285232817.jpg",
      "../gusts/elalmin/285233016.jpg",
      "../gusts/elalmin/285233707.jpg",
      "../gusts/elalmin/285233975.jpg",
      "../gusts/elalmin/490440278.jpg",
      "../gusts/elalmin/486338033.jpg",
      "../gusts/elalmin/490437213 (1).jpg",
      "../gusts/elalmin/490436810 (1).jpg",
      "../gusts/elalmin/486338009.jpg",
      "../gusts/elalmin/486337996.jpg",
      "../gusts/elalmin/285234146.jpg",
      "../gusts/elalmin/285233948.jpg",
      "../gusts/elalmin/486338033.jpg",
      "../gusts/elalmin/285233707.jpg",
      "../gusts/elalmin/490437213.jpg"
    ],
    facilities: ["واي فاي", "مسبح على السطح", "مطعم", "نادي صحي"],
    policies: "تسجيل الوصول من الساعة 3 مساءً، تسجيل المغادرة حتى الساعة 12 ظهرًا."
  },
  {
    id: 16,
    img: "../gusts/راس شيطان/basata (1).jpg",
    name: "Basata Eco Lodge",
    city: " راس شيطان",
    price: "$135",
    rating: 8.5,
    review: "جيد",
    description: "مناسب للعائلات والأزواج ويحتوي على مرافق عالمية.",
    photos: [
      "../gusts/راس شيطان/basata (3).jpg",
      "../gusts/راس شيطان/basata (4).jpg",
      "../gusts/راس شيطان/basata (5).jpg",
      "../gusts/راس شيطان/basata (7).jpg",
      "../gusts/راس شيطان/basata (8).jpg",
      "../gusts/راس شيطان/basata (11).jpg",
      "../gusts/راس شيطان/filename-img-2532-jpg.jpg",
      "../gusts/راس شيطان/dsc-0349-largejpg.jpg",
      "../gusts/راس شيطان/basata.jpg",
      "../gusts/راس شيطان/basata (13).jpg",
      "../gusts/راس شيطان/basata (12).jpg",
      "../gusts/راس شيطان/basata (10).jpg",
      "../gusts/راس شيطان/basata (4).jpg",
      "../gusts/راس شيطان/basata (1).jpg",
      "../gusts/راس شيطان/basata.jpg"
    ],
    facilities: ["واي فاي", "مسبح خارجي", "بار", "مواقف سيارات مجانية"],
    policies: "تسجيل الوصول من الساعة 3 مساءً، تسجيل المغادرة حتى الساعة 12 ظهرًا."
  },
  {
    id: 6,
    img: "../gusts/4سيزوناسكندريه/306079712.jpg",
    name: "فندق فور سيزونز الإسكندرية سان ستيفانو",
    city: "الإسكندرية",
    price: "$200",
    rating: 8.8,
    review: "جيد جدًا",
    description: "يقع هذا الفندق الفاخر على شاطئ سان ستيفانو ويوفر إطلالات رائعة على البحر الأبيض المتوسط.",
    photos: [
      "../gusts/4سيزوناسكندريه/213150059.jpg",
      "../gusts/4سيزوناسكندريه/228999779.jpg",
      "../gusts/4سيزوناسكندريه/306070973.jpg",
      "../gusts/4سيزوناسكندريه/373521951 (1).jpg",
      "../gusts/4سيزوناسكندريه/306079712.jpg",
      "../gusts/4سيزوناسكندريه/373520548.jpg",
      "../gusts/4سيزوناسكندريه/373514768.jpg",
      "../gusts/4سيزوناسكندريه/373517481.jpg",
      "../gusts/4سيزوناسكندريه/373517561.jpg",
      "../gusts/4سيزوناسكندريه/373520558.jpg",
      "../gusts/4سيزوناسكندريه/383675147.jpg",
      "../gusts/4سيزوناسكندريه/383675626.jpg"
    ],
    facilities: ["واي فاي مجاني", "شاطئ خاص", "مسابح داخلية وخارجية", "سبا"],
    policies: "تسجيل الوصول من الساعة 2 ظهرًا، تسجيل المغادرة حتى الساعة 11 صباحًا.",
  }
  

  // يمكنك إضافة المزيد بنفس الشكل
];

const FeaturedProparties = () => {
  return (
    <div className='fp'>
      {featuredData.map((item) => (
        <div className="fpitem" key={item.id}>
          <Link to={`/hotels/${item.id}`} className="fpLink">
            <img src={item.img} alt={item.name} className='fpimg' />
          </Link>
          <span className='fpname'>{item.name}</span>
          <span className='fpcity'>{item.city}</span>
          <span className='fpprice'>ابتداءً من {item.price}</span>
          <div className='fprating'>
            <button>{item.rating}</button>
            <span>{item.review}</span>
            <span className="fpstars">
              {"⭐".repeat(Math.floor(item.rating))}
              {item.rating % 1 !== 0 && "✰"}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export { featuredData };
export default FeaturedProparties;
