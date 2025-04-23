import "./tabledashboard.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";

const Tabledashboard = () => {
  const { darkMode } = useContext(DarkModeContext);
  const rows = [
    {
      id: 1143155,
      product: "Luxury Hotel Suite",
      img: "https://media.istockphoto.com/id/1452529483/photo/3d-render-of-luxury-hotel-room.jpg?s=612x612&w=0&k=20&c=TzxpiZWHSgMPAZ6lsRKVsG5McmfrQ-bxoPpC8cQLrbk=",
      customer: "John Smith",
      date: "1 March",
      amount: 785,
      method: "Cash on Delivery",
      status: "Approved",
    },
    {
      id: 2235235,
      product: "Premium Beach Resort",
      img: "https://d14lzrdzcl5mh2.cloudfront.net/s.php?uid=158034&source=xml&size=800&cid=3959&iid=105162712",
      customer: "Michael Doe",
      date: "1 March",
      amount: 900,
      method: "Online Payment",
      status: "Pending",
    },
    {
      id: 2342353,
      product: "Mountain View Hotel",
      img: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/19229386.jpg?k=bb01fd3c1b40e000e4443a00b2dd4ba763d97a47e51e2ff4ca35d3c6f27cf3e0&o=&hp=1",
      customer: "John Smith",
      date: "1 March",
      amount: 35,
      method: "Cash on Delivery",
      status: "Pending",
    },
    {
      id: 2357741,
      product: "Riverside Villa",
      img: "https://ik.imagekit.io/tvlk/apr-asset/Ixf4aptF5N2Qdfmh4fGGYhTN274kJXuNMkUAzpL5HuD9jzSxIGG5kZNhhHY-p7nw/hotel/asset/20034940-c25adb6f2b699a429a23908d704f6242.jpeg?_src=imagekit&tr=c-at_max,f-jpg,fo-auto,h-203,pr-true,q-80,w-300",
      customer: "Jane Smith",
      date: "1 March",
      amount: 920,
      method: "Online",
      status: "Approved",
    },
    {
      id: 2342355,
      product: "Luxury Ski Lodge",
      img: "https://www.skiinluxury.com/attachments/photos/gallery/66866340-c358-42b2-a492-44f10a000004.jpg",
      customer: "Harold Carol",
      date: "1 March",
      amount: 2000,
      method: "Online",
      status: "Pending",
    },
  ];

  return (
    <TableContainer
      component={Paper}
      className={`table ${darkMode ? "dark" : ""}`}
      sx={{ backgroundColor: darkMode ? "#222" : "white", boxShadow: darkMode ? "0 4px 8px rgba(0, 0, 0, 0.2)" : "0 4px 8px rgba(0, 0, 0, 0.1)" }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking ID</TableCell>
            <TableCell className="tableCell">Hotel</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" className="image" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">${row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Tabledashboard;
