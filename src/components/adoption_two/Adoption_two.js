import React, { Component } from 'react';
import axios from 'axios'
import AdoptionList from '../adoptionList/AdoptionList';
import Form from 'react-bootstrap/Form';
import { Client } from '@petfinder/petfinder-js';
import CircularProgress from "@material-ui/core/CircularProgress";



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
			address: null,
			distance: '',
			results: null,
			parsed: null
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleZipChange = this.handleZipChange.bind(this);
		this.handleDisChange = this.handleDisChange.bind(this);
	}

	componentWillMount() {
		const breedsData = localStorage.getItem('breedsData') === 'true';
		
		if(breedsData){
			localStorage.getItem(breedsData)
			this.setState({breeds: breedsData})
		}else

		this.loadData();

	}

	loadData() {
		client.animalData
			.breeds('dog')
			.then(response => this.setState({ breeds: response.data.breeds }))
			.then(()=>{if(localStorage.getItem('breedsData')===null){
				localStorage.setItem('breedsData', JSON.stringify(this.state.breeds))
			}})
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
				distance: this.state.distance,
				limit: 100
			})
			.then(resp => this.setState({ results: resp.data, data: resp }))
			

			.catch(error => {
				console.log(error, 'missing data');
			});
			
	}
	toggleActive() {
		if (!this.state.isHidden) {
			this.setState({ isHidden: this.state.isHidden });
		}
	}
	toggleHidden() {
		if (!this.state.isHidden) {
			this.setState({ isHidden: this.state.isHidden });
		} else if (
			!this.isValid(this.state.zip) === false &&
			this.state.distance !== '' &&
			this.state.value !== ''
		) {
			setTimeout(() => {
				this.setState({
					isHidden: !this.state.isHidden
				});
				this.getCity()
				this.reset();
				return(
					        <CircularProgress
          style={{
            width: 22,
            height: 22
          }}
        />
				)
			}, 2000);
		} else {
			
			this.toggleActive();
		}
	}

	handleSubmit(event) {
		event.preventDefault();
		if (
			!this.isValid(this.state.zip) === false &&
			this.state.distance !== '' &&
			this.state.value !== ''
		) {
			this.getSearch();
			this.getCity();
			
			this.toggleActive();
			
			
		} else {
			alert('Missing search inputs');
		}

		//alert('you selected ' + this.state.value);
	}
	getCity(){
		
		axios.get('https://maps.googleapis.com/maps/api/geocode/json?address='+this.state.zip+'&key=AIzaSyA-SBoup2C5ybGCwC66tp9ln9_XMODxxRA')
		.then(resp=>{this.setState({address:resp.data})})
		.catch(err=>{
			console.log(err)
			//console.log(err.resp.data.error)
		}).then(()=>{
			let parsed = []
			if(this.state.address !== null){
				let res = this.state.address
			for(let i=0; i< res.results[0].address_components.length; i++){
				parsed.push(res.results[0].address_components[i].short_name)
				
				
			}
				console.log(parsed)
				this.setState({parsed: parsed})
				
			}else(console.log('nothing'))
		})
		
	
		
	}
	parseData(){
			let parsed = []
		if(this.state.address !== null){
			let res = this.state.address
		for(let i=0; i< res.results[0].address_components.length; i++){
			parsed.push(res.results[0].address_components[i].short_name)
			
			
		}
			console.log(parsed)
			this.setState({parsed: parsed})
			
		}else(console.log('nothing'))
		
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
	reset() {
		this.myFormRef.reset();
	}
	textHeader(){
		const total= this.state.results.pagination.total_count;
		const value= this.state.value;
		const distance= this.state.distance;
		const city = this.state.parsed[1];
		const state= this.state.parsed[2]

		
		return (
			<div>
				<h1 >We found {total} dogs around {city}, {state} </h1>
			</div>
		)
	
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
		
			//console.log(this.state.parsed)
			//console.log(this.state.results)
		return (
			<div className='container-fluid w-100 mt-3'>
				<div className='row justify-content-center'>
					<Form
						className='form-inline needs-validation'
						onSubmit={this.handleSubmit}
						ref={el => (this.myFormRef = el)}>
						<div className='col-xs px-1'>
							<select className='form-control' onChange={this.handleDisChange}>
								<option value=''>Select distance</option>
								<option value='10'>10 mi</option>
								<option value='25'>25 mi</option>
								<option value='50'>50 mi</option>
								<option value='100'>100 mi</option>
								<option value='200'>200 mi</option>
								<option value='300'>300 mi</option>
								<option value='400'>400 mi</option>
								<option value='500'>500 mi</option>
							</select>
						</div>
						<div className='col-xs px-1'>
							<select className='form-control' onChange={this.handleChange}>
								<option value=''>Select breed</option>
								{options}
							</select>
						</div>
						<div className='col-xs px-1'>
							<input
								type='text'
								name='zip'
								className='form-control'
								placeholder='Zip code'
								onChange={this.handleZipChange}
								required
							/>
						</div>

						<div className='col-xs px-1 '>
							<button
								className=' btn btn-primary '
								type='submit'
								onClick={this.toggleHidden.bind(this)}
								// onSubmit={this.toggleActive.bind(this)}
							>
								Find Pet
							</button>
						</div>
					</Form>
				</div>
				<div className='container w-100 mt-5 shadow-lg' style={{ background: '#ffffff' }}>
				{!this.state.isHidden &&  (
							
							this.textHeader()
							
						)}
					
					{!this.state.isHidden &&  (
							
							<AdoptionList results={this.state.results} city={this.state.address} />
						)}

					
				</div>
			</div>
		);
	}
}

export default Adoption_Two;
