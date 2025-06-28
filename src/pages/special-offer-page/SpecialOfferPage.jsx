import { useParams } from "react-router-dom"
import { specialOffers } from "../../data/special-offers";
import { useState } from "react";

import Rating from "../../components/rating/Rating"
import "./special-offer-page.css";
import ProductDescription from "./ProductDescription";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/apiCalls/cartApiCalls";

const SpecialOfferPage = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const [qty, setQty] = useState(1);

  const product = specialOffers.find(offer => offer.id === parseInt(id));

  const { images, title, rating, reviews, price, discount } = product;

  const [imageIndex, setImageIndex] = useState(0);

  const calculateDiscount = price - (discount * price) / 100;

  // Add To Cart Handler
  const addToCartHandler = () => {
    dispatch(
      addToCart({
        id: id,
        quantity: qty,
        price: price,
        title: title,
        image: images[0],
      })
    );
    setQty(1);
  };

  return (
    <>

      <div className="special-offers-page">
        <div className="special-offers-page-img-wrapper">
          <img
            src={images[imageIndex]}
            alt=""
            className="special-offers-page-img"
          />
          <div className="special-offers-page-select">
            {images.map((img, index) => (
              <img
                onClick={() => setImageIndex(index)}
                className="select-img"
                key={index}
                src={img}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className="special-offers-page-info">
          <h3 className="special-offers-page-title">{title}</h3>
          <Rating rating={rating} reviews={reviews} />
          <div className="special-offers-price">
            <b className="special-offers-item">${price}</b>
            <b className="special-offers-final-price-item">
              ${calculateDiscount}
            </b>
          </div>
          <div className="special-offers-add-to-cart">
            <div>الکمیه</div>
            <input
            value={qty}
            onChange={e => setQty(e.target.value)}
              type="number"
              min="1"
              max="10"
            />
            <button
              onClick={addToCartHandler}
              className="add-to-cart-btn"
            >
              إضافة إلى سلة التسوق
            </button>
          </div>
        </div>
      </div>

      <ProductDescription />
    </>
  );
};

export default SpecialOfferPage;
