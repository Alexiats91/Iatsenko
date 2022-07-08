/* -------------------
* React Components
* ----------------- */
import { Component } from "react";

/* -------------------
* Custom Components
* ----------------- */
import Form from "./components/Form";
import Info from "./components/Info";
import Weather from "./components/Weather";

/* -------------------
* Styled Components
* (global styles)
* ----------------- */
import GlobalStyle, { Main, Wrapper } from "./globalStyled";

/* -------------------
* Weather API key
* ----------------- */
const API_KEY = 'b274273cf180988f5a66dd3f67c8af89';

/* -------------------
* Component App
* ----------------- */
class App extends Component {
  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    speed: undefined,
    sunrise: undefined,
    sunset: undefined,
    error: undefined
  };

  gettingWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ API_KEY }&units=metric`);
    const data = await api_url.json();

    if( city && data.cod === 200 ) {
      const time = ms => {
        let date = new Date(ms * 1000);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        return hours + ':' + minutes + ':' + seconds;
      }

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        speed: data.wind.speed,
        sunrise: time(data.sys.sunrise),
        sunset: time(data.sys.sunset),
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        speed: undefined,
        sunrise: undefined,
        sunset: undefined,
        error: 'Введіть назву міста'
      });
    }
  };

  render() {
    return <>
        { /*Global Styles*/ }
        <GlobalStyle />

        { /*App Layout*/ }
        <Wrapper className={
          (this.state.error === undefined) ?
          ((this.state.temp < 10) ? 'cold' : '') :
          'error'
        }>
          <Main>
            <Form weatherMethod={ this.gettingWeather } />
            <Info />
            <Weather
                temp = { (this.state.temp) }
                city = { this.state.city }
                country = { this.state.country }
                speed = { this.state.speed }
                sunrise = { this.state.sunrise }
                sunset = { this.state.sunset }
                error = { this.state.error }
            />
          </Main>
        </Wrapper>
    </>;
  };
}
export default App;
