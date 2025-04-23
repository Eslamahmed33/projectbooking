import "./sidebardashboard.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HotelIcon from "@mui/icons-material/Hotel";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom'; // Icon for rooms
import LocalOfferIcon from '@mui/icons-material/LocalOffer'; // Icon for bookings
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining'; // Alternative icon for delivery
import TimelineIcon from '@mui/icons-material/Timeline'; // Alternative icon for stats
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'; // Alternative icon for notifications
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'; // Alternative icon for system health
import BugReportIcon from '@mui/icons-material/BugReport'; // Alternative icon for logs
import PersonIcon from '@mui/icons-material/Person'; // Alternative icon for profile
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew'; // Alternative icon for logout
import { Link, useNavigate } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext, useEffect } from "react";

const Sidebardashboard = () => {
  const { darkMode, dispatch } = useContext(DarkModeContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Dark Mode State:", darkMode);
  }, [darkMode]);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className={`sidebar ${darkMode ? "dark" : ""}`}>
      <div className="top">
        <Link to="/dashboard" style={{ textDecoration: "none" }}>
          <span className="logo"><span>M</span>-shwar</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">HOTEL LISTS</p>
          <Link to="/dashboard/hotelsdashboard" style={{ textDecoration: "none" }}>
            <li>
              <HotelIcon className="icon" />
              <span>Hotels</span>
            </li>
          </Link>
          <Link to="/dashboard/roomsdashboard" style={{ textDecoration: "none" }}> {/* Separate link for rooms */}
            <li>
              <MeetingRoomIcon className="icon" /> {/* Using the rooms icon */}
              <span>Rooms</span>
            </li>
          </Link>
          <p className="title">BOOKING MANAGEMENT</p>
          <li>
            <LocalOfferIcon className="icon" /> {/* Using the bookings icon */}
            <span>Bookings</span>
          </li>
          <li>
            <DeliveryDiningIcon className="icon" /> {/* Using the alternative delivery icon */}
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL TOOLS</p>
          <li>
            <TimelineIcon className="icon" /> {/* Using the alternative stats icon */}
            <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveIcon className="icon" /> {/* Using the alternative notifications icon */}
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE MANAGEMENT</p>
          <li>
            <HealthAndSafetyIcon className="icon" /> {/* Using the alternative system health icon */}
            <span>System Health</span>
          </li>
          <li>
            <BugReportIcon className="icon" /> {/* Using the alternative logs icon */}
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER SETTINGS</p>
          <li>
            <PersonIcon className="icon" /> {/* Using the alternative profile icon */}
            <span>Profile</span>
          </li>
          <li onClick={handleLogout}>
            <PowerSettingsNewIcon className="icon" /> {/* Using the alternative logout icon */}
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebardashboard;