import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Logo from '../../imgs/adoptopiaBgWt.png';

class Header extends Component {
	render() {
		return (
			<div style={styles.logo}>
				<div className='col-4 pb-3 pt-3'>
					<Image src={Logo} alt='NotFound' style={{width:'25vw'}} fluid  />
				</div>
			</div>
		);
	}
}
export default Header;
const styles = {
	logo: {
		backgroundColor: '#2a2922',
		height: '100%',
		
	}
};
