/* -------------------
* Styles
* ----------------- */
import { Temp, Loc, Wind, Sunrise, Sunset, InfoFlex } from "./styled";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";		// Library
import { faWind } from '@fortawesome/free-solid-svg-icons';


/* -------------------
* Component Weather
* ----------------- */
const Weather = ({
	temp, city,
	country, speed,
	sunrise,
	sunset, error
}) => {
	return <div className="info_weather">
		{ city &&
		<div>
			<InfoFlex>
				<div>
					<Sunrise>Sunrise: { sunrise }</Sunrise>
					<Sunset>Sunset: { sunset }</Sunset>
				</div>
				<Wind>
					<span><FontAwesomeIcon icon={faWind}/></span> { speed } m/s
				</Wind>
			</InfoFlex>
			<Temp>
				{ temp }<sup>o</sup>
			</Temp>
			<Loc>{ city }, { country }</Loc>
		</div>}
		<div className="error">{ error }</div>
	</div>
};
export default Weather;
