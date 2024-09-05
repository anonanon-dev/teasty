import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cart from '../components/cart/Cart';
import { useEffect } from 'react';

function CartPage() {
  const { isAuthenticated } = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  return <div>{isAuthenticated && <Cart />}</div>;
}

export default CartPage;
