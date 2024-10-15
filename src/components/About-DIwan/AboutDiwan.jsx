
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Product from "./Product";
import { productData, responsive } from "./data";
import '../../style/AboutDiwan.css'
const AboutDiwan= ()=> {

  // bds:3,
  //   ba:2,
  //   srrt:378,
  const product = productData.map((item) => (
    <Product
      name={item.name}
      url={item.imageurl}
      price={item.price}
      description={item.description}
     bds = {item.bds}
     bs={item.bs}
     srrt = {item.srrt}
     title = {item.title}
    />
  ));



  const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    const { carouselState: { currentSlide } } = rest;

    return (
      <div className="carousel-button-group" style={{ position: "absolute", left: "20%", bottom: "5%", transform: "translate(-50%, -50%)" }}>
        <button
          className={currentSlide === 0 ? 'disable' : ''}
          onClick={previous}
          disabled={currentSlide === 0} // Disable button if on the first slide
        >
          ◀
        </button>
        <button onClick={next}>
          ▶
        </button>

      </div>
    );
  };




  return (
    <div className="Crouser1"  >

        <div className="Crouser-text" >
        <h1>What People Say About Diwan Realty</h1>
        </div>
      
      <div className="crouser-box">
      <Carousel arrows={false} infinite={true} autoPlaySpeed={3000} responsive={responsive} partialVisible={false}  customButtonGroup={<ButtonGroup />}  renderButtonGroupOutside>
        {product}
      </Carousel>
      </div>

    </div>
  );
}

export default AboutDiwan;
