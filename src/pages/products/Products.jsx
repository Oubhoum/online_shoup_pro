import ProductSidebar from "./ProductSidebar";
import ProductList from "./ProductList"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "../../redux/apiCalls/productApiCall";
import "./products.css";


const Products = () => {

  const dispatch = useDispatch();
  const { products } = useSelector(state => state.product);

  useEffect(() => {
    dispatch(fetchProducts())
  }, []);

  return (

    <div className="products">
      <ProductSidebar />
      <ProductList products={products}/>
    </div>

  )
}

export default Products;
