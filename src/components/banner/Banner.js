import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Bannerimg from '../../imgs/bannerBG1.png';

class Banner extends Component {
	render() {
		return (
			<div>
				<Image src={Bannerimg} fluid />
			</div>
		);
	}
}
export default Banner;
