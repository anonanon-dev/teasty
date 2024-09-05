import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Authentication/userSlice';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from '../pages/signup.module.scss';
import { CiUnlock } from 'react-icons/ci';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import { Animated } from 'react-animated-css';
import { motion } from 'framer-motion';

function LogInForm() {
  const [phone, setPhone] = useState('01012345678');
  const [password, setPassword] = useState('1234');
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((store) => store.user);
  const navigate = useNavigate();
  useEffect(
    function () {
      if (isAuthenticated) {
        navigate('/home', { replace: true });
      }
    },
    [isAuthenticated, navigate]
  );
  const [visablePassword, setVisablePassword] = useState(false);
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const isValiedPassword =
    password === ''
      ? 0
      : password.length <= 3
      ? 1
      : passwordRegex.test(password)
      ? 3
      : 2;

  // functions
  function toggleVisablePassword() {
    setVisablePassword((v) => !v);
  }

  function handelLogin(e) {
    e.preventDefault();
    if (phone && password) dispatch(login({ phone, password }));
    setPhone('');
    setPassword('');
  }

  AOS.init();
  return (
    <div>
      <motion.div
        initial={{ x: '-100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.appForms}>
          <form onSubmit={handelLogin}>
            <label>
              <input
                type='phone'
                id='phone'
                value={phone}
                name='phone'
                required
                placeholder='Phone Number'
                onChange={(e) => setPhone(e.target.value)}
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
            <label>
              <input
                type={visablePassword ? 'text' : 'password'}
                id='password'
                value={password}
                name='password'
                required
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
              />

              {visablePassword ? (
                <CiUnlock
                  className={styles.lockIcon}
                  onClick={toggleVisablePassword}
                />
              ) : (
                <svg
                  onClick={toggleVisablePassword}
                  className={styles.svgPath}
                  width='18'
                  height='18'
                  viewBox='0 0 18 18'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M13.5 8.0625C13.1925 8.0625 12.9375 7.8075 12.9375 7.5V6C12.9375 3.6375 12.27 2.0625 9 2.0625C5.73 2.0625 5.0625 3.6375 5.0625 6V7.5C5.0625 7.8075 4.8075 8.0625 4.5 8.0625C4.1925 8.0625 3.9375 7.8075 3.9375 7.5V6C3.9375 3.825 4.4625 0.9375 9 0.9375C13.5375 0.9375 14.0625 3.825 14.0625 6V7.5C14.0625 7.8075 13.8075 8.0625 13.5 8.0625Z'
                    fill='#979797'
                  />
                  <path
                    d='M9 14.4375C7.6575 14.4375 6.5625 13.3425 6.5625 12C6.5625 10.6575 7.6575 9.5625 9 9.5625C10.3425 9.5625 11.4375 10.6575 11.4375 12C11.4375 13.3425 10.3425 14.4375 9 14.4375ZM9 10.6875C8.28 10.6875 7.6875 11.28 7.6875 12C7.6875 12.72 8.28 13.3125 9 13.3125C9.72 13.3125 10.3125 12.72 10.3125 12C10.3125 11.28 9.72 10.6875 9 10.6875Z'
                    fill='#979797'
                  />
                  <path
                    d='M12.75 17.0625H5.25C1.9425 17.0625 0.9375 16.0575 0.9375 12.75V11.25C0.9375 7.9425 1.9425 6.9375 5.25 6.9375H12.75C16.0575 6.9375 17.0625 7.9425 17.0625 11.25V12.75C17.0625 16.0575 16.0575 17.0625 12.75 17.0625ZM5.25 8.0625C2.565 8.0625 2.0625 8.5725 2.0625 11.25V12.75C2.0625 15.4275 2.565 15.9375 5.25 15.9375H12.75C15.435 15.9375 15.9375 15.4275 15.9375 12.75V11.25C15.9375 8.5725 15.435 8.0625 12.75 8.0625H5.25Z'
                    fill='#979797'
                  />
                </svg>
              )}
              <div className={styles.strongCheck}>
                {isValiedPassword === 1 && (
                  <span
                    className={`${styles.passwordStrength} ${styles.passwordStrength1}`}
                  >
                    - Weak
                  </span>
                )}
                {isValiedPassword === 2 && (
                  <span
                    className={`${styles.passwordStrength} ${styles.passwordStrength2}`}
                  >
                    -- Medium
                  </span>
                )}
                {isValiedPassword === 3 && (
                  <span
                    className={`${styles.passwordStrength} ${styles.passwordStrength3}`}
                  >
                    --- Strong
                  </span>
                )}
              </div>
            </label>
            <div>
              <Link className={styles.forgetPass} to='/forgetpass'>
                Forget Your Password!?
              </Link>
            </div>
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
            >
              <button type='submit'>LOGIN </button>
            </motion.div>
          </form>
          <div className={styles.or}>OR</div>
          <div className={styles.signupwith}>Sign Up With Your Social </div>
          <div className={styles.signupwithmethodes}>
            <div>
              <a href='#'>
                <span>
                  <img src='/Icon.png' />
                </span>
                <span>Continue with Google</span>
              </a>
            </div>
            <div>
              <a href='#'>
                <span>
                  <img src='/image1.png' />
                </span>
                <span>Continue with Google</span>
              </a>
            </div>
          </div>
          <div className={styles.newLogIn}>
            dont have an account ..
            <Link to='/signup'> Sign Up Now</Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default LogInForm;
