import "./singledashboard.scss";
import Sidebardashboard from "../../components/sidebardashboard/Sidebardashboard";
import Navbardashboard from "../../components/navbardashboard/Navbardashboard";
import Chartdashboard from "../../components/chartdashboard/Chartdashboard";
import Listdashboard from "../../components/tabledashboard/Tabledashboard";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Singledashboard = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={`single ${darkMode ? "dark" : ""}`}>
      <Sidebardashboard />
      <div className="singleContainer">
        <Navbardashboard />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit Hotel</div>
            <h1 className="title">Hotel Information</h1>
            <div className="item">
              <img
                src="https://cf.bstatic.com/xdata/images/hotel/max500/576025459.jpg?k=8d8d86ab8a746746b996a56ff34333eb30b96744f6f715799fa5ad728fc6a4fe&o="
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">Hilton Luxor Resort & Spa</h1>
                <div className="detailItem">
                  <span className="itemKey">City:</span>
                  <span className="itemValue">Luxor, Egypt</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Type:</span>
                  <span className="itemValue">5-Star Hotel</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Rooms Available:</span>
                  <span className="itemValue">23</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Rating:</span>
                  <span className="itemValue">4.8 / 5</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chartdashboard aspect={3 / 1} title="Bookings Over Last 6 Months" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Recent Reservations</h1>
          <Listdashboard />
        </div>
      </div>
    </div>
  );
};

export default Singledashboard;
