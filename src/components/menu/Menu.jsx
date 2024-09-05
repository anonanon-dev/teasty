import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  addToFav,
  removeFromFav,
} from '../../Authentication/userSlice';
import { useNavigate } from 'react-router-dom';
import styles from './menu.module.scss';

const fakeMenu = [
  {
    id: 1,
    category: 'burger',
    plates: [
      {
        id: 100,
        img: '/menuImg1.png',
        name: 'Porterhouse Steak',
        price: 10.99,
        discount: 2,
        ingredient: ['1 STEAK', 'BREAD', 'rosemary', 'Garlic', 'potato'],
      },
      {
        id: 101,
        img: '/menuImg1.png',
        name: 'Porterhouse Steak',
        price: 12.99,
        discount: 1,
        ingredient: ['1 STEAK', 'BREAD', 'rosemary', 'Garlic', 'potato'],
      },
      {
        id: 102,
        img: '/menuImg1.png',
        name: 'Porterhouse Steak',
        price: 12.99,
        discount: 1,
        ingredient: ['1 STEAK', 'BREAD', 'rosemary', 'Garlic', 'potato'],
      },
      {
        id: 103,
        img: '/menuImg1.png',
        name: 'Porterhouse Steak',
        price: 12.99,
        discount: 1,
        ingredient: ['1 STEAK', 'BREAD', 'rosemary', 'Garlic', 'potato'],
      },
      {
        id: 104,
        img: '/menuImg1.png',
        name: 'Porterhouse Steak',
        price: 12.99,
        discount: 1,
        ingredient: ['1 STEAK', 'BREAD', 'rosemary', 'Garlic', 'potato'],
      },
      {
        id: 105,
        img: '/menuImg1.png',
        name: 'Porterhouse Steak',
        price: 12.99,
        discount: 1,
        ingredient: ['1 STEAK', 'BREAD', 'rosemary', 'Garlic', 'potato'],
      },
      {
        id: 106,
        img: '/menuImg1.png',
        name: 'Porterhouse Steak',
        price: 12.99,
        discount: 1,
        ingredient: ['1 STEAK', 'BREAD', 'rosemary', 'Garlic', 'potato'],
      },
    ],
  },
  {
    id: 2,
    category: 'pizza',
    plates: [
      {
        id: 107,
        img: '/menuImg1.png',
        name: 'pizza',
        price: 10.99,
        discount: 2,
        ingredient: ['meat', 'onion', 'potato'],
      },
      {
        id: 108,
        img: '/menuImg1.png',
        name: 'pizza',
        price: 12.99,
        discount: 1,
        ingredient: ['meat', 'onion', 'potato'],
      },
      {
        id: 109,
        img: '/menuImg1.png',
        name: 'pizza',
        price: 12.99,
        discount: 1,
        ingredient: ['meat', 'onion', 'potato'],
      },
      {
        id: 110,
        img: '/menuImg1.png',
        name: 'pizza',
        price: 12.99,
        discount: 1,
        ingredient: ['meat', 'onion', 'potato'],
      },
      {
        id: 111,
        img: '/menuImg1.png',
        name: 'pizza',
        price: 12.99,
        discount: 1,
        ingredient: ['meat', 'onion', 'potato'],
      },
      {
        id: 112,
        img: '/menuImg1.png',
        name: 'pizza',
        price: 12.99,
        discount: 1,
        ingredient: ['meat', 'onion', 'potato'],
      },
      {
        id: 113,
        img: '/menuImg1.png',
        name: 'pizza',
        price: 12.99,
        discount: 1,
        ingredient: ['meat', 'onion', 'potato'],
      },
    ],
  },
  {
    id: 3,
    category: 'steaks',
    plates: [
      {
        id: 100,
        img: '/menuImg1.png',
        name: 'Porterhouse Steak',
        price: 10.99,
        discount: 2,
        ingredient: ['1 STEAK', 'BREAD', 'rosemary', 'Garlic', 'potato'],
      },
      {
        id: 101,
        img: '/menuImg1.png',
        name: 'Porterhouse Steak',
        price: 12.99,
        discount: 1,
        ingredient: ['1 STEAK', 'BREAD', 'rosemary', 'Garlic', 'potato'],
      },
      {
        id: 102,
        img: '/menuImg1.png',
        name: 'Porterhouse Steak',
        price: 12.99,
        discount: 1,
        ingredient: ['1 STEAK', 'BREAD', 'rosemary', 'Garlic', 'potato'],
      },
      {
        id: 103,
        img: '/menuImg1.png',
        name: 'Porterhouse Steak',
        price: 12.99,
        discount: 1,
        ingredient: ['1 STEAK', 'BREAD', 'rosemary', 'Garlic', 'potato'],
      },
      {
        id: 104,
        img: '/menuImg1.png',
        name: 'Porterhouse Steak',
        price: 12.99,
        discount: 1,
        ingredient: ['1 STEAK', 'BREAD', 'rosemary', 'Garlic', 'potato'],
      },
      {
        id: 105,
        img: '/menuImg1.png',
        name: 'Porterhouse Steak',
        price: 12.99,
        discount: 1,
        ingredient: ['1 STEAK', 'BREAD', 'rosemary', 'Garlic', 'potato'],
      },
      {
        id: 106,
        img: '/menuImg1.png',
        name: 'Porterhouse Steak',
        price: 12.99,
        discount: 1,
        ingredient: ['1 STEAK', 'BREAD', 'rosemary', 'Garlic', 'potato'],
      },
    ],
  },
  {
    id: 4,
    category: 'fried checken',
    plates: [],
  },
  {
    id: 5,
    category: 'grilled cheken',
    plates: [],
  },
];
function Menu() {
  const menu = fakeMenu;
  const navigate = useNavigate();
  const [currentCat, setCurrentCat] = useState(3);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const currentCategory = menu.find((cat) => cat.id === currentCat);

  function handleAddToCart(plat) {
    const cartItem = {
      id: plat.id,
      name: plat.name,
      img: plat.img,
      price: plat.price,
      discount: plat.discount,
      quantity: 1,
      ingredient: plat.ingredient,
    };
    dispatch(addToCart(cartItem));
  }
  function handleToggleFavorite(plat) {
    const isFavorite = user?.favourites.some((fav) => fav.id === plat.id);
    if (isFavorite) {
      dispatch(removeFromFav(plat.id));
    } else {
      dispatch(addToFav(plat));
    }
  }
  const handleCategoryClick = (id) => {
    setCurrentCat(id);
    navigate(`/category/${id}`);
  };
  return (
    <div id='menuSection' className={styles.menuSection}>
      <div className='container'>
        <div className={styles.signupheading}>
          <h2>our menu</h2>
          <p>
            Lorem ipsum dolor sit amet, consec adipiscing, ipsum dolor sit amet,
            consec adipiscing.
          </p>
        </div>
        {menu.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setCurrentCat(cat.id)}
            className={`${styles.catBtn} ${
              currentCat === cat.id ? styles.catBtnActive : ''
            }`}
          >
            {cat.category}
          </button>
        ))}
        <>
          <ul className={styles.menuUl}>
            {currentCategory?.plates.map((plat) => (
              <li className={styles.mainLI} key={plat.id}>
                <>
                  <div className='flex flex-col md:grid md:grid-cols-8  mx-auto items-center'>
                    <div className='col-span-2'>
                      <img src={plat.img} alt={plat.name} />
                    </div>
                    <div className='col-span-3'>
                      <span className={styles.itemName}>{plat.name}</span>
                      <div className={styles.gredientDiv}>
                        <ul>
                          {plat.ingredient.map((ing, index) => (
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
                    <div className='col-span-1'>
                      <span className={styles.fullP}>{plat.price}</span>
                      <span className={styles.descP}>
                        {plat.price - plat.discount}
                      </span>
                    </div>
                    <div className='col-span-1'>
                      <button onClick={() => handleToggleFavorite(plat)}>
                        {user?.favourites.some((fav) => fav.id === plat.id) ? (
                          <>
                            <svg
                              className={styles.favActionSvg}
                              width='20'
                              height='18'
                              viewBox='0 0 20 18'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M0 6.1371C0 11 4.01943 13.5914 6.96173 15.9109C8 16.7294 9 17.5 10 17.5C11 17.5 12 16.7294 13.0383 15.9109C15.9806 13.5914 20 11 20 6.1371C20 1.27416 14.4998 -2.17454 10 2.50063C5.50016 -2.17454 0 1.27416 0 6.1371Z'
                                fill='#F46D3B'
                              />
                            </svg>
                          </>
                        ) : (
                          <>
                            <svg
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M8.96173 18.9109L8.49742 19.4999L8.96173 18.9109ZM12 5.50063L11.4596 6.02073C11.601 6.16763 11.7961 6.25063 12 6.25063C12.2039 6.25063 12.399 6.16763 12.5404 6.02073L12 5.50063ZM15.0383 18.9109L14.574 18.3219L15.0383 18.9109ZM9.42605 18.3219C7.91039 17.1271 6.25307 15.9603 4.93829 14.4798C3.64922 13.0282 2.75 11.3345 2.75 9.1371H1.25C1.25 11.8026 2.3605 13.8361 3.81672 15.4758C5.24723 17.0866 7.07077 18.3752 8.49742 19.4999L9.42605 18.3219ZM2.75 9.1371C2.75 6.98623 3.96537 5.18252 5.62436 4.42419C7.23607 3.68748 9.40166 3.88258 11.4596 6.02073L12.5404 4.98053C10.0985 2.44352 7.26409 2.02539 5.00076 3.05996C2.78471 4.07292 1.25 6.42503 1.25 9.1371H2.75ZM8.49742 19.4999C9.00965 19.9037 9.55955 20.3343 10.1168 20.6599C10.6739 20.9854 11.3096 21.25 12 21.25V19.75C11.6904 19.75 11.3261 19.6293 10.8736 19.3648C10.4213 19.1005 9.95208 18.7366 9.42605 18.3219L8.49742 19.4999ZM15.5026 19.4999C16.9292 18.3752 18.7528 17.0866 20.1833 15.4758C21.6395 13.8361 22.75 11.8026 22.75 9.1371H21.25C21.25 11.3345 20.3508 13.0282 19.0617 14.4798C17.7469 15.9603 16.0896 17.1271 14.574 18.3219L15.5026 19.4999ZM22.75 9.1371C22.75 6.42503 21.2153 4.07292 18.9992 3.05996C16.7359 2.02539 13.9015 2.44352 11.4596 4.98053L12.5404 6.02073C14.5983 3.88258 16.7639 3.68748 18.3756 4.42419C20.0346 5.18252 21.25 6.98623 21.25 9.1371H22.75ZM14.574 18.3219C14.0479 18.7366 13.5787 19.1005 13.1264 19.3648C12.6739 19.6293 12.3096 19.75 12 19.75V21.25C12.6904 21.25 13.3261 20.9854 13.8832 20.6599C14.4405 20.3343 14.9903 19.9037 15.5026 19.4999L14.574 18.3219Z'
                                fill='white'
                              />
                            </svg>
                          </>
                        )}
                      </button>
                    </div>
                    <div className='col-span-1 flex flex-col size-full'>
                      <button className={styles.orderNow}>
                        order now
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M11.85 18.025C10.8667 18.025 9.475 17.3333 8.375 14.025L7.775 12.225L5.975 11.625C2.675 10.525 1.98334 9.13333 1.98334 8.15C1.98334 7.175 2.675 5.775 5.975 4.66667L13.05 2.30833C14.8167 1.71666 16.2917 1.89166 17.2 2.79166C18.1083 3.69166 18.2833 5.175 17.6917 6.94167L15.3333 14.0167C14.225 17.3333 12.8333 18.025 11.85 18.025ZM6.36667 5.85833C4.05 6.63333 3.225 7.55 3.225 8.15C3.225 8.75 4.05 9.66667 6.36667 10.4333L8.46667 11.1333C8.65 11.1917 8.8 11.3417 8.85834 11.525L9.55834 13.625C10.325 15.9417 11.25 16.7667 11.85 16.7667C12.45 16.7667 13.3667 15.9417 14.1417 13.625L16.5 6.55C16.925 5.26667 16.85 4.21667 16.3083 3.675C15.7667 3.13333 14.7167 3.06667 13.4417 3.49167L6.36667 5.85833Z'
                            fill='#F46D3B'
                          />
                          <path
                            d='M8.42498 12C8.26665 12 8.10831 11.9417 7.98331 11.8167C7.74165 11.575 7.74165 11.175 7.98331 10.9333L10.9666 7.94167C11.2083 7.7 11.6083 7.7 11.85 7.94167C12.0916 8.18333 12.0916 8.58333 11.85 8.825L8.86665 11.8167C8.74998 11.9417 8.58331 12 8.42498 12Z'
                            fill='#F46D3B'
                          />
                        </svg>
                      </button>
                      <button
                        className={styles.addToCartBtn}
                        onClick={() => handleAddToCart(plat)}
                      >
                        add to cart
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
                            d='M15.675 5.31666C15.5167 5.31666 15.3584 5.25833 15.2334 5.13333L12.2083 2.10833C11.9667 1.86666 11.9667 1.46666 12.2083 1.225C12.45 0.98333 12.85 0.98333 13.0917 1.225L16.1167 4.25C16.3584 4.49166 16.3584 4.89166 16.1167 5.13333C16 5.25 15.8333 5.31666 15.675 5.31666Z'
                            fill='#F46D3B'
                          />
                          <path
                            d='M16.8417 8.83333C16.7834 8.83333 16.725 8.83333 16.6667 8.83333H16.475H3.33335C2.75002 8.84167 2.08335 8.84167 1.60002 8.35833C1.21669 7.98333 1.04169 7.4 1.04169 6.54167C1.04169 4.25 2.71669 4.25 3.51669 4.25H16.4834C17.2834 4.25 18.9584 4.25 18.9584 6.54167C18.9584 7.40833 18.7834 7.98333 18.4 8.35833C17.9667 8.79167 17.3834 8.83333 16.8417 8.83333ZM3.51669 7.58333H16.675C17.05 7.59167 17.4 7.59167 17.5167 7.475C17.575 7.41667 17.7 7.21667 17.7 6.54167C17.7 5.6 17.4667 5.5 16.475 5.5H3.51669C2.52502 5.5 2.29169 5.6 2.29169 6.54167C2.29169 7.21667 2.42502 7.41667 2.47502 7.475C2.59169 7.58333 2.95002 7.58333 3.31669 7.58333H3.51669Z'
                            fill='#F46D3B'
                          />
                          <path
                            d='M8.13336 15.25C7.7917 15.25 7.50836 14.9667 7.50836 14.625V11.6667C7.50836 11.325 7.7917 11.0417 8.13336 11.0417C8.47503 11.0417 8.75836 11.325 8.75836 11.6667V14.625C8.75836 14.975 8.47503 15.25 8.13336 15.25Z'
                            fill='#F46D3B'
                          />
                          <path
                            d='M11.9667 15.25C11.625 15.25 11.3417 14.9667 11.3417 14.625V11.6667C11.3417 11.325 11.625 11.0417 11.9667 11.0417C12.3083 11.0417 12.5917 11.325 12.5917 11.6667V14.625C12.5917 14.975 12.3083 15.25 11.9667 15.25Z'
                            fill='#F46D3B'
                          />
                          <path
                            d='M12.4084 18.9583H7.38335C4.40002 18.9583 3.73335 17.1833 3.47502 15.6417L2.30002 8.43333C2.24169 8.09166 2.47502 7.77499 2.81669 7.71666C3.15835 7.65833 3.47502 7.89166 3.53335 8.23333L4.70835 15.4333C4.95002 16.9083 5.45002 17.7083 7.38335 17.7083H12.4084C14.55 17.7083 14.7917 16.9583 15.0667 15.5083L16.4667 8.21666C16.5334 7.87499 16.8584 7.64999 17.2 7.72499C17.5417 7.79166 17.7584 8.11666 17.6917 8.45833L16.2917 15.75C15.9667 17.4417 15.425 18.9583 12.4084 18.9583Z'
                            fill='#F46D3B'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </>
              </li>
            ))}
          </ul>
          <button className={styles.viewAllBtn} onClick={handleCategoryClick}>
            view all
          </button>
        </>
      </div>
    </div>
  );
}

export default Menu;
