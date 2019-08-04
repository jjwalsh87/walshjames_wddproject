import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import DogHead from '../../imgs/doghead.jpg';
import Media from 'react-bootstrap/Media';

class CardsTemp extends Component {
	render() {
		return (
			<Card style={styles.root} className='card'>
				<Image
					src={DogHead}
					style={styles.cardItemImagePlace}
					className='img-fluid'
				/>
				<Card style={styles.bodyContent}>
					<Card.Title style={styles.titleStyle}>Title goes here</Card.Title>
					<Card.Subtitle>Subtitle here</Card.Subtitle>
				</Card>

				<Card>
					<p style={styles.bodyText}>
						Ullamco ex eu ullamco esse laboris eiusmod consequat Lorem veniam
						labore. Enim fugiat sit in sunt et ad commodo in adipisicing
						pariatur eiusmod Lorem. Anim consequat ea ullamco mollit elit labore
						ex amet eu est nisi duis do. Tempor incididunt veniam veniam
						reprehenderit consectetur nostrud id est dolor cillum. Sit ad aliqua
						est amet esse. Mollit reprehenderit ut proident sit do non non elit
						et sit magna fugiat laborum. Dolor qui magna incididunt sunt velit
						est tempor veniam occaecat consectetur.
					</p>
				</Card>
				<Card.Body
					style={styles.actionBody}
					className='row justify-content-center'>
					<Card.Link href='#' style={styles.actionButton1} className='col-md-4'>
						
							ACTION 1
						
					</Card.Link>
					<Card.Link href='#' style={styles.actionButton2} className='col-md-4'>
						
							ACTION 2
						
					</Card.Link>
				</Card.Body>
			</Card>
		);
	}
}

export default CardsTemp;

const styles = {
	root: {
		flex: 1,
		backgroundColor: '',
		maxWidth:'20rem',
		flexWrap: 'nowrap',
		elevation: 3,
		borderRadius: 2,
		borderColor: '#CCC',
		borderWidth: 1,
		shadowOffset: {
			height: 2,
			width: -2
		},
		shadowColor: '#000',
		shadowOpacity: 0.1,
		shadowRadius: 1.5,
		overflow: 'hidden'
	},
	cardItemImagePlace: {
		flex: 1,
		backgroundColor: '#ccc',
		maxHeight: 210
	},
	bodyContent: {
		justifyContent: 'center',
		padding: 16,
		paddingTop: 24
	},
	titleStyle: {
		color: '#000',
		paddingBottom: 12,
		fontSize: 24,
		fontFamily: 'roboto'
	},
	subtitleStyle: {
		color: '#000',
		opacity: 0.5,
		fontSize: 14,
		fontFamily: 'roboto',
		lineHeight: 16
	},
	actionBody: {
		flexDirection: 'row',
		padding: 8
	},
	actionButton1: {
		height: 36,
		padding: 8
	},
	actionText1: {
		color: '#000',
		opacity: 0.9,
		fontSize: 14
	},
	actionButton2: {
		height: 36,
		padding: 8
	},
	actionText2: {
		color: '#000',
		opacity: 0.9,
		fontSize: 14
	},
	actionButton3: {
		height: 36,
		position: 'absolute',
		right: 8,
		bottom: 12,
		padding: 8
	},
	iconStyle: {
		fontSize: 24,
		color: '#000',
		opacity: 0.7
	},
	body: {
		padding: 5,
		paddingTop: 8
	},
	bodyText: {
		color: '#424242',
		fontSize: 14,
    lineHeight: 2,
    padding: 16
	}
};
