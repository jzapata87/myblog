import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';




class App extends Component {



  headerFunction = data => {
      return (
        <header>{data}</header>
      )
  }

  paragraphFunction = data => {
    console.log(data, 'inside paragraph function')
    return (

      <p>{data}</p>
    )
  }

  tagFunctionSelector = (key, value) => {
    switch (key) {
      case 'header':
        console.log(this.headerFunction(value))
        return this.headerFunction(value)
      case 'p':
        console.log(value, 'inside function tagselection')
        return this.paragraphFunction(value)

      default:

    }
  }


  render() {

    const myObj = {
      'header': "this is a header",
      'p': "paragraph"
    }

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get startd, edit <code>src/App.js</code> and save to reload.
        </p>

        {
          Object.keys(myObj).map(key => {
            console.log(key, myObj[key], "inside object.key");
            return (this.tagFunctionSelector(key, myObj[key]))
          })
        }
      </div>
    );
  }
}

export default App;
