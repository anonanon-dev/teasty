import SignUpForm from '../components/SignUpForm';
import styles from './signup.module.scss';

function SignUp() {
  return (
    <>
      <div className={styles.signupheading}>
        <svg
          width='35'
          height='35'
          viewBox='0 0 35 35'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M17.5 29.1667C23.9433 29.1667 29.1667 23.9433 29.1667 17.5C29.1667 11.0567 23.9433 5.83334 17.5 5.83334'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
          />
          <path
            d='M5.83366 17.5H20.417M20.417 17.5L16.042 13.125M20.417 17.5L16.042 21.875'
            stroke='white'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <h2>SIGN UP</h2>
        <SignUpForm />
      </div>
    </>
  );
}

export default SignUp;
