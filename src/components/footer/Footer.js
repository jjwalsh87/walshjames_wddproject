import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Footer extends Component {
	render() {
		return (
			<div className='container-fluid' style={styles.body}>
				<div className='row  align-items-center pt-5'>
					<div className='col ' style={styles.div}>
						<h3>Signup for our newsletter</h3>
						<hr />
						<Form>
							<Form.Control
								type='email'
								placeholder='Enter email'
								className='form-control'
							/>{' '}
							<Form.Check
								type='checkbox'
								label='Agree to receive emails and updates'
							/>
							<Button variant='primary' type='submit' className='mt-3'>
								Submit
							</Button>
						</Form>
					</div>
					<div className='col text-left' style={styles.div}>
						<h3>Contact us</h3>

						<Card.Body>
							<Card.Text>
								Email: <Card.Link href='#'>info@adoptopia.com</Card.Link>
							</Card.Text>
							<Card.Text>Phone: 555-555-5555</Card.Text>
						</Card.Body>
					</div>
					<div className='col' style={styles.div}>
						<h3>About</h3>
						<hr />
						<p>
							Irure sit veniam do fugiat deserunt ea. Consectetur consequat
							dolor occaecat enim quis nisi nulla nisi ea duis laboris id. Et
							esse ipsum duis tempor dolor Lorem dolor fugiat magna occaecat
							nisi et ea veniam. Anim quis laborum pariatur anim nulla enim amet
							mollit.
						</p>
					</div>
					<div style={{ backgroundColor: '#000', width: '100%', height: 40 }} />
				</div>
			</div>
		);
	}
}

export default Footer;
const styles = {
	body: {
		backgroundColor: '#506C2F',
		width: '100%',
		height: '100%',
		color: '#f2ebdd'
	},
	div: {
		height: '300px'
	}
};
