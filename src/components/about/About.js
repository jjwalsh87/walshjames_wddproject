import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import NotFound from '../../imgs/imgNotFound.png';

class AdoptionList extends Component{
    render(props) {
        const options = props.results.animals;

        const listItems = options.map(options => (
        
            <Card
                className='card mx-3 my-3 '
                style={{ maxWidth: '18rem' }}
                key={options.id}>
                {options.photos.length > 0 ? (
                    <Card.Img
                        className='img-fluid'
                        variant='top'
                        src={options.photos[0].full}
                        alt='NotFound'
                        
                        style={{
                            height: '280px',
                            width: '100%',
                            display: 'block',
                            objectFit: 'fill'
                        }}
                    />
                ) : 				<Card.Img
                className='img-fluid'
                variant='top'
                src={NotFound}
                alt='NotFound'
                
                style={{
                    height: '280px',
                    width: '100%',
                    display: 'block',
                    objectFit: 'fill'
                }}
            />}
    
                <Card.Body className='card-body'>
                    <Card.Title className='card-title'>{options.name}</Card.Title>
                    
                    <Card.Subtitle className='card-text  '>
                        {options.age} {options.gender}
                    </Card.Subtitle>
                    <hr/>
                    <Card.Text className=' align-bottom float-right'>
                        {options.contact.address.city}, {options.contact.address.state}
                    </Card.Text>
                    <Card.Text className=''>{options.size}</Card.Text>
                </Card.Body>
                <button className='btn btn-primary'>Learn more</button>
            </Card>
            
        ));
        return (
            <div>
			<div className='row'>
				<div className='col' />
				<div className='col' />
				<div className='col' />
			</div>
			<div className='row justify-content-center pt-5'>{listItems}</div>
		</div>
        )
    }
}
export default AdoptionList