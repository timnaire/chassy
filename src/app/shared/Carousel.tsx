interface CarouselProps {
  images: string[];
}

export function Carousel({ images }: CarouselProps) {

  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={images[0]} height="450" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={images[1]} height="450" className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={images[2]} height="450" className="d-block w-100" alt="..." />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
