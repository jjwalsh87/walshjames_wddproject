import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

 class Footer extends Component {
    render() {
        return (
            <div className='container-fluid' style={{backgroundColor:'#506C2F',width:'100%', height:'100%'}}>
            <div className='row  align-items-center pt-5'>
                <div className='col ' style={{height:'300px'}}>
                    <h3>Signup for our newsletter</h3>
                    <hr/>
                    <Form >
                    <Form.Control type="email" placeholder="Enter email" className='form-control'/> 
                    <Button variant='primary' type='submit'>Submit</Button> 
                    </Form>
                </div>
                <div className='col' style={{height:'300px'}}>
                    <h3>Contact us</h3>
                    <hr/>
                    <a href='#'>info@adoptopia.com</a>
                   <span className='fa-phone-square'></span> <p>555-555-5555</p>
                </div>
                <div className='col' style={{height:'300px'}}>
                    <h3>About</h3>
                    <hr/>
                    <p>Irure sit veniam do fugiat deserunt ea. Consectetur consequat dolor occaecat enim quis nisi nulla nisi ea duis laboris id. Et esse ipsum duis tempor dolor Lorem dolor fugiat magna occaecat nisi et ea veniam. Anim quis laborum pariatur anim nulla enim amet mollit.</p>
                </div>
                <div style={{backgroundColor:'#000', width:'100%',height:40}}></div>
            </div>
            
        </div>
        )
    }
}

export default Footer


