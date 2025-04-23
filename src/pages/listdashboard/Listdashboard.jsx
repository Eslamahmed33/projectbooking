import "./listdashboard.scss";
import Sidebardashboard from "../../components/sidebardashboard/Sidebardashboard";
import Navbardashboard from "../../components/navbardashboard/Navbardashboard";
import Datatabledashboard from "../../components/datatabledashboard/Datatabledashboard";
import { DarkModeContext } from "../../context/darkModeContext"; // استورد الـ Context
import { useContext } from "react"; // استورد الـ useContext

const Listdashboard = () => {
  const { darkMode } = useContext(DarkModeContext); // استخدم الـ Context

  return (
    <div className={`list ${darkMode ? "dark" : ""}`}> {/* أضف كلاس الـ "dark" ديناميكيًا */}
      <Sidebardashboard />
      <div className="listContainer">
        <Navbardashboard />
        <Datatabledashboard />
      </div>
    </div>
  );
};

export default Listdashboard;