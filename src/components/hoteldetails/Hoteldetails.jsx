import React from 'react';
import './hoteldetails.css';
import { useParams, Link } from 'react-router-dom';
import { citiesData } from '../../data';
import Navbar from '../navbar/Navbar';
import Header from '../header/Header';
import Maillist from '../maillist/Maillist';
import Footer from '../footer/Footer';

const Hoteldetails = () => {
  const { cityId } = useParams();
  const selectedCity = citiesData.find(city => city.id === parseInt(cityId));

  if (!selectedCity) {
    return <div>لم يتم العثور على المدينة</div>;
  }

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className='hoteldetails'>
        <h2>فنادق {selectedCity.name}</h2>
        <div className='hotel-list'>
          {selectedCity.hotels.map(hotel => (
            <div key={hotel.id} className='hotel-card'>
              <Link to={`/hotel/${hotel.id}`} className='hotel-link'>
                <img src={hotel.photos[0]} alt={hotel.name} className='hotel-image-link' />
              </Link>
              <h3>{hotel.name}</h3>
              <p>{hotel.price}</p>
              <Link to={`/hotel/${hotel.id}`} className='details-button-link'>
                عرض التفاصيل
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Maillist />
      <Footer />
    </div>
  );
};

export default Hoteldetails;