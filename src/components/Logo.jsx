import { Link } from 'react-router-dom';
import logo2 from '/logo2.png';
function Logo() {
	return (
		<div>
			<Link to='/home'>
				<img src={logo2} />
			</Link>
		</div>
	);
}

export default Logo;
