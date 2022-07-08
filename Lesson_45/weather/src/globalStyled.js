/* -------------------
* Styled Components
* ----------------- */
import styled, { createGlobalStyle } from 'styled-components';

/* -------------------
* Images
* ----------------- */
import suny_landscape from './img/suny-bg_landscape.jpg';
import suny_portrait from './img/suny-bg_portrait.jpg';
import cold from './img/cold-bg.jpg';
import error from './img/error-bg.jpg';

/* -------------------
* Global Styles
* ----------------- */
const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;

    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
  }
`;

/* -------------------
* General Styles
* (for App Component)
* ----------------- */
export const Flex = styled.div`
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
`;

export const Wrapper = styled(Flex)`
  height: 100vh;
  flex-direction: column;
  align-items: center;
  
  @media screen and (orientation:portrait){
  	background: url(${ suny_portrait }) no-repeat top center;
  	background-size: cover;
  }
  @media screen and (orientation:landscape){
  	background: url(${ suny_landscape }) no-repeat center center;
  background-size: cover;
  }
  
  &.cold {
    background-image: url(${ cold });
  }
  &.error {
    background-image: url(${ error });
	
	.info_weather {
	  text-align: center;
	  color: #fff;
	}
  }
`;

export const Main = styled.div`
  width: 100%;
`;

export default GlobalStyle;