export const hotelInputs = [
  {
    id: 1,
    label: "Hotel Name",
    type: "text",
    placeholder: "Hilton Hotel",
    name: "name",
  },
  {
    id: 2,
    label: "Title", // <--- إضافة حقل Title
    type: "text",
    placeholder: "Luxury Suite",
    name: "title", // <--- هام: يجب أن يتطابق مع field في hotelColumns
  },
  {
    id: 3,
    label: "Description", // <--- إضافة حقل Description
    type: "text",
    placeholder: "Enjoy stunning views and top-notch amenities.",
    name: "desc", // <--- هام: يجب أن يتطابق مع field في hotelColumns
  },
  {
    id: 4,
    label: "Location",
    type: "text",
    placeholder: "New York, USA",
    name: "location",
  },
  {
    id: 5,
    label: "Price per Night",
    type: "text",
    placeholder: "$200",
    name: "pricePerNight",
  },
  {
    id: 6,
    label: "Rating",
    type: "number",
    placeholder: "4.5",
    name: "rating",
  },
  {
    id: 7,
    label: "Amenities",
    type: "text",
    placeholder: "Free Wi-Fi, Pool, Spa",
    name: "amenities",
  },
  {
    id: 8,
    label: "Phone Number",
    type: "text",
    placeholder: "+1 234 567 890",
    name: "phoneNumber",
  },
  {
    id: 9,
    label: "Address",
    type: "text",
    placeholder: "123 Hotel St, New York, USA",
    name: "address",
  },
  {
    id: 10,
    label: "Country",
    type: "text",
    placeholder: "USA",
    name: "country",
  },
];

export const facilityInputs = [
  {
    id: 1,
    label: "Facility Name",
    type: "text",
    placeholder: "Spa",
    name: "facilityName",
  },
  {
    id: 2,
    label: "Description",
    type: "text",
    placeholder: "Relaxing spa with a variety of treatments.",
    name: "description",
  },
  {
    id: 3,
    label: "Location",
    type: "text",
    placeholder: "2nd Floor, Hilton Hotel",
    name: "facilityLocation",
  },
  {
    id: 4,
    label: "Price",
    type: "text",
    placeholder: "$50 per hour",
    name: "facilityPrice",
  },
  {
    id: 5,
    label: "Rating",
    type: "number",
    placeholder: "4.8",
    name: "facilityRating",
  },
];