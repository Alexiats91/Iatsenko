/* -------------------
* Styled Components
* ----------------- */
import styled from 'styled-components';

/* -------------------
* Styles
* ----------------- */
export const Temp = styled.div`
  font-size: 75px;
  color: rgba(255, 255, 255);
  text-shadow: 0 0 7px rgba(0 0 0 / 0.5);
  text-align: center;
  font-weight: bold;
  padding-top: 30px;
  
  sup {
  	font-size: 50px;
  }
`;
export const Loc = styled.div`
	font-size: 30px;
	color: rgba(255, 255, 255);
  	text-shadow: 0 0 7px rgba(0 0 0 / 0.5);
	text-align: center;
	font-weight: bold; 
	letter-spacing: 2px;
`;
export const Wind = styled.div`
	font-size: 25px;
	color: rgba(0 150 200/ 0.8);
	text-shadow: 0 0 5px rgb(255 255 255);
	text-align: center;
	font-weight: bold;  
	span{
		color: rgba(0 80 255/ 0.7);
	}
`;
export const Sunset = styled.div`
	font-size: 20px;
	color: rgba(0 0 0 / 0.4);
	text-shadow: 0 0 5px rgb(255 255 255);
	text-align: left;
	font-weight: bold; 
`;
export const Sunrise = styled.div`
	font-size: 20px;
	color: rgba(255 255 255);
	text-shadow: 0 0 5px rgb(0 0 0 / 80%);
	text-align: left;
	font-weight: bold; 
`;
export const InfoFlex = styled.div`
	display: -webkit-box;
  	display: -moz-box;
  	display: -ms-flexbox;
  	display: -webkit-flex;
  	display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding-top: 20px;
}
`;