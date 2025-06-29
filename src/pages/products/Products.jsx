import ProductSidebar from "./ProductSidebar";
import ProductList from "./ProductList"
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProducts } from "../../redux/apiCalls/productApiCall";
import "./products.css";


const Products = () => {

  const dispatch = useDispatch();
  const { products } = useSelector(state => state.product);

  const [filterItem, setFilterItem] = useState("all");
  const [sortItem, setSortItem] = useState("select");

  useEffect(() => {
    dispatch(fetchProducts())
  }, []);

  // Filter Product

  const filterProduct = products.filter((product) =>
    filterItem === "laptop"
      ? product.isLaptop === true
      : filterItem === "mobile"
        ? product.isLaptop === false
        : product
  );

  // Sort Product
  const sortedProductList =
    sortItem === "low"
      ? filterProduct.sort((a, b) => a.price - b.price)
      : sortItem === "high"
        ? filterProduct.sort((a, b) => b.price - a.price)
        : filterProduct.sort((a, b) => (a.title > b.title ? 1 : -1))

  return (

    <div className="products">
      <ProductSidebar
        filterItem={filterItem}
        setFilterItem={setFilterItem}
        sortItem={sortItem}
        setSortItem={setSortItem}
      />
      <ProductList products={sortedProductList} />
    </div>

  )
}

export default Products;
