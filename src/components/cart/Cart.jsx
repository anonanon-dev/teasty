import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from '../../Authentication/userSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Animated } from 'react-animated-css';
import styles from './cart.module.scss';

function Cart() {
  const { cartItems, discount } = useSelector((store) => store.user.user.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [coupon, setCoupon] = useState('');
  const subTotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  //   const {cart} = user

  //   const user = useSelector((state) => state.user.user);

  //   if (!user || !user.cart) {
  //     return <div>No cart available. Please log in or add items to your cart.</div>;
  //   }

  //   const cartItems = user.cart.cartItems || [];
  //   const discount = user.cart.discount || 0;

  //   const subTotal = cartItems.reduce(
  //     (acc, item) => acc + item.price * item.quantity,
  //     0
  //   );

  function handleDelete(id) {
    dispatch(removeFromCart(id));
  }
  function handleIncrease(id) {
    dispatch(increaseQuantity(id));
  }
  function handleDecrease(id) {
    dispatch(decreaseQuantity(id));
  }

  return (
    <div>
      <Animated
        animationIn='bounceInLeft'
        animationOut='fadeOut'
        isVisible={true}
      >
        <div className={styles.signupheading}>
          <svg
            width='35'
            height='35'
            viewBox='0 0 35 35'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7.56862 9.30417C7.29154 9.30417 6.99987 9.18751 6.7957 8.98334C6.37279 8.56042 6.37279 7.86042 6.7957 7.43751L12.0895 2.14376C12.5124 1.72084 13.2124 1.72084 13.6353 2.14376C14.0582 2.56667 14.0582 3.26667 13.6353 3.68959L8.34154 8.98334C8.12279 9.18751 7.8457 9.30417 7.56862 9.30417Z'
              fill='white'
            />
            <path
              d='M27.4312 9.30417C27.1541 9.30417 26.8771 9.20209 26.6583 8.98334L21.3646 3.68959C20.9416 3.26667 20.9416 2.56667 21.3646 2.14376C21.7875 1.72084 22.4875 1.72084 22.9104 2.14376L28.2041 7.43751C28.6271 7.86042 28.6271 8.56042 28.2041 8.98334C28 9.18751 27.7083 9.30417 27.4312 9.30417Z'
              fill='white'
            />
            <path
              d='M29.4728 15.4583C29.3707 15.4583 29.2686 15.4583 29.1665 15.4583H28.8311H5.83317C4.81234 15.4729 3.64567 15.4729 2.79984 14.6271C2.129 13.9708 1.82275 12.95 1.82275 11.4479C1.82275 7.4375 4.754 7.4375 6.154 7.4375H28.8457C30.2457 7.4375 33.1769 7.4375 33.1769 11.4479C33.1769 12.9646 32.8707 13.9708 32.1998 14.6271C31.4415 15.3854 30.4207 15.4583 29.4728 15.4583ZM6.154 13.2708H29.1811C29.8373 13.2854 30.4498 13.2854 30.654 13.0813C30.7561 12.9792 30.9748 12.6292 30.9748 11.4479C30.9748 9.8 30.5665 9.625 28.8311 9.625H6.154C4.41859 9.625 4.01025 9.8 4.01025 11.4479C4.01025 12.6292 4.24359 12.9792 4.33109 13.0813C4.53525 13.2708 5.16234 13.2708 5.804 13.2708H6.154Z'
              fill='white'
            />
            <path
              d='M14.2334 26.6875C13.6355 26.6875 13.1396 26.1917 13.1396 25.5937V20.4167C13.1396 19.8187 13.6355 19.3229 14.2334 19.3229C14.8313 19.3229 15.3271 19.8187 15.3271 20.4167V25.5937C15.3271 26.2062 14.8313 26.6875 14.2334 26.6875Z'
              fill='white'
            />
            <path
              d='M20.9419 26.6875C20.344 26.6875 19.8481 26.1917 19.8481 25.5937V20.4167C19.8481 19.8187 20.344 19.3229 20.9419 19.3229C21.5398 19.3229 22.0356 19.8187 22.0356 20.4167V25.5937C22.0356 26.2062 21.5398 26.6875 20.9419 26.6875Z'
              fill='white'
            />
            <path
              d='M21.7145 33.1771H12.9208C7.69993 33.1771 6.53326 30.0708 6.08118 27.3729L4.02493 14.7583C3.92284 14.1604 4.33118 13.6063 4.92909 13.5042C5.52701 13.4021 6.08118 13.8104 6.18326 14.4083L8.23951 27.0083C8.66243 29.5896 9.53743 30.9896 12.9208 30.9896H21.7145C25.4624 30.9896 25.8853 29.6771 26.3666 27.1396L28.8166 14.3792C28.9333 13.7813 29.502 13.3875 30.0999 13.5188C30.6978 13.6354 31.077 14.2042 30.9603 14.8021L28.5103 27.5625C27.9416 30.5229 26.9937 33.1771 21.7145 33.1771Z'
              fill='white'
            />
          </svg>

          <h2>CART</h2>
        </div>
        <div className={styles.tableSection}>
          {cartItems.length === 0 ? (
            <p className={styles.emptyCart}>Nothing in the cart</p>
          ) : (
            <>
              <div className={styles.myTableSection}>
                <table id={styles.myTable}>
                  <thead>
                    <tr>
                      <th colSpan='2'>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Subtotal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item) => (
                      <tr key={item.id}>
                        <td className={styles.deleteBtn}>
                          <button onClick={() => handleDelete(item.id)}>
                            <svg
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M20.9999 6.73C20.9799 6.73 20.9499 6.73 20.9199 6.73C15.6299 6.2 10.3499 6 5.11992 6.53L3.07992 6.73C2.65992 6.77 2.28992 6.47 2.24992 6.05C2.20992 5.63 2.50992 5.27 2.91992 5.23L4.95992 5.03C10.2799 4.49 15.6699 4.7 21.0699 5.23C21.4799 5.27 21.7799 5.64 21.7399 6.05C21.7099 6.44 21.3799 6.73 20.9999 6.73Z'
                                fill='white'
                              />
                              <path
                                d='M8.50001 5.72C8.46001 5.72 8.42001 5.72 8.37001 5.71C7.97001 5.64 7.69001 5.25 7.76001 4.85L7.98001 3.54C8.14001 2.58 8.36001 1.25 10.69 1.25H13.31C15.65 1.25 15.87 2.63 16.02 3.55L16.24 4.85C16.31 5.26 16.03 5.65 15.63 5.71C15.22 5.78 14.83 5.5 14.77 5.1L14.55 3.8C14.41 2.93 14.38 2.76 13.32 2.76H10.7C9.64001 2.76 9.62001 2.9 9.47001 3.79L9.24001 5.09C9.18001 5.46 8.86001 5.72 8.50001 5.72Z'
                                fill='white'
                              />
                              <path
                                d='M15.2099 22.75H8.7899C5.2999 22.75 5.1599 20.82 5.0499 19.26L4.3999 9.19C4.3699 8.78 4.6899 8.42 5.0999 8.39C5.5199 8.37 5.8699 8.68 5.8999 9.09L6.5499 19.16C6.6599 20.68 6.6999 21.25 8.7899 21.25H15.2099C17.3099 21.25 17.3499 20.68 17.4499 19.16L18.0999 9.09C18.1299 8.68 18.4899 8.37 18.8999 8.39C19.3099 8.42 19.6299 8.77 19.5999 9.19L18.9499 19.26C18.8399 20.82 18.6999 22.75 15.2099 22.75Z'
                                fill='white'
                              />
                              <path
                                d='M13.6601 17.25H10.3301C9.92008 17.25 9.58008 16.91 9.58008 16.5C9.58008 16.09 9.92008 15.75 10.3301 15.75H13.6601C14.0701 15.75 14.4101 16.09 14.4101 16.5C14.4101 16.91 14.0701 17.25 13.6601 17.25Z'
                                fill='white'
                              />
                              <path
                                d='M14.5 13.25H9.5C9.09 13.25 8.75 12.91 8.75 12.5C8.75 12.09 9.09 11.75 9.5 11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z'
                                fill='white'
                              />
                            </svg>
                          </button>
                        </td>
                        <td className={styles.mainTD}>
                          <div className={styles.gredientDiv}>
                            <div>
                              <img src={item.img} alt={item.name} />
                            </div>
                            <div>
                              <span className={styles.itemName}>
                                {item.name}
                              </span>
                              <ul>
                                {item.ingredient.map((ing, index) => (
                                  <li key={index}>
                                    <svg
                                      width='7'
                                      height='7'
                                      viewBox='0 0 7 7'
                                      fill='none'
                                      xmlns='http://www.w3.org/2000/svg'
                                    >
                                      <circle
                                        cx='3.5'
                                        cy='3.5'
                                        r='3.5'
                                        fill='#D9B1AF'
                                      />
                                    </svg>
                                    {ing}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </td>
                        <td className={styles.prTD}>
                          <div className={styles.pSpan}>
                            <div className={styles.afterContent}></div>
                            <div className={styles.prSpans}>
                              <span>$</span>
                              <span>{item.price}</span>
                              <span className={styles.pDisc}>
                                {item.discount + item.price}
                              </span>
                            </div>
                            <div className={styles.beforeContent}></div>
                          </div>
                        </td>
                        <td className={styles.quentityTD}>
                          <div className={styles.quentitySpan}>
                            <button onClick={() => handleDecrease(item.id)}>
                              -
                            </button>
                            <span>{item.quantity}</span>
                            <button onClick={() => handleIncrease(item.id)}>
                              +
                            </button>
                          </div>
                        </td>
                        <td className={styles.subTotalTD}>
                          <div className={styles.subTotalSpan}>
                            <div className={styles.afterContent}></div>

                            <div className={styles.sTSpans}>
                              <span>$</span>
                              {item.price * item.quantity}
                            </div>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className={styles.couponSection}>
                <input
                  type='text'
                  placeholder='Have A Coupon?'
                  id='coupon'
                  value={coupon}
                  name='coupon'
                  onChange={(e) => setCoupon(e.target.value)}
                />
                <button>Apply</button>
              </div>
              <div className={styles.stSection}>
                <div className={styles.pageST}>
                  <div className={styles.fchDiv}>subtotal</div>
                  <div className={styles.hrDiv}>
                    <hr />
                  </div>
                  <div className={styles.lchDiv}>{subTotal}</div>
                </div>
                <div className={styles.pageST}>
                  <div className={styles.fchDiv}>coupon code</div>
                  <div className={styles.hrDiv}>
                    <hr />
                  </div>
                  <div className={styles.lchDiv}>{discount}</div>
                </div>
                <div className={styles.pageST}>
                  <div className={styles.fchDiv}>total</div>
                  <div className={styles.hrDiv}>
                    <hr />
                  </div>
                  <div className={styles.lchDiv}>
                    {subTotal - discount <= 0 ? 0 : subTotal - discount}
                  </div>
                </div>
                <button onClick={() => navigate('/checkout')}>
                  PROCCEED TO CHEKOUT
                </button>
              </div>
            </>
          )}
        </div>
      </Animated>
    </div>
  );
}

export default Cart;
