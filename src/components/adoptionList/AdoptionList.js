import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'
import NotFound from '../../imgs/imgNotFound.png'


const AdoptionList = props => {
    const options = props.results.animals;
   

	const listItems = options.map(options => (
        
        <Card style={{width:'12rem'}} key={options.id}>
            {options.photos.length > 0 ?( 
            <Card.Img variant="top"  src={options.photos[0].full} alt={NotFound} style={{width:'100%',height:'15vw', objectFit: 'cover'}}/>):null}

            <Card.Body>
                <Card.Title>{options.name}</Card.Title>
                <Card.Subtitle>{options.age}        {options.gender}</Card.Subtitle>
            </Card.Body>
        </Card>
	));
	return (
        <div className = "row">
            
          {listItems}
          
        </div>
	);
};

export default AdoptionList;
