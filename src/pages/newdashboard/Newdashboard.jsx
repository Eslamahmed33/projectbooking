// components/newdashboard/Newdashboard.jsx
import "./newdashboard.scss";
import Sidebardashboard from "../../components/sidebardashboard/Sidebardashboard";
import Navbardashboard from "../../components/navbardashboard/Navbardashboard";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState, useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { HotelContext } from "../../context/hotelcontext"; // استيراد الـ Context
import { useNavigate } from "react-router-dom"; // استيراد useNavigate

const Newdashboard = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const { darkMode } = useContext(DarkModeContext);
  const { addHotel, hotels } = useContext(HotelContext); // الوصول إلى وظيفة addHotel وحالة الفنادق (للحصول على ID جديد)
  const [formData, setFormData] = useState({});
  const navigate = useNavigate(); // تهيئة useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newHotel = {
      id: hotels.length + 1, // توليد ID مؤقت (يفضل استخدام UUID في التطبيقات الحقيقية)
      img: file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",
      ...formData,
      status: "available", // يمكنك تعيين حالة افتراضية
      rating: parseFloat(formData.rating) || 0, // يمكنك تعيين تقييم افتراضي
      pricePerNight: parseFloat(formData.pricePerNight) || 0, // تحويل السعر إلى رقم
    };
    addHotel(newHotel);
    // يمكنك هنا إضافة منطق لإعادة توجيه المستخدم أو مسح النموذج
    console.log("تم إضافة الفندق:", newHotel);
    navigate("/dashboard/hotelsdashboard"); // توجيه المستخدم بعد الإضافة
  };

  return (
    <div className={`new ${darkMode ? "dark" : ""}`}>
      <Sidebardashboard />
      <div className="newContainer">
        <Navbardashboard />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input
                    type={input.type}
                    placeholder={input.placeholder}
                    name={input.name} // تأكد من إضافة خاصية name للمدخلات
                    onChange={handleChange}
                  />
                </div>
              ))}
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newdashboard;