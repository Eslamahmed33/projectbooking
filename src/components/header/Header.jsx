import { faBed, faCalendarDays, faCar, faGlobe, faPerson, faPlane, faTaxi } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { useState } from "react";
import { format } from "date-fns";
import { useNavigate, useLocation, Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(() => {
    switch (location.pathname) {
      case "/flights":
        return "Flights";
      case "/car-rentals":
        return "Car rentals";
      case "/attractions":
        return "Attractions";
      case "/airport-taxis":
        return "Taxi";
      default:
        return "Stays";
    }
  });

  const navigate = useNavigate();

  const handleOption = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
    }));
  };

  const handleSearch = () => {
    navigate("/hotels", {
      state: {
        destination,
        date: [{ startDate, endDate, key: "selection" }],
        options,
      },
    });
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    switch (tabName) {
      case "Stays":
        navigate("/");
        break;
      case "Flights":
        navigate("/flights");
        break;
      case "Car rentals":
        navigate("/car-rentals");
        break;
      case "Attractions":
        navigate("/attractions");
        break;
      case "Taxi":
        navigate("/airport-taxis");
        break;
      default:
        break;
    }
  };

  return (
    <div className="header">
      <div className={type === "list" ? "headercontainer listMode" : "headercontainer"}>
        <div className="headerlist">
          <div
            className={`headerlistitem ${activeTab === "Stays" ? "active" : ""}`}
            onClick={() => handleTabClick("Stays")}
          >
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div
            className={`headerlistitem ${activeTab === "Flights" ? "active" : ""}`}
            onClick={() => handleTabClick("Flights")}
          >
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div
            className={`headerlistitem ${activeTab === "Car rentals" ? "active" : ""}`}
            onClick={() => handleTabClick("Car rentals")}
          >
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div
            className={`headerlistitem ${activeTab === "Attractions" ? "active" : ""}`}
            onClick={() => handleTabClick("Attractions")}
          >
            <FontAwesomeIcon icon={faGlobe}/>
            <span>Attractions</span>
          </div>
          <div
            className={`headerlistitem ${activeTab === "Taxi" ? "active" : ""}`}
            onClick={() => handleTabClick("Taxi")}
          >
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>

        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              Save more, travel better – the Genius way to explore.
            </h1>
            <p className="headerDesc">
              Get exclusive deals and instant discounts when you sign up with <span>M</span>-shwar.
              Travel smart — save 10% or more instantly with your free  <span>M</span>-shwar  account.
            </p>
            <Link to="/login" className="headerbtn">
              Sign in / Register
            </Link>
            <div className="headersearch">
              <div className="headersearchitem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="Where are you going?"
                  className="headerserachinput"
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>

              <div className="headersearchitem dateItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span onClick={() => setOpenDate(!openDate)} className="headersearchtext">
                  {`${format(startDate, "MM/dd/yyyy")} to ${format(endDate, "MM/dd/yyyy")}`}
                </span>
                {openDate && (
                  <div className="datePickerContainer animate">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                      minDate={new Date()}
                      placeholderText="Start Date"
                      className="datePickerInput"
                    />
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => setEndDate(date)}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      minDate={startDate}
                      placeholderText="End Date"
                      className="datePickerInput"
                    />
                  </div>
                )}
              </div>

              <div className="headersearchitem personItem">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headersearchtext"
                >
                  {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                </span>
                {openOptions && (
                  <div className="options animate">
                    {["adult", "children", "room"].map((opt, index) => (
                      <div className="optionItem" key={index}>
                        <span className="optionText">
                          {opt.charAt(0).toUpperCase() + opt.slice(1)}
                        </span>
                        <div className="optionCounter">
                          <button
                            disabled={(
                              (opt === "adult" && options[opt] <= 1) ||
                              (opt === "children" && options[opt] <= 0) ||
                              (opt === "room" && options[opt] <= 1)
                            )}
                            className="optionCounterButton"
                            onClick={() => handleOption(opt, "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options[opt]}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption(opt, "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="headersearchitem">
                <button className="headerbtn" onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;