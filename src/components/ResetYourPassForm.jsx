import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../pages/signup.module.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { Animated } from 'react-animated-css';
import { motion } from 'framer-motion';

function ResetYourPassForm() {
  const [phonee, setPhonee] = useState('');
  const navigate = useNavigate();

  AOS.init();

  return (
    <div>
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.appForms}>
          <div className={styles.phoneSvg}>
            <svg
              width='100'
              height='100'
              viewBox='0 0 100 100'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M75 44.7917C73.2917 44.7917 71.875 43.375 71.875 41.6667V33.3333C71.875 20.2083 68.1667 11.4583 50 11.4583C31.8333 11.4583 28.125 20.2083 28.125 33.3333V41.6667C28.125 43.375 26.7083 44.7917 25 44.7917C23.2917 44.7917 21.875 43.375 21.875 41.6667V33.3333C21.875 21.25 24.7917 5.20833 50 5.20833C75.2083 5.20833 78.125 21.25 78.125 33.3333V41.6667C78.125 43.375 76.7083 44.7917 75 44.7917Z'
                fill='#F46D3B'
              />
              <path
                d='M50.0002 80.2083C42.5418 80.2083 36.4585 74.125 36.4585 66.6667C36.4585 59.2083 42.5418 53.125 50.0002 53.125C57.4585 53.125 63.5418 59.2083 63.5418 66.6667C63.5418 74.125 57.4585 80.2083 50.0002 80.2083ZM50.0002 59.375C46.0002 59.375 42.7085 62.6667 42.7085 66.6667C42.7085 70.6667 46.0002 73.9583 50.0002 73.9583C54.0002 73.9583 57.2918 70.6667 57.2918 66.6667C57.2918 62.6667 54.0002 59.375 50.0002 59.375Z'
                fill='#BD0229'
              />
              <path
                d='M70.8335 94.7917H29.1668C10.7918 94.7917 5.2085 89.2083 5.2085 70.8333V62.5C5.2085 44.125 10.7918 38.5417 29.1668 38.5417H70.8335C89.2085 38.5417 94.7918 44.125 94.7918 62.5V70.8333C94.7918 89.2083 89.2085 94.7917 70.8335 94.7917ZM29.1668 44.7917C14.2502 44.7917 11.4585 47.625 11.4585 62.5V70.8333C11.4585 85.7083 14.2502 88.5417 29.1668 88.5417H70.8335C85.7502 88.5417 88.5418 85.7083 88.5418 70.8333V62.5C88.5418 47.625 85.7502 44.7917 70.8335 44.7917H29.1668Z'
                fill='#F46D3B'
              />
            </svg>
          </div>
          <form>
            <label>
              <input
                className={styles.resetPassInput}
                type='phone'
                id='phone'
                value={phonee}
                name='phone'
                required
                placeholder='Phone Number'
                onChange={(e) => setPhonee(e.target.value)}
              />
              <svg
                width='18'
                height='18'
                viewBox='0 0 18 18'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <circle
                  cx='9'
                  cy='4.5'
                  r='3'
                  stroke='#979797'
                  strokeWidth='1.5'
                />
                <ellipse
                  cx='9'
                  cy='12.75'
                  rx='5.25'
                  ry='3'
                  stroke='#979797'
                  strokeWidth='1.5'
                />
              </svg>
            </label>

            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <button type='submit' onClick={() => navigate('/resetpassrep')}>
                Reset password{' '}
              </button>
            </motion.div>
          </form>

          <div className={styles.newLogIn}>
            Already have an account ..
            <Link to='/login'> Sign In Now</Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ResetYourPassForm;
