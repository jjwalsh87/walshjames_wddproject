import React, {Component} from 'react'
import Image from 'react-bootstrap/Image'
import Logo from '../../imgs/logoNobg.png'



 class Header extends Component {
  render() {
    return (
        <div style={styles.logo}>
      <div className="col-4 mx-auto pb-3 pt-3">
         <Image src={Logo} fluid/>
      </div>
      </div>
    )
  }
}
export default Header
const styles={
    logo:{
    backgroundColor: "#F3EBDE",
    height: "100%"

    }
}