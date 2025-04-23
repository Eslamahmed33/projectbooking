// context/hotelContext.js
import { createContext, useState } from "react";

export const HotelContext = createContext();

export const HotelContextProvider = ({ children }) => {
  const [hotels, setHotels] = useState([
    // بيانات الفنادق المؤقتة (يمكنك نسخها من datatablesource.js أو تركها فارغة في البداية)
    {
        id: 1,
        name: "Hilton Luxor Resort & Spa",
        img: "https://lh3.googleusercontent.com/gps-cs-s/AB5caB8R_USOPrm5j8bUEj1CDJDZThjjMl1V_cewCzHO_BgaFUgPi06sgBIaqEQ8n-asbHNMoKNUT3KkVe97ZlUPuc_oLgHGN4E2rrkNeVvIIGACMngt2rCQyOFzn3-0wQHv7IZVYrCr_Q=s1360-w1360-h1020",
        location: "Luxor, Egypt",
        status: "available",
        rating: 4.5,
        pricePerNight: 120,
        title: "Iconic Times Square Hotel",
        desc: "Experience the vibrant heart of New York City.", 
      },
      {
        id: 2,
        name: "Marriott Marquis",
        img: "https://images.pexels.com/photos/736150/pexels-photo-736150.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        location: "New York, USA",
        status: "booked",
        rating: 4.7,
        pricePerNight: 250,
        title: "Luxury Resort in Luxor", 
        desc: "Enjoy stunning Nile views and world-class amenities.",
      },
      {
        id: 3,
        name: "The Ritz-Carlton",
        img: "https://c8.alamy.com/comp/2AX02BG/berlin-germany-february-8-2020-the-ritz-carlton-logo-at-the-hotel-at-potsdamer-platz-square-in-berlin-germany-2AX02BG.jpg",
        location: "Paris, France",
        status: "available",
        rating: 4.8,
        pricePerNight: 350,
        title: "Iconic Times Square Hotel", // <--- إضافة حقل title
        desc: "Experience the vibrant heart of New York City.", // <--- إضافة حقل desc
      },
      {
        id: 4,
        name: "Sheraton Grand",
        img: "https://images.pexels.com/photos/1060977/pexels-photo-1060977.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        location: "Tokyo, Japan",
        status: "available",
        rating: 4.3,
        pricePerNight: 200,
        title: "Iconic Times Square Hotel", // <--- إضافة حقل title
        desc: "Experience the vibrant heart of New York City.", // <--- إضافة حقل desc
      },
      {
        id: 5,
        name: "Four Seasons",
        img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/155362452.jpg?k=bea6beb3eec45a4316d89d1f034f2044be8a7ec7519e34aa884a08c5da055ed6&o=&hp=1",
        location: "Bora Bora, French Polynesia",
        status: "booked",
        rating: 5.0,
        pricePerNight: 500,
        title: "Iconic Times Square Hotel", // <--- إضافة حقل title
        desc: "Experience the vibrant heart of New York City.", // <--- إضافة حقل desc
      },
      {
        id: 6,
        name: "Grand Hyatt",
        img: "https://lh3.googleusercontent.com/p/AF1QipO9oKvDFKmDW4i35KarpozwpL5zT9OykZfMQlkw=w252-h168-k-no",
        location: "Dubai, UAE",
        status: "available",
        rating: 4.6,
        pricePerNight: 350,
        title: "Iconic Times Square Hotel", // <--- إضافة حقل title
        desc: "Experience the vibrant heart of New York City.", // <--- إضافة حقل desc
      },
      {
        id: 7,
        name: "InterContinental",
        img: "https://images.pexels.com/photos/5325360/pexels-photo-5325360.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        location: "Sydney, Australia",
        status: "booked",
        rating: 4.4,
        pricePerNight: 220,
        title: "Iconic Times Square Hotel", // <--- إضافة حقل title
        desc: "Experience the vibrant heart of New York City.", // <--- إضافة حقل desc
      },
      {
        id: 8,
        name: "Waldorf Astoria",
        img: "https://www.hilton.com/im/en/SEZPIWA/18599390/dsc00529.jpg?impolicy=crop&cw=3334&ch=3334&gravity=NorthWest&xposition=833&yposition=0&rw=1536&rh=1536",
        location: "London, UK",
        status: "available",
        rating: 4.9,
        pricePerNight: 400,
        title: "Iconic Times Square Hotel", // <--- إضافة حقل title
        desc: "Experience the vibrant heart of New York City.", // <--- إضافة حقل desc
      },
      {
        id: 9,
        name: "Mandarin Oriental",
        img: "https://pix8.agoda.net/hotelImages/182175/-1/e4f60168a74c44baa839824728ccd85a.jpg?ca=7&ce=1&s=600x",
        location: "Hong Kong, China",
        status: "available",
        rating: 4.6,
        pricePerNight: 250,
        title: "Iconic Times Square Hotel", // <--- إضافة حقل title
        desc: "Experience the vibrant heart of New York City.", // <--- إضافة حقل desc
      },
      {
        id: 10,
        name: "St. Regis",
        img: "https://cache.marriott.com/content/dam/marriott-renditions/CAIXR/caixr-crystal-hall-9759-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1300px:*",
        location: "Los Angeles, USA",
        status: "booked",
        rating: 4.7,
        pricePerNight: 280,
        title: "Iconic Times Square Hotel", // <--- إضافة حقل title
        desc: "Experience the vibrant heart of New York City.", // <--- إضافة حقل desc
      },
    // ... يمكنك إضافة المزيد من بيانات الفنادق المؤقتة هنا
  ]);

  const addHotel = (newHotel) => {
    console.log("الفندق المراد إضافته:", newHotel);
    setHotels([newHotel, ...hotels]);
  };
 

  const updateHotel = (id, updatedHotel) => {
    setHotels(hotels.map((hotel) => (hotel.id === id ? updatedHotel : hotel)));
  };

  const deleteHotel = (id) => {
    setHotels(hotels.filter((hotel) => hotel.id !== id));
  };

  return (
    <HotelContext.Provider value={{ hotels, addHotel, updateHotel, deleteHotel }}>
      {children}
    </HotelContext.Provider>
  );
};