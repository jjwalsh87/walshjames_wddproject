import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import NotFound from '../../imgs/imgNotFound.png';
import AnimalPage from './AnimalPage';


class AdoptionList extends Component{
	constructor(props) {
		super(props);
		this.state={
			data: this.props.results,
            loc: this.props.city, 
            select:[],
  
        }
     
    }
    
    getSelected=(y)=>{
      this.setState({select:y});
    
    }



    render() {
		

        const options = this.props.results.animals;
        
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
                <Button className='btn btn-primary' onClick={()=>this.getSelected(options)}> <AnimalPage className='modal' show={this.state.isShowing} data={this.state.select}/> Learn more</Button>
            </Card>
            
        ));
// I attempted to create a modal dialog box to display the information for the selected Animal. But i could not figure it out. The data is retrieved and stored to the state. but i could not
//figure out how to create a modal box of a generated component into another component. I would greatly appreciate it if you can help me.

        return (
            <div>

			<div className='row justify-content-center pt-5'>{listItems}</div>
		</div>
        )
    }
}
export default AdoptionList