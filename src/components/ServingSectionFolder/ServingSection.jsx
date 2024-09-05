import styles from './servingSection.module.scss';
function ServingSection() {
  return (
    <>
      <div id='aboutSection' className={styles.ServingSectionDiv}>
        <div className='container'>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className={styles.servingInfo}>
              <h3>Servicing delicious</h3>
              <h3>
                food since
                <span> 12 </span>
              </h3>
              <h3>
                <span>years.</span>
              </h3>
              <div className={styles.mrDiv}>
                <div className='grid grid-cols-3'>
                  <div>
                    <h4>150+</h4>
                    <h5>DAILY ORDER</h5>
                  </div>
                  <div>
                    <h4>150+</h4>
                    <h5>DAILY ORDER</h5>
                  </div>
                  <div>
                    <h4>150+</h4>
                    <h5>DAILY ORDER</h5>
                  </div>
                </div>
              </div>
              <button>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clipPath='url(#clip0_193_6150)'>
                    <path
                      d='M19 15V3C14.184 7.594 13.977 11.319 14 15H19ZM19 15V21H18V18M8 4V21M5 4V7C5 7.79565 5.31607 8.55871 5.87868 9.12132C6.44129 9.68393 7.20435 10 8 10C8.79565 10 9.55871 9.68393 10.1213 9.12132C10.6839 8.55871 11 7.79565 11 7V4'
                      stroke='#F46D3B'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_193_6150'>
                      <rect width='24' height='24' fill='white' />
                    </clipPath>
                  </defs>
                </svg>
                our menu
              </button>
            </div>
            <div className={styles.foodPic}>
              <img src='/Groupmeat.png' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServingSection;
