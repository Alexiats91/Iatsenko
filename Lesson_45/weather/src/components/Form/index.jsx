/* -------------------
* Styles
* ----------------- */
import {
	FormWrapper,
	Form as FormArea,
	InputText,
	Button
} from "./styled";

/* -------------------
* Font Awesome
* ----------------- */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";		// Library
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'; 	// Free Icons
import { Flex } from "../../globalStyled";

/* -------------------
* Component Form
* ----------------- */
const Form = ({ weatherMethod }) => {
	return <FormWrapper>
		<FormArea onSubmit={ weatherMethod }>
			<Flex style={{ columnGap: '10px' }}>
				<InputText />
				<Button>
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</Button>
			</Flex>
		</FormArea>
	</FormWrapper>;
};
export default Form;
