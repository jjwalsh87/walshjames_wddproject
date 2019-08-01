import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import JumImage from '../../imgs/bannerTwo.png';

class JumbotronBan extends Component{
    render() {
        return (
            <div>
                <Image src={JumImage} style={{maxHeight:300, width:'100%'}}/>
            </div>
        )
    }
}
export default JumbotronBan