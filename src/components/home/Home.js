import React, { Component } from 'react';
import Banner from '../banner/Banner';
import Home2 from './Home2';
import JumbotronBan from './JumbotronBan'


class Home extends Component {
	render() {
		return (
			
			<div className='contain' style={styles.root}>
				<div className='banner '>
					<Banner />
				</div>
			<div>	
				<Home2/>
			</div>
			<hr style={styles.spaceHr}/>
			<div>
				<JumbotronBan/>
			</div>
			

			</div>
				
		);
	}
}
export default Home;
const styles = ({
	root: {
	  
	  backgroundColor: "rgb(255,255,255)",
	  
	},
	spaceHr:{
		marginTop: 100,
		marginBottom: 100,
	}
})