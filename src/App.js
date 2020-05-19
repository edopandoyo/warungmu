import React, {Component} from 'react';
import Banner from './Components/Banner';
import './App.css';
import Header from './Components/Header';
import Category from './Components/Category';
import ProdukPilihan from './Components/ProdukPilihan';
import Search from './Components/Search';
import Line from './Components/Line';
import Warung from './Components/Warung';
import PalingLaku from './Components/PalingLaku';

class App extends Component {
  render (){
    return(
      <div className="container">
        <div className="banner">
          <Header/>
          <Search/>
          <Banner/>
          <Line />
          <Category/>
          <Line />
          <ProdukPilihan/>
          <Line/>
          <Warung />
          <Line/>
          <PalingLaku />
          <Line/>
        </div>
      </div>
    )    
  }
}

export default App;