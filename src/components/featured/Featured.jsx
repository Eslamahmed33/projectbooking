import React from 'react';
import './featured.css';
import { citiesData } from '../../data';
import { Link } from 'react-router-dom';

const Featured = () => {
  return (
    <div className='featured'>
      {citiesData.map(city => (
        <Link to={`/city/${city.id}`} key={city.id} className="featureitem">
          <img src={city.image} alt={city.name} className='featuredimg' />
          <div className='featuredtitle'>
            <h1>{city.name}</h1>
            <h2>{city.hotels.length} فندق</h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Featured;
