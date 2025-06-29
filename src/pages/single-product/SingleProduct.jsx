import { useParams } from "react-router-dom";
import Rating from "../../components/rating/Rating";
import ProductDescription from "../special-offer-page/ProductDescription";
import "./single-product.css"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductById } from "../../redux/apiCalls/productApiCall";
import Spinner from "../../components/spinner/Spinner";
import { addToCart } from "../../redux/apiCalls/cartApiCalls";

const SingleProduct = () => {

  const dispatch = useDispatch();
  const { product, loading } = useSelector(state => state.product);

  const { id } = useParams();
  const [qty, setQty] = useState(1);

  useEffect(() => {
    dispatch(getProductById(id));
    window.scrollTo(0, 0) ;
  }, [id]);

  // Add To Cart Handler
  const addToCartHandler = () => {
    dispatch(
      addToCart({
        id: product?.id,
        quantity: qty,
        price: product?.price,
        title: product?.title,
        image: product?.image,
      })
    );
    setQty(1);
  };

  if (loading) return <Spinner />

  return (

    <div className="single-product">
      <div className="product-wrapper">
        <div className="product-image-wrapper">
          <img src={product?.image} alt="" />
        </div>
        <div className="product-info">
          <h1 className="product-title">{product?.title}</h1>
          <Rating rating={product?.rating} reviews={product?.reviews} />
          <div className="product-price">{product?.price}</div>
          <div className="product-add-to-cart">
            <div>الكمية</div>
            <input
              value={qty}
              onChange={e => setQty(e.target.value)}
              type="number"
              min="1"
              max="10"
            />
            <button
              onClick={addToCartHandler}
              className="add-to-cart-btn">
              إضافة إلى سلة التسوق
            </button>
          </div>
        </div>
      </div>
      <ProductDescription />
    </div>

  )
}

export default SingleProduct