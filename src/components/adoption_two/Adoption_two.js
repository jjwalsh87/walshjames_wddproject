import React, { Component } from 'react';
import AdoptionList from '../adoptionList/AdoptionList'
import Form from 'react-bootstrap/Form';
import { Client } from '@petfinder/petfinder-js';
const client = new Client({
	apiKey: 'uKX6d6UO4fV4VN9ujlSAFSOjCC2zXyG0tZShjTzSTaqhOM4XV2',
	secret: 'hFwZZQVI72cIXOoYPGbqOSCV68qdrtD6pMYpXQ0A'
});

class Adoption_Two extends Component {
	constructor(props) {
		super(props);
		this.state = {
            isHidden: true,
			data: null,
			breeds: null,
			value: null,
			zip: '',
			distance: '',
			results: null,
			
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleZipChange = this.handleZipChange.bind(this);
		this.handleDisChange = this.handleDisChange.bind(this);
	}



	componentWillMount() {
		this.loadData();
	}

	loadData() {
		client.animalData
			.breeds('dog')
			.then(response => this.setState({ breeds: response.data.breeds }))
			.catch(error => {
				console.log(error);
			});
	}
	handleChange(event) {
		this.setState({ value: event.target.value });
	}

	getSearch() {
		client.animal
			.search({
				breed: this.state.value,
				location: this.state.zip,
				distance: this.state.distance
			})
			.then(resp => this.setState({ results: resp.data }))
			.then(() => console.log(this.state.results.animals))
			.catch(error => {
				console.log(error);
			});
    }
    toggleHidden () {
        setTimeout(() => {
            this.setState({
          isHidden: !this.state.isHidden
        }) 
        }, 2000);

      }

	handleSubmit(event) {
        event.preventDefault();
        if (!this.isValid(this.state.zip) ===false ) {
            this.getSearch();
            
		} else {
			alert('Zipcode invalid');
		}

		//alert('you selected ' + this.state.value);
		
	}

	handleZipChange(event) {
		this.setState({ zip: event.target.value });
	}
	handleDisChange(event) {
		this.setState({ distance: event.target.value });
	}
	isValid(sZip) {
		return /^\d{5}(-\d{4})?$/.test(sZip);
    }


	render() {
		if (!this.state.breeds) {
			return <div />;
		}

		let breeds = this.state.breeds;
		let options = breeds.map(breeds => (
			<option key={breeds.name} value={breeds.name}>
				{breeds.name}
			</option>
		));



		return (
			<div>
				<div className='d-flex justify-content-center pt-3' fluid='true'>
					<Form
						className='needs-validation form-inline '
						onSubmit={this.handleSubmit}>
						<div className='form-row'>
							<div>
								<select
									className='custom-select'
									onChange={this.handleDisChange}>
									<option value=''>Select distance</option>
									<option value='50'>50</option>
									<option value='100'>100</option>
									<option value='200'>200</option>
									<option value='300'>300</option>
									<option value='400'>400</option>
									<option value='500'>500</option>
								</select>
							</div>
							<div>
								<select className='custom-select' onChange={this.handleChange} >
									<option value=''>Select breed</option>
									{options}
								</select>
							</div>
							<div>
								<input
									type='text'
									name='zip'
									className='form-control'
									placeholder='Zip code'
									value={this.state.zip}
									onChange={this.handleZipChange}
									required
								/>
							</div>
						</div>
						<div>
							<button className='btn btn-primary' type='submit' onClick={this.toggleHidden.bind(this)}>
								Find Pet
							</button>
						</div>
					</Form>
				</div>
                {!this.state.isHidden && <AdoptionList results={this.state.results} />}
			</div>
		);
	}
}

export default Adoption_Two;
