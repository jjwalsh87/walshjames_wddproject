import React, { Component } from 'react';
import Corgi from '../../imgs/corgi.jpg';
import Corgi2 from '../../imgs/corgi2.jpg';
import carDog from '../../imgs/carDog.jpg';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class About extends Component {
	render() {
		return (
			<div className='container' style={styles.root}>
				<div className='row'>
					<div className='col-8'>
						<h1>About Adoptopia</h1>
						<img src={Corgi} alt='img' style={{ width: 650 }} className='img-fluid'/>

						<hr />
						<h2>What we do</h2>
						<p>
							Voluptate dolor nisi incididunt cupidatat ullamco dolore minim
							ullamco voluptate sunt Lorem officia ipsum mollit. Exercitation
							culpa ea ad consequat incididunt velit ea incididunt amet
							cupidatat duis minim voluptate esse. Cupidatat Lorem ad tempor
							voluptate eiusmod occaecat in veniam deserunt. Nostrud nulla
							voluptate et exercitation pariatur et. Do deserunt et cillum in
							sit. Minim eu pariatur elit adipisicing exercitation ut pariatur
							irure ullamco enim.
						</p>
						<p>
							Dolore ad et aliqua laborum ullamco irure non eiusmod cillum
							cupidatat do. Do aliquip nostrud id commodo do adipisicing
							excepteur reprehenderit non mollit ea commodo deserunt. Esse ea ex
							duis Lorem commodo reprehenderit ad ullamco. Amet id fugiat
							reprehenderit reprehenderit nostrud nisi. Ipsum fugiat nulla
							laboris exercitation.
						</p>
						<Card className='mb-3'>
							<div className='row'>
								<div className='col-md-4'>
									<Card.Img className='left' src={Corgi} />
								</div>
								<div className='col-md-8'>
									<Card.Title>This is some title</Card.Title>
									<Card.Text>This is some text</Card.Text>

									<Card.Link href='https://en.wikipedia.org/wiki/Pet_adoption'>
										Pet Adoption Wiki
									</Card.Link>
									<Card.Link href='https://theshelterpetproject.org/why-adopt/'>
										Shelter Pet Project
									</Card.Link>
									<Card.Link href='https://www.petakids.com/save-animals/dog-adoption-guide/'>
										PETA
									</Card.Link>
								</div>
							</div>
						</Card>
						<Card className='mb-3'>
							<div className='row'>
								<div className='col-md-4'>
									<Card.Img className='left' src={Corgi2} />
								</div>
								<div className='col-md-8'>
									<Card.Title>This is some title</Card.Title>
									<Card.Text>This is some text</Card.Text>

									<Card.Link href='https://www.fetchpetcare.com/'>
										Fetch
									</Card.Link>
									<Card.Link href='https://www.aspca.org/pet-care'>
										ASPCA
									</Card.Link>
									<Card.Link href='https://www.hillspet.com/pet-care/routine-care/10-responsible-pet-care-tips'>
										HillsPet
									</Card.Link>
								</div>
							</div>
						</Card>
						<Card className='mb-3'>
							<div className='row'>
								<div className='col-md-4'>
									<Card.Img className='left' src={carDog} />
								</div>
								<div className='col-md-8'>
									<Card.Title>This is some title</Card.Title>
									<Card.Text>This is some text</Card.Text>

									<Card.Link href='https://www.pettravel.com/'>
										Pet Travel
									</Card.Link>
									<Card.Link href='https://services.petsmart.com/petshotel'>
										PetSmart Pet Hotels
									</Card.Link>
									<Card.Link href='https://www.rover.com'>
										Rover
									</Card.Link>
								</div>
							</div>
						</Card>
					</div>
                    
                    <div className='ml-3 mt-5 mb-5 '>
                    <hr/>
                        <h4>Sign up for our newsletter to stay up to date</h4>
                        <Form style={{width: 300}}>
							<Form.Control
								type='email'
								placeholder='Enter email'
								className='form-control'
							/>
                            <Form.Group controlId='checkbox'>
                                <Form.Check type='checkbox' label='Agree to receive emails and updates'>

                                </Form.Check>
                            </Form.Group>
							<Button variant='primary' type='submit' className='mt-3 float-right'>
								Submit
							</Button>
						</Form>
                    </div>
					<div className='col-4' />
				</div>
			</div>
		);
	}
}
const styles = {
	root: {
		backgroundColor: '#ffffff'
	}
};
