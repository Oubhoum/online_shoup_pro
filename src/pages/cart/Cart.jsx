
import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import { removeFormCart } from "../../redux/apiCalls/cartApiCalls";
import { Link } from "react-router-dom";

import Swal from 'sweetalert2';


const Cart = () => {

  const { cartItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (

    cartItems.length < 1 ?

      <div className="empty-cart">
        <h1>سلة التسوق الخاصة بك فارغة</h1>
        <p>لا يوجد سلع</p>
        <Link className="empty-cart-link" to="products">
          صفحة السلع
        </Link>
      </div>
      :
      <div className="cart">
        <h1 className="cart-title">سلة التسوق</h1>
        <div className="cart-wrapper">

          <div className="cart-items">
            {
              cartItems.map(item =>
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-img-wrapper">
                    <img src={item.image} alt={item.title} className="cart-item-img" />
                  </div>
                  <div className="cart-item-info">
                    <div className="cart-item-title">{item.title}</div>
                    <div className="cart-item-quantity">
                      الكمية :
                      <span>{item.quantity}</span>
                    </div>
                    <div className="cart-item-price">
                      السعر :
                      <span>{item.price * item.quantity}$</span>
                    </div>

                    {/* <i onClick={() => dispatch(removeFormCart(item.id))} className="bi bi-trash cart-item-delete-icon"></i> */}
                    {/* <i
                      onClick={() => {
                        const confirmDelete = window.confirm(`هل أنت متأكد أنك تريد حذف "${item.title}" من السلة؟`);
                        if (confirmDelete) {
                          dispatch(removeFormCart(item.id));
                        }
                      }}
                      className="bi bi-trash cart-item-delete-icon"
                    ></i> */}

                    <i
                      onClick={() => {
                        Swal.fire({
                          title: `هل تريد حذف "${item.title}"؟`,
                          text: "لا يمكنك التراجع بعد الحذف!",
                          icon: 'warning',
                          showCancelButton: true,
                          confirmButtonColor: '#d33',
                          cancelButtonColor: '#3085d6',
                          confirmButtonText: 'نعم، احذفه',
                          cancelButtonText: 'إلغاء'
                        }).then((result) => {
                          if (result.isConfirmed) {
                            dispatch(removeFormCart(item.id));
                            Swal.fire('تم الحذف!', 'تم حذف المنتج من السلة.', 'success');
                          }
                        });
                      }}
                      className="bi bi-trash cart-item-delete-icon"
                    ></i>

                  </div>
                </div>
              )
            }
          </div>

          <div className="cart-summary">
            <div className="cart-summary-text">
              <i className="bi bi-check-circle-fill"></i>
              جزء من طلبك مؤهل للشحن المجاني. قم بتحدید هذا الخیار عند دفع
              التفاصیل
            </div>
            <div className="cart-summary-total">
              المجوع :
              <span>
                {
                  cartItems.reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
                }$
              </span>
            </div>
            <button className="cart-summary-btn">
              تابع عمليات الشراء
            </button>
          </div>
        </div>
      </div>
  )
}

export default Cart