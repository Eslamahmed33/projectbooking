import "./datatabledashboard.scss";
import { DataGrid } from "@mui/x-data-grid";
import { hotelColumns } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { HotelContext } from "../../context/hotelcontext"; // استيراد الـ Context

const Datatabledashboard = () => {
  const { hotels, setHotels } = useContext(HotelContext); // الوصول إلى حالة الفنادق ووظيفة التحديث (إذا لزم الأمر)
  const { darkMode } = useContext(DarkModeContext);

  const handleDelete = (id) => {
    setHotels(hotels.filter((item) => item.id !== id)); // استخدام وظيفة التحديث من الـ Context
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => (
        <div className="cellAction">
          <Link to={`/dashboard/productsdashboard/:productIddashboard${params.row.id}`} className="viewButton">
            View
          </Link>
          <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>
            Delete
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className={`datatable ${darkMode ? "dark" : ""}`}>
      <div className="datatableTitle">
        Hotel Management
        <Link to="/dashboard/addnewdashboard/" className="link">
          + Add New Hotel
        </Link>
      </div>
      <DataGrid
        className={`datagrid ${darkMode ? "dark" : ""}`}
        rows={hotels} // استخدام حالة الفنادق من الـ Context
        columns={hotelColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        sx={{
          fontSize: 14,
          border: 0,
          color: darkMode ? "#e0e0e0" : "#333",
          backgroundColor: darkMode ? "#181818" : "#fff",
          "& .MuiDataGrid-cell": {
            borderBottom: darkMode ? "1px solid #444" : "1px solid #ccc",
            color: darkMode ? "#f1f1f1" : "#333",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: darkMode ? "#2c2c2c" : "#f4f4f4",
            color: darkMode ? "#f1f1f1" : "#555",
          },
          "& .MuiCheckbox-root svg": {
            fill: darkMode ? "#f1f1f1" : "#444",
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: darkMode ? "#2c2c2c" : "#f4f4f4",
            color: darkMode ? "#f1f1f1" : "#555",
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: darkMode ? "#3a3a3a" : "#f5f5f5",
          },
        }}
      />
    </div>
  );
};

export default Datatabledashboard;