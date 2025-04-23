import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/maillist/Maillist";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useParams } from "react-router-dom"; // استورد useParams

// استورد بيانات الفنادق (في الواقع هيكون استدعاء API)
import { featuredData } from "../../components/featuredproparities/FeaturedProparties";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const { id } = useParams(); // احصل على الـ id من الـ URL
  const hotel = featuredData.find((item) => item.id === parseInt(id)); // ابحث عن الفندق المطابق للـ id

  // صور الفندق الحالي (إذا كان موجودًا)
  const photos = hotel?.photos?.map((photo) => ({ src: photo })) || [];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? photos.length - 1 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === photos.length - 1 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber);
  };

  if (!hotel) {
    return <div>لم يتم العثور على الفندق.</div>; // عرض رسالة إذا لم يتم العثور على الفندق
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow arrow-left"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber]?.src} alt={hotel.name} className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow arrow-right"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">احجز الآن!</button>
          <h1 className="hotelTitle">{hotel.name}</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>{hotel.city}</span>
          </div>
          <span className="hotelDistance">موقع ممتاز</span> {/* يمكنك إضافة مسافة فعلية لاحقًا */}
          <span className="hotelPriceHighlight">احجز إقامة بسعر يبدأ من {hotel.price}</span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt={hotel.name}
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">أقم في قلب {hotel.city}</h1>
              <p className="hotelDesc">{hotel.description}</p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>مثالي لإقامة ممتعة!</h1> {/* يمكنك تعديل هذا النص */}
              <span>
                موقع مميز في قلب {hotel.city}! {/* يمكنك إضافة تقييم الموقع الفعلي لاحقًا */}
              </span>
              <h2>
                <b>{hotel.price}</b> {/* يمكنك حساب السعر الإجمالي للإقامة لاحقًا */}
              </h2>
              <button>احجز الآن!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;