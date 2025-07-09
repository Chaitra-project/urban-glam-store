import { useState } from "react";
import Rings from "../components/rings";
import Necklaces from "../components/necklaces";
import Earrings from "../components/earrings";

import "../shop.css"; // Optional, for styling tabs

function Shop() {
  const [activeTab, setActiveTab] = useState("rings");

  const renderTabContent = () => {
    switch (activeTab) {
      case "rings":
        return <Rings />;
      case "necklaces":
        return <Necklaces />;
      case "earrings":
        return <Earrings />;
      default:
        return null;
    }
  };

  return (
    <div className="shop-page">
      <h2>Our Collections</h2>
      <div className="tab-container">
        <button
          className={activeTab === "rings" ? "tab active" : "tab"}
          onClick={() => setActiveTab("rings")}
        >
          Rings
        </button>
        <button
          className={activeTab === "necklaces" ? "tab active" : "tab"}
          onClick={() => setActiveTab("necklaces")}
        >
          Necklaces
        </button>
        <button
          className={activeTab === "earrings" ? "tab active" : "tab"}
          onClick={() => setActiveTab("earrings")}
        >
          Earrings
        </button>
      </div>

      <div className="tab-content">{renderTabContent()}</div>
    </div>
  );
}

export default Shop;
