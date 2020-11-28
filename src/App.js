import React,{Component} from 'react'
import { Cards, Chart, CountryPicker } from './components';
import { fetchData } from './api';

import CronaImg from "./images/image2.png";

import styles from './App.module.css';
class App extends Component {

  state = {
    data: {},
    country:''
  }
  
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data:fetchedData})
  }

  handleChangeCountry = async (country) => {
    const fetchedData = await fetchData(country);
    
    this.setState({data:fetchedData,country:country});
  }

  render() {
    const {data,country} = this.state;
    return (
      <div className={`container text-center h-100 ${styles.App}`}>
        <img src={CronaImg} className="img-fluid" alt=""/>
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-sm-12">
            <CountryPicker handleChangeCountry={this.handleChangeCountry} />
            <Cards data={ data } />
            <Chart data={data} country={country} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
