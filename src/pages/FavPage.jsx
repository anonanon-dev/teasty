import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Fav from '../components/fav/Fav';

function FavPage() {
  const { isAuthenticated } = useSelector((store) => store.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  return <div>{isAuthenticated && <Fav />}</div>;
}

export default FavPage;
