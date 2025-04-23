import React, { useEffect, useRef, useState } from 'react';
import './property.css';

const itemsPerSlide = 4;

const properties = [{
  img: 'https://sur-grand-hotel.albooked.com/data/Photos/OriginalPhoto/15903/1590394/1590394143/Sur-Grand-Hotel-Exterior.JPEG',
  title: 'Sur Grand Hotel',
  subtitle: '1200 Hotels'
},
{
  img: 'https://ar.hotelscombined.com/kimg/dc/f9/40ca5f853a011b41.jpg',
  title: 'Luxury Suites',
  subtitle: '800 Hotels'
},
{
  img: 'https://content.skyscnr.com/available/1355302605/1355302605_WxH.jpg',
  title: 'City View Inn',
  subtitle: '1020 Hotels'
},
{
  img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/37385122.jpg?k=edc8b6da6b151d306cc0caa64110949161d5bea6bf7c9da52048dfc1479e4c34&o=&hp=1',
  title: 'Beachside Resort',
  subtitle: '650 Hotels'
},
{
  img: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/d5/53/59/exterior.jpg?w=900&h=500&s=1',
  title: 'Mountain Escape',
  subtitle: '320 Hotels'
},
{
  img: 'https://almuhaidb-residence-jeddah.albooked.com/data/Photos/OriginalPhoto/9835/983508/983508100/Ewaa-Express-Hotel-Al-Hamra-Jeddah-Exterior.JPEG',
  title: 'Ewaa Express',
  subtitle: '980 Hotels'
},
{
  img: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/520968339.jpg?k=d65408267ee378a083ab4bbdb519efab6ddef00b8b6d08dfc95465aa6f7325f7&o=&hp=1',
  title: 'Bless Hotel',
  subtitle: '400 Hotels'
},
{
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPG6dDf_0EWW-mQR7TZ9pxwQGz5Vj4NqBH1zNeY7SiuISKQefFNpXOe58jVUyClL5Ohkk&usqp=CAU',
  title: 'Sur Grand Hotel',
  subtitle: '1200 Hotels'
},
{
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeqarFUNPD2gn2xIObrVGo-y2abOt1y9CRmuqOEDzVWgVmYDDEV_xwqBn1jfOph-gOtdQ&usqp=CAU',
  title: 'Sur Grand Hotel',
  subtitle: '1200 Hotels'
},
{
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOhRxDWEGvKF1Cb2bD1sj-A22Heja7wV-kLmOZGl4-0mYl7mIMIGbFbJXM-H_VQyBZJ_8&usqp=CAU',
  title: 'Sur Grand Hotel',
  subtitle: '1200 Hotels'
},
{
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu799uzLQYx8dSJd3FqHJ_k8IzO2e48wLM2l6jgTUn5pCguQ27DsjzmWk2INtaiYkyo5M&usqp=CAU',
  title: 'Sur Grand Hotel',
  subtitle: '1200 Hotels'
},
{
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNAXW2J97Mlf-S5VTIkV2f0sxPZGZnAW5q1zry_Q7uKpya2A-Rk2RU3dpnBLTHQE8_jw4&usqp=CAU',
  title: 'Sur Grand Hotel',
  subtitle: '1200 Hotels'
},
{
  img: 'https://ar.hotelscombined.com/himg/61/e7/0d/leonardo-308175-189261572-447995.jpg',
  title: 'Sur Grand Hotel',
  subtitle: '1200 Hotels'
},
{
  img: 'https://pix10.agoda.net/hotelImages/21725819/0/6c0e3bb0dc0a5c946ce715bbd5f313c2.jpeg?ce=0&s=414x232',
  title: 'Sur Grand Hotel',
  subtitle: '1200 Hotels'
},
{
  img: 'https://w-barcelona-hotel.albooked.com/data/Photos/OriginalPhoto/16344/1634403/1634403690/W-Barcelona-Hotel-Exterior.JPEG',
  title: 'City Life Hotel',
  subtitle: '100 Hotels'
}];

const Property = () => {
  const [index, setIndex] = useState(0);
  const maxIndex = Math.ceil(properties.length / itemsPerSlide) - 1;

  const nextSlide = () => {
    setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Auto slide every 4 seconds
    return () => clearInterval(interval);
  }, [maxIndex]);

  return (
    <div className="slider-container">
      <button className="slider-btn left" onClick={prevSlide}>&#10094;</button>
      <div className="plist" style={{ transform: `translateX(-${index * 100}%)` }}>
        {Array.from({ length: Math.ceil(properties.length / itemsPerSlide) }, (_, slideIndex) => {
          const start = slideIndex * itemsPerSlide;
          const slideItems = properties.slice(start, start + itemsPerSlide);
          return (
            <div className="plist-slide" key={slideIndex}>
              {slideItems.map((item, i) => (
                <div className="plistitem" key={i}>
                  <div className="imgWrapper">
                    <img src={item.img} alt={item.title} className="plistimg" />
                  </div>
                  <div className="plisttitle">
                    <h1>{item.title}</h1>
                    <h2>{item.subtitle}</h2>
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <button className="slider-btn right" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Property;
