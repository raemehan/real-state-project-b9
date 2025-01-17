const Slider = () => {

return (
    <div className="w-11/12 mx-auto h-4/6">
<div className="carousel w-full ">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://www.lakdi.com/cdn/shop/articles/apartment-flat-interior-design.webp?v=1705407023"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://jumanji.livspace-cdn.com/magazine/wp-content/uploads/sites/2/2020/07/29191451/Interior-Design-For-2BHK-Flat-Living.jpg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQouV64n0JtSc2yZgBBwcxMJV-yRp5hPLNUlQ&s"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://www.elegantinterior.info/wp-content/uploads/2022/10/13-1030x610.jpeg"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </div>
    );
};

export default Slider;