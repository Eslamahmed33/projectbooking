import "./searchitem.css";

const searchItems = [
  {
    id: 1,
    img: "../شرم الشيخ/هيلتون شرم دريمز/506539481.jpg",
    title: "Tower Street Apartments",
    distance: "500m from center",
    taxi: true,
    subtitle: "Studio Apartment with Air conditioning",
    features: "Entire studio • 1 bathroom • 21m² 1 full bed",
    cancel: true,
    cancelSubtitle: "You can cancel later, so lock in this great price today!",
    rating: 8.9,
    rateText: "Excellent",
    price: 112,
  },
  {
    id: 2,
    img: "../شرم الشيخ/منتجع فور سيزونز/335941520.jpg",
    title: "Sea View Resort",
    distance: "300m from beach",
    taxi: false,
    subtitle: "Double Room with Balcony",
    features: "Double room • 1 bathroom • 24m² 1 queen bed",
    cancel: true,
    cancelSubtitle: "Free cancellation before 24 hours",
    rating: 8.7,
    rateText: "Very Good",
    price: 95,
  },
  {
    id: 3,
    img: "../شرم الشيخ/فندق موفنبيك/558620302.jpg",
    title: "Mountain Lodge",
    distance: "1.2km from center",
    taxi: true,
    subtitle: "Chalet with mountain view",
    features: "Chalet • 2 bedrooms • 50m² • 2 queen beds",
    cancel: false,
    cancelSubtitle: "",
    rating: 9.1,
    rateText: "Superb",
    price: 140,
  },
  {
    id: 4,
    img: "../شرم الشيخ/فندق صن رايز/574270901.jpg",
    title: "Urban Boutique Hotel",
    distance: "200m from downtown",
    taxi: true,
    subtitle: "Standard Room with City View",
    features: "Room • 1 bathroom • 22m² • 1 double bed",
    cancel: true,
    cancelSubtitle: "Free cancellation anytime",
    rating: 8.4,
    rateText: "Very Good",
    price: 105,
  },
  {
    id: 5,
    img: "../شرم الشيخ/ستيلا دي ماري بيتش/81552240.jpg",
    title: "Desert Inn",
    distance: "700m from center",
    taxi: false,
    subtitle: "Tent Suite with Desert View",
    features: "Suite • 1 bathroom • 30m² • 1 king bed",
    cancel: true,
    cancelSubtitle: "Flexible cancellation",
    rating: 8.0,
    rateText: "Good",
    price: 88,
  },
  {
    id: 6,
    img: "../شرم الشيخ/جراند روتانا ريزورت/99349741.jpg",
    title: "Luxury Nile View",
    distance: "100m from Nile",
    taxi: true,
    subtitle: "Luxury Suite with Balcony",
    features: "Suite • 1 bathroom • 40m² • 1 king bed",
    cancel: true,
    cancelSubtitle: "Book now, pay later",
    rating: 9.5,
    rateText: "Exceptional",
    price: 180,
  },
  {
    id: 7,
    img: "../الغردقه/فندق لابراندا كلوب مكادي/download.jpg",
    title: "City Comfort Inn",
    distance: "450m from center",
    taxi: true,
    subtitle: "Budget Room with Air conditioning",
    features: "Room • 1 bathroom • 20m² • 1 double bed",
    cancel: true,
    cancelSubtitle: "Cancel anytime",
    rating: 7.9,
    rateText: "Good",
    price: 70,
  },
  {
    id: 8,
    img: "../الغردقه/فندق سينتيدو مملوك بالاس/download.jpg",
    title: "Green Garden Hotel",
    distance: "650m from park",
    taxi: false,
    subtitle: "Eco Friendly Room",
    features: "Room • 1 bathroom • 25m² • 1 queen bed",
    cancel: true,
    cancelSubtitle: "Full refund within 48h",
    rating: 8.2,
    rateText: "Very Good",
    price: 82,
  },
  {
    id: 9,
    img: "../الغردقه/فندق ذا بريكرز/images.jpg",
    title: "Historic Palace Hotel",
    distance: "50m from museum",
    taxi: true,
    subtitle: "Historic Suite",
    features: "Suite • 1 bathroom • 60m² • 1 king bed",
    cancel: false,
    cancelSubtitle: "",
    rating: 9.3,
    rateText: "Wonderful",
    price: 160,
  },
  {
    id: 10,
    img: "../دهب/فندق كورال كوست/view-from-second-floor.jpg",
    title: "Skyline Tower Hotel",
    distance: "900m from center",
    taxi: false,
    subtitle: "Modern Room with Sky View",
    features: "Room • 1 bathroom • 28m² • 1 queen bed",
    cancel: true,
    cancelSubtitle: "Cancel before 24h for full refund",
    rating: 8.6,
    rateText: "Very Good",
    price: 120,
  },
  {
    id: 11,
    img: "../دهب/فندق إيزيس دهب/download.jpg",
    title: "Tower Street Apartments",
    distance: "500m from center",
    taxi: true,
    subtitle: "Studio Apartment with Air conditioning",
    features: "Entire studio • 1 bathroom • 21m² 1 full bed",
    cancel: true,
    cancelSubtitle: "You can cancel later, so lock in this great price today!",
    rating: 8.9,
    rateText: "Excellent",
    price: 112,
  },
  {
    id: 12,
    img: "../دهب/فندق تايجر هوتيل/couvo-exterior-horiz.jpg",
    title: "Green Garden Hotel",
    distance: "650m from park",
    taxi: false,
    subtitle: "Eco Friendly Room",
    features: "Room • 1 bathroom • 25m² • 1 queen bed",
    cancel: true,
    cancelSubtitle: "Full refund within 48h",
    rating: 8.2,
    rateText: "Very Good",
    price: 82,
  },
];

const SearchItem = () => {
  return (
    <>
      {searchItems.map((item) => (
        <div key={item.id} className="searchItem">
          <img src={item.img} alt={item.title} className="siImg" />
          <div className="siDesc">
            <h1 className="siTitle">{item.title}</h1>
            <span className="siDistance">{item.distance}</span>
            {item.taxi && <span className="siTaxiOp">Free airport taxi</span>}
            <span className="siSubtitle">{item.subtitle}</span>
            <span className="siFeatures">{item.features}</span>
            {item.cancel && <span className="siCancelOp">Free cancellation</span>}
            {item.cancel && (
              <span className="siCancelOpSubtitle">{item.cancelSubtitle}</span>
            )}
          </div>
          <div className="siDetails">
            <div className="siRating">
              <span>{item.rateText}</span>
              <button>{item.rating}</button>
            </div>
            <div className="siDetailTexts">
              <span className="siPrice">${item.price}</span>
              <span className="siTaxOp">Includes taxes and fees</span>
              <button className="siCheckButton">See availability</button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default SearchItem;
