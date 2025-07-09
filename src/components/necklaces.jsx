import jewelleryData from "../data/dataset.json";
import "../shop.css";

function Necklaces() {
  return (
    <>
      <div>
        <h3>Necklaces Collection</h3>
        <p>Chic and minimal necklaces to elevate your style.</p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=400&h=300"
        alt="Jewellery"
      />
      <div className="product-grid">
        {jewelleryData.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <strong>${item.price}</strong>
          </div>
        ))}
      </div>
    </>
  );
}

export default Necklaces;
