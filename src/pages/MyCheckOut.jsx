import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Checkout from '../components/checkout/Checkout';
import { useEffect } from 'react';

function MyCheckOut() {
  const { isAuthenticated } = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  return <div>{isAuthenticated && <Checkout />}</div>;
}

export default MyCheckOut;
