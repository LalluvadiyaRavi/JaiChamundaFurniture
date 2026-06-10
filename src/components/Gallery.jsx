import "./Gallery.css";

function Gallery() {
    return (
        <section id="gallery" className="gallery" data-aos="zoom-in">
            <h2>
                Our Recent Projects
            </h2>
           <div className="gallery-container">
            <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc" alt="Furniture Project" />

              <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85" alt="Wardrobe Project" />

              <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858" alt="Kitchen Project" />

              <img src="https://images.unsplash.com/photo-1494526585095-c41746248156" alt="Interior Design" />
              
           </div>
        </section>
    );
}

export default Gallery;