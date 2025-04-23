import React, { useState } from 'react';
import './detailshotel.css';
import { useParams } from 'react-router-dom';
import { citiesData } from '../../data';
import Navbar from '../navbar/Navbar';
import Header from '../header/Header';
import Maillist from '../maillist/Maillist';
import Footer from '../footer/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Detailshotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const { hotelId } = useParams();
  const hotelIdInt = parseInt(hotelId);
  const hotel = citiesData.reduce((acc, city) => {
    const foundHotel = city.hotels.find(h => h.id === hotelIdInt);
    return foundHotel ? foundHotel : acc;
  }, null);

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
    return <div>لم يتم العثور على الفندق</div>;
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="detailshotelContainer">
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
        <div className="detailshotelWrapper">
          <button className="dsBookNow">احجز الآن!</button>
          <h1 className="dsTitle">{hotel.name}</h1>
          {hotel.location && (
            <div className="dsAddress">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>{hotel.location}</span>
            </div>
          )}
          <span className="dsDistance">موقع ممتاز</span> {/* يمكنك إضافة مسافة فعلية لاحقًا */}
          <span className="dsPriceHighlight">احجز إقامة بسعر يبدأ من {hotel.price}</span>
          <div className="dsImages">
            {photos.map((photo, i) => (
              <div className="dsImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt={hotel.name}
                  className="dsImg"
                />
              </div>
            ))}
          </div>
          <div className="dsDetails">
            <div className="dsDetailsTexts">
              <h1 className="dsTitle">أقم في قلب {hotel.name}</h1> {/* يمكنك تعديل العنوان */}
              <p className="dsDesc">{hotel.description}</p>
              {hotel.facilities && (
                <div className="dsFacilities">
                  <h3>المرافق:</h3>
                  <ul>
                    {hotel.facilities.map((facility, index) => (
                      <li key={index}>{facility}</li>
                    ))}
                  </ul>
                </div>
              )}
              {hotel.roomTypes && (
                <div className="dsRoomTypes">
                  <h3>أنواع الغرف:</h3>
                  <ul>
                    {hotel.roomTypes.map((roomType, index) => (
                      <li key={index}>{roomType}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="dsDetailsPrice">
              <h1>{hotel.rating > 4 ? 'ممتاز!' : 'رائع!'}</h1> {/* يمكنك تعديل هذا النص بناءً على التقييم */}
              <span>{hotel.rating} نجوم</span>
              <h2><b>{hotel.price}</b></h2>
              <button>احجز الآن!</button>
            </div>
          </div>
        </div>
      </div>
      <Maillist />
      <Footer />
    </div>
  );
};

export default Detailshotel;