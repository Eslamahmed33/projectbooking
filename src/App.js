import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import Regester from "./pages/regester/Regester";
import Admin from "./pages/admin/Admin"; // السطر اللي اتصلح
import Flights from "./components/flights/Flights";
import Car from "./components/car/Car";
import Attraction from "./components/attraction/Attraction";
import Taxi from "./components/taxi/Taxi";
import Homedashboard from "./pages/homedashboard/Homedashboard";
import Listdashboard from "./pages/listdashboard/Listdashboard";
import Singledashboard from "./pages/singledashboard/Singledashboard";
import Newdashboard from "./pages/newdashboard/Newdashboard";
import { hotelInputs, facilityInputs } from './formSource';
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import "./app.css";
import { DarkModeContextProvider } from "./context/darkModeContext"; // استورد الـ Provider
import Hoteldetails from "./components/hoteldetails/Hoteldetails";
import Detailshotel from "./components/detailshotel/Detailshotel";
import { HotelContextProvider } from "./context/hotelcontext"; // استورد HotelContextProvider

function App() {
  return (
    <DarkModeContextProvider> {/* لفّ كل المحتوى هنا */}
      <BrowserRouter>
        <div className={useContext(DarkModeContext).darkMode ? "app dark" : "app"}> {/* استخدم useContext هنا برضه لو محتاج الـ darkMode */}
          <Routes>
            {/* الروابط الرئيسية للموقع */}
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<List />} />
            <Route path="/hotel/:hotelId" element={<Detailshotel />} />
            <Route path="/city/:cityId" element={<Hoteldetails />} />
            <Route path="/hotels/:id" element={<Hotel />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/register" element={<Regester />} />
            <Route path="/login" element={<Login />} />
            <Route path="/flights" element={<Flights />} />
            <Route path="/car-rentals" element={<Car />} />
            <Route path="/attractions" element={<Attraction />} />
            <Route path="/airport-taxis" element={<Taxi />} />

            {/* روابط الداشبورد (تم تغليفها بـ HotelContextProvider) */}
            <Route path="/dashboard/*" element={
              <HotelContextProvider>
                <Routes>
                  <Route index element={<Homedashboard />} />
                  <Route path="hotelsdashboard" element={<Listdashboard />} />
                  <Route path="usersdashboard/:userIddashboard" element={<Singledashboard />} />
                  <Route path="addnewdashboard" element={<Newdashboard inputs={hotelInputs} title="Add New hotel" />} />
                  <Route path="hoteldashboard" element={<Listdashboard />} />
                  <Route path="productsdashboard/:productIddashboard" element={<Singledashboard />} />
                  {/* <Route path="/dashboard/productsdashboard/newdashboard" element={<Newdashboard inputs={facilityInputs} title="Add New Product" />} /> */}
                </Routes>
              </HotelContextProvider>
            } />
          </Routes>
        </div>
      </BrowserRouter>
    </DarkModeContextProvider>
  );
}

export default App;