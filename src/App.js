import React from 'react';
import { Chart, Cards, CountryPicker } from './Components';
import styles from './App.module.css';
import { fetchData } from './api';
import corona from './images/corona.jpg';

class App extends React.Component {
  state = {
    data: {},
    country: ''
  };

  async componentDidMount() {
    const fetched_Data = await fetchData();
    this.setState({ data: fetched_Data });
  }

  handleCountryChange = async (country) => {
    //fetch the data
    const fetch_Data = await fetchData(country);
    console.log(fetch_Data);
    this.setState({ data: fetch_Data, country: country });
    //set the state
  };
  render() {
    const { data, country } = this.state;
    return (
      <div className={styles.container}>
        <img className={styles.image} src={corona} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
