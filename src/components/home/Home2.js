import React, { Component } from "react";

import CardsTemp from "./CardsTemp";

export default class Home2 extends Component {
  render() {
    return (
      <div style={styles.root} className='container '>
          <div className='row justify-content-around no-gutters'>
        <CardsTemp style={styles.CardsTemp1} className=' shadow-sm' />
        <CardsTemp style={styles.CardsTemp1} className=' shadow-sm'/>
        <CardsTemp style={styles.CardsTemp1} className=' shadow-sm'/>
        </div>
      </div>
    );
  }
}

const styles = ({
  root: {
    flex: 1,
    backgroundColor: "rgb(255,255,255)",
    
  },
  CardsTemp1: {
    width: 359,
    height: 744.06
  },
  CardsTemp2: {
    width: 359,
    height: 744.06
  },
  CardsTemp3: {
    width: 359,
    height: 744.06
  }
});
