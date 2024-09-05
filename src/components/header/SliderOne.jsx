import { useState, useEffect } from 'react';
import styles from './slider.module.scss';

const food = [
	{
		desc: 'Lorem ipsum dolor sit amet, consec adipiscing, ipsum dolor sit amet, consec adipiscing consec .',
		img: '/sliderImg1.png',
		title: 'just grill it',
	},
	{
		desc: 'Lorem ipsum dolor sit amet, consec adipiscing, ipsum dolor sit amet, consec adipiscing consec .',
		img: '/sliderImg2.png',
		title: 'out of oven',
	},
	{
		desc: 'Lorem ipsum dolor sit amet, consec adipiscing, ipsum dolor sit amet, consec adipiscing consec .',
		img: '/sliderImg1.png',
		title: 'test two grill',
	},
	{
		desc: 'Lorem ipsum dolor sit amet, consec adipiscing, ipsum dolor sit amet, consec adipiscing consec .',
		img: '/sliderImg2.png',
		title: 'test two pizza',
	},
];

function SliderOne() {
	const [activeIndex, setActiveIndex] = useState(0);
	const slides = food;

	function handleChangeSlides(index) {
		setActiveIndex(index);
	}

	useEffect(() => {
		// if (activeIndex === slides.length - 1) return;

		const timer = setTimeout(() => {
			setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
		}, 5000);

		return () => clearTimeout(timer);
	}, [activeIndex, slides.length]);

	return (
		<div className={styles.sliderContainer}>
			<div className={styles.slidsContainer}>
				{slides.map((slide, index) => (
					<div key={index} className={`${styles.slide} ${activeIndex === index ? styles.activeSlide : ''}`}>
						<div>
							<h3>{slide.title}</h3>
							<p>{slide.desc}</p>
						</div>
						<img src={slide.img} alt={slide.title} className={styles.sliderImg} />
					</div>
				))}
			</div>
			<div className={styles.sliderButtons}>
				{slides.map((_, index) => (
					<span
						key={index}
						className={activeIndex === index ? styles.activeBtn : ''}
						onClick={() => handleChangeSlides(index)}>
						{index + 1}
					</span>
				))}
			</div>
		</div>
	);
}

export default SliderOne;
