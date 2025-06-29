import ProductFilterBox from './ProductFilterBox'
import ProductSortBox from './ProductSortBox'

const ProductSidebar = () => {
  return (
    <div className="product-sidebar">

      <div className="sidebar-item">
        <h4 className="product-sidebar-title">
          فلترة حسب السلعة
        </h4>
        <ProductFilterBox />
      </div>

      <div className="sidebar-item">
        <h4 className="product-sidebar-title">
          ترتيب حسب السعر
        </h4>
        <ProductSortBox />
      </div>

    </div>
  )
}

export default ProductSidebar