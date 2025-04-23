import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="flists">
        {Array(5).fill(0).map((_, i) => (
          <ul className="flist" key={i}>
            <li className="flistitem">Countries</li>
            <li className="flistitem">Regions</li>
            <li className="flistitem">Cities</li>
            <li className="flistitem">Districts</li>
            <li className="flistitem">Airports</li>
            <li className="flistitem">Hotels</li>
            <li className="flistitem">Landmarks</li>
            <li className="flistitem">Homes</li>
            <li className="flistitem">Villas</li>
          </ul>
        ))}
      </div>
      <div className="ftext">© 2025 Ehgezly. All rights reserved.</div>
    </div>
  );
};

export default Footer;
