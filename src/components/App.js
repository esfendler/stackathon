import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import { settingWorldMapData } from '../store'
import {select, selectAll} from 'd3-selection'
import WorldMap from './WorldMap'

class App extends Component {

  componentDidMount(){
    this.props.settingWorldMapData()
  }


  render() {

    return (
      <div className="App">
      <header className="App-header">
        <div>
          World map!
          <WorldMap/>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    )

  };
}

const mapStateToProps = (state)=> {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    settingWorldMapData: function() {
      return dispatch(settingWorldMapData())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
