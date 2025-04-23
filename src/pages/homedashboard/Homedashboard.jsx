import Sidebardashboard from "../../components/sidebardashboard/Sidebardashboard";
import Navbardashboard from "../../components/navbardashboard/Navbardashboard";
import "./homedashboard.scss";
import Widgetdashboard from "../../components/widgetdashboard/Widgetdashboard";
import Featureddashboard from "../../components/featureddashboard/Featureddashboard";
import Chartdashboard from "../../components/chartdashboard/Chartdashboard";
import Tabledashboard from "../../components/tabledashboard/Tabledashboard";
import { DarkModeContext } from "../../context/darkModeContext"; // استورد الـ Context
import { useContext } from "react"; // استورد الـ useContext

const Homedashboard = () => {
  const { darkMode } = useContext(DarkModeContext); // استخدم الـ Context

  return (
    <div className={`home ${darkMode ? "dark" : ""}`}> {/* أضف كلاس الـ "dark" ديناميكيًا */}
      <Sidebardashboard />
      <div className="homeContainer">
        <Navbardashboard />
        <div className="widgets">
          <Widgetdashboard type="user" />
          <Widgetdashboard type="order" />
          <Widgetdashboard type="earning" />
          <Widgetdashboard type="balance" />
        </div>
        <div className="charts">
          <Featureddashboard />
          <Chartdashboard title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Tabledashboard />
        </div>
      </div>
    </div>
  );
};

export default Homedashboard;