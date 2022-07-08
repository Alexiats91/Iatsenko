/* -------------------
* Styled Components
* ----------------- */
import styled from 'styled-components';

/* -------------------
* Styles
* ----------------- */
export const FormWrapper = styled.div`
  background: rgba(0,0,0,0.7);
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  
  justify-content: center;
  padding: 15px 10px;
  
  -webkit-border-bottom-right-radius: 10px;
  -webkit-border-bottom-left-radius: 10px;
  -moz-border-radius-bottom-right: 10px;
  -moz-border-radius-bottom-left: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;
export const Form = styled.form`
  flex-grow: 1;
`;
export const InputText = styled.input.attrs({
	type: 'text',
	name: 'city',
	placeholder: 'Ваше місто',
})`
  width: 100%;
  border: none;
  color: #333;
  padding: 10px 10px;
  font-size: 26px;
  background-color: rgba(255, 255, 255, 0.7);
  outline: none;

  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
`;
export const Button = styled.button.attrs({
	type: 'submit'
})`
	width: 50px;
	height: 50px;
	border: none;
  	outline: none;
  	cursor: pointer;
  
	-webkit-border-radius: 4px;
	-moz-border-radius: 4px;
	border-radius: 4px;
  
  	svg {
	  font-size: 20px;
	  -webkit-transition: all 0.3s ease-out;
	  -moz-transition: all 0.3s ease-out;
	  -ms-transition: all 0.3s ease-out;
	  -o-transition: all 0.3s ease-out;
	  transition: all 0.3s ease-out;
	}
  
  	&:hover svg {
	  -webkit-transform: scale(1.3);
	  -moz-transform: scale(1.3);
	  -ms-transform: scale(1.3);
	  -o-transform: scale(1.3);
	  transform: scale(1.3);
	}
`;