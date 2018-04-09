import React, { Component } from 'react';
import logo from './neds.png';
//import products from './products.js';
import './App.css';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import injectTapEventPlugin from 'react-tap-event-plugin';


class App extends Component {
  render() {
    return (
      <div className="App">
       <div className="products">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Neds</h1>
          <h1 className="App-intro"> Prices List</h1>
        </header>

        <table style={{margin: "0 auto"}}>
          <tr>
            <th>Products</th>
            <th>Prices</th>
          </tr>
          <tr>
            <td>Tomato</td>
            <td>$1.200</td>
          </tr>
          <tr>
            <td>Pepper</td>
            <td>$1.250</td>
          </tr>
          <tr>
            <td>Broccoli</td>
            <td>$2.000</td>
          </tr>
        </table>
       </div>
      </div>
    );
  }
}

export default App;
