import "./Gallery.css";
import { paints } from "./Paints.jsx";
import { Link } from "react-router-dom";

function Gallery() {
  return (
    <div className="gallery-section" id="Paintings">
      <div className="gallery-text-section">
        <div className="the-gallery">the gallery</div>
        <div className="gallery-title">explore his masterpieces</div>
      </div>

      <div className="paints-section">
        {paints.map((items) => (
          <div key={items.id} className="paint-card">
            <Link to={`/paint_details/${items.id}`}>
              <div className="paint-image-box">
                <img
                  className="paint-image"
                  src={items.image}
                  alt={items.name}
                />

                <div className="paint-overlay">
                  <div className="overlay-wrapper">
                    <div className="paint-overlay-title">{items.name}</div>
                    <div className="paint-overlay-description">
                      {items.description}
                    </div>
                  </div>
                </div>
              </div>
            </Link>

            <div className="paint-name">{items.name}</div>
            <div className="paint-date">{items.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
