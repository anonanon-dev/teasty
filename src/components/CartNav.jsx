import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../Authentication/userSlice';
import { useEffect, useState, useRef } from 'react';

import CartIcon from './icons/CartIcon';
import TrashIcon from './icons/TrashIcon';

// import styles from './navbar.module.css';
import styles from './cartl.module.scss';
import { useNavigate } from 'react-router-dom';

function CartNav() {
  // const { user } = useSelector((store) => store.user);
  const user = useSelector((store) => store.user.user);
  const cartItems = user ? user.cart.cartItems : [];

  const dispatch = useDispatch();
  const [droped, setDroped] = useState(false);
  const cartRef = useRef(null);
  const cartLength = user.cart.cartItems.length;
  const navigate = useNavigate();
  console.log(user.cart.cartItems);

  function handleDelete(id) {
    dispatch(removeFromCart(id));
    // Close the cart menu after item deletion
    setDroped(false);
  }

  // Close cart menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setDroped(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      className={`${styles.cartIcons}`}
      onMouseEnter={() => setDroped(true)}
      onMouseLeave={() => setDroped(false)}
      // onClick={toggleCartMenu}
    >
      <CartIcon />
      {cartLength > 0 ? (
        <span className={styles.cartNum}>{cartLength}</span>
      ) : null}
      {/* {cartLength > 0 && <span className={styles.cartNum}>{cartLength}</span>} */}
      {droped && (
        <div ref={cartRef} className={styles.cartMenu}>
          <ul>
            {cartLength > 0 ? (
              // user.cart.cartItems.map((item) => (
              cartItems.map((item) => (
                <li key={item.id}>
                  <div>
                    <div className={styles.imgDiv}>
                      {/* <img
                        src={item.imageUrl || '/cardHover.jpg'}
                        alt={`Image of ${item.name}`}
                      /> */}
                      <img src={item.img} alt={item.name} />
                    </div>
                    <div className={styles.cartPrice}>
                      <span className={styles.cartPriceName}>{item.name}</span>
                      <span>
                        {item.price.toFixed(2)}
                        <span className={styles.priceDiscount}>
                          {(item.price - item.discount).toFixed(2)}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div>
                    <button
                      className={styles.trashBtn}
                      onClick={() => handleDelete(item.id)}
                      aria-label={`Remove ${item.name} from cart`}
                    >
                      <TrashIcon />
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <div className={styles.emptyCart}>nothing in the cart</div>
            )}
          </ul>
          {cartLength > 0 && (
            <div className={styles.cartBtns}>
              <button
                className={styles.cartBtn}
                onClick={() => navigate('/cart')}
              >
                VIEW CART
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4.325 5.31666C4.16667 5.31666 4 5.25 3.88334 5.13333C3.64167 4.89166 3.64167 4.49166 3.88334 4.25L6.90834 1.225C7.15 0.98333 7.55 0.98333 7.79167 1.225C8.03334 1.46666 8.03334 1.86666 7.79167 2.10833L4.76667 5.13333C4.64167 5.25 4.48334 5.31666 4.325 5.31666Z'
                    fill='#F46D3B'
                  />
                  <path
                    d='M15.675 5.31666C15.5167 5.31666 15.3583 5.25833 15.2333 5.13333L12.2083 2.10833C11.9667 1.86666 11.9667 1.46666 12.2083 1.225C12.45 0.98333 12.85 0.98333 13.0917 1.225L16.1167 4.25C16.3583 4.49166 16.3583 4.89166 16.1167 5.13333C16 5.25 15.8333 5.31666 15.675 5.31666Z'
                    fill='#F46D3B'
                  />
                  <path
                    d='M16.8417 8.83333C16.7833 8.83333 16.725 8.83333 16.6667 8.83333H16.475H3.33332C2.74999 8.84167 2.08332 8.84167 1.59999 8.35833C1.21666 7.98333 1.04166 7.4 1.04166 6.54167C1.04166 4.25 2.71666 4.25 3.51666 4.25H16.4833C17.2833 4.25 18.9583 4.25 18.9583 6.54167C18.9583 7.40833 18.7833 7.98333 18.4 8.35833C17.9667 8.79167 17.3833 8.83333 16.8417 8.83333ZM3.51666 7.58333H16.675C17.05 7.59167 17.4 7.59167 17.5167 7.475C17.575 7.41667 17.7 7.21667 17.7 6.54167C17.7 5.6 17.4667 5.5 16.475 5.5H3.51666C2.52499 5.5 2.29166 5.6 2.29166 6.54167C2.29166 7.21667 2.42499 7.41667 2.47499 7.475C2.59166 7.58333 2.94999 7.58333 3.31666 7.58333H3.51666Z'
                    fill='#F46D3B'
                  />
                  <path
                    d='M8.13333 15.25C7.79166 15.25 7.50833 14.9667 7.50833 14.625V11.6667C7.50833 11.325 7.79166 11.0417 8.13333 11.0417C8.475 11.0417 8.75833 11.325 8.75833 11.6667V14.625C8.75833 14.975 8.475 15.25 8.13333 15.25Z'
                    fill='#F46D3B'
                  />
                  <path
                    d='M11.9667 15.25C11.625 15.25 11.3417 14.9667 11.3417 14.625V11.6667C11.3417 11.325 11.625 11.0417 11.9667 11.0417C12.3083 11.0417 12.5917 11.325 12.5917 11.6667V14.625C12.5917 14.975 12.3083 15.25 11.9667 15.25Z'
                    fill='#F46D3B'
                  />
                  <path
                    d='M12.4083 18.9583H7.38332C4.39999 18.9583 3.73332 17.1833 3.47499 15.6417L2.29999 8.43333C2.24166 8.09167 2.47499 7.775 2.81666 7.71667C3.15832 7.65833 3.47499 7.89167 3.53332 8.23333L4.70832 15.4333C4.94999 16.9083 5.44999 17.7083 7.38332 17.7083H12.4083C14.55 17.7083 14.7917 16.9583 15.0667 15.5083L16.4667 8.21667C16.5333 7.875 16.8583 7.65 17.2 7.725C17.5417 7.79167 17.7583 8.11667 17.6917 8.45833L16.2917 15.75C15.9667 17.4417 15.425 18.9583 12.4083 18.9583Z'
                    fill='#F46D3B'
                  />
                </svg>
              </button>
              <button
                className={styles.checkOutBtn}
                onClick={() => navigate('/checkout')}
              >
                CHECKOUT
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M16.1833 9.79166H13.3333C12.9916 9.79166 12.7083 9.50833 12.7083 9.16666V3.34166C12.7083 2.725 12.95 2.15 13.3833 1.71666C13.8166 1.28333 14.3917 1.04166 15.0083 1.04166H15.0167C16.0583 1.05 17.0416 1.45833 17.7916 2.2C18.5416 2.95833 18.95 3.95833 18.95 5V7.01666C18.9583 8.675 17.8416 9.79166 16.1833 9.79166ZM13.9583 8.54166H16.1833C17.15 8.54166 17.7083 7.98333 17.7083 7.01666V5C17.7083 4.28333 17.425 3.6 16.9166 3.08333C16.4083 2.58333 15.7333 2.3 15.0167 2.29166C15.0167 2.29166 15.0167 2.29166 15.0083 2.29166C14.7333 2.29166 14.4666 2.4 14.2666 2.6C14.0666 2.8 13.9583 3.05833 13.9583 3.34166V8.54166Z'
                    fill='#F46D3B'
                  />
                  <path
                    d='M7.4998 19.4417C7.10813 19.4417 6.74147 19.2917 6.46647 19.0083L5.08311 17.6167C5.00811 17.5417 4.89148 17.5333 4.80815 17.6L3.38313 18.6667C2.94146 19 2.35811 19.0583 1.85811 18.8083C1.35811 18.5583 1.0498 18.0583 1.0498 17.5V5C1.0498 2.48333 2.49147 1.04166 5.00814 1.04166H15.0081C15.3498 1.04166 15.6331 1.325 15.6331 1.66666C15.6331 2.00833 15.3498 2.29166 15.0081 2.29166C14.4331 2.29166 13.9665 2.75833 13.9665 3.33333V17.5C13.9665 18.0583 13.6581 18.5583 13.1581 18.8083C12.6664 19.0583 12.0748 19 11.6331 18.6667L10.2081 17.6C10.1248 17.5333 10.0081 17.55 9.94146 17.6167L8.54146 19.0167C8.25813 19.2917 7.89146 19.4417 7.4998 19.4417ZM4.92477 16.3083C5.30811 16.3083 5.68311 16.45 5.96644 16.7417L7.3498 18.1333C7.3998 18.1833 7.46646 18.1917 7.4998 18.1917C7.53313 18.1917 7.59979 18.1833 7.64979 18.1333L9.04978 16.7333C9.56645 16.2167 10.3832 16.1667 10.9581 16.6083L12.3748 17.6667C12.4664 17.7333 12.5498 17.7083 12.5915 17.6833C12.6331 17.6583 12.7081 17.6083 12.7081 17.5V3.33333C12.7081 2.95833 12.7998 2.6 12.9581 2.29166H4.9998C3.1498 2.29166 2.29146 3.15 2.29146 5V17.5C2.29146 17.6167 2.36648 17.6667 2.40814 17.6917C2.45814 17.7167 2.54148 17.7333 2.62482 17.6667L4.04978 16.6C4.30812 16.4083 4.61644 16.3083 4.92477 16.3083Z'
                    fill='#F46D3B'
                  />
                  <path
                    d='M10 8.125H5C4.65833 8.125 4.375 7.84167 4.375 7.5C4.375 7.15833 4.65833 6.875 5 6.875H10C10.3417 6.875 10.625 7.15833 10.625 7.5C10.625 7.84167 10.3417 8.125 10 8.125Z'
                    fill='#F46D3B'
                  />
                  <path
                    d='M9.375 11.4583H5.625C5.28333 11.4583 5 11.175 5 10.8333C5 10.4917 5.28333 10.2083 5.625 10.2083H9.375C9.71667 10.2083 10 10.4917 10 10.8333C10 11.175 9.71667 11.4583 9.375 11.4583Z'
                    fill='#F46D3B'
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CartNav;
