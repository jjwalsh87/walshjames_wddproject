import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Bannerimg from '../../imgs/bannerBG1.png';
import styled from "styled-components";
import {
  CarouselProvider,
  Slider as CarouselSlider,
  Slide,
  DotGroup,
  Carousel, ButtonBack, ButtonNext,Slider
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";



class Banner extends Component {
	render() {
		return (
      <Root style={this.props.style}>
        <CarouselProvider
          index={0}
          totalSlides={3}
		  isPlaying='true'
          naturalSlideWidth={100}
          naturalSlideHeight={25}
          style={{
            height: '200px',
            width: '100%'
          }}
        >
          <CarouselSlider>
            <Slide index={0}>
              <Rect1>
                <Image src={Bannerimg} fluid style={{position:'relative'}}/>
              </Rect1>
			  <Text1>This is some text about something</Text1>
            </Slide>
            <Slide index={1}>
              <Rect1>
                <Image src={Bannerimg} fluid />
				<Text1 className='fluid'>This is some text about something</Text1>
              </Rect1>
            </Slide>
            <Slide index={2}>
              <Rect1>
                <Image src={Bannerimg} fluid />
				<Text1>This is some text about something</Text1>
              </Rect1>
            </Slide>
          </CarouselSlider>
		  <DotGroup style={{textAlign:'center'}}/>

        </CarouselProvider>
      </Root>
		);
	}
}
export default Banner;
const Root = styled.div({
  flex: "1 1 0%",
  display: "flex",
  flexDirection: "column",
  height: "200px",
  width: "100%",
  
  
});
const Rect1 = styled.div({
  flex: "1 1 0%",
  backgroundColor: "#5C6BC0",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  height: "100%",
  
});

const Text1 = styled.span({
  color: "#FFF",
  top: "50.75%",
  left: "3.64%",
  width: '100%',
  height: '100%',
  position: "absolute",
  fontSize: "2em",
  fontWeight: "700"
});


