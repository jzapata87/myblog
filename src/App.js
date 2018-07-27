import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormType from './FormType.js'




class App extends Component {

  state = {
    sections: [],
    data: [
      {'header': "this is a header"},
      {'p': "paragraph"}
    ]
  }

  headerFunction = data => {
      return (
        <h1>{data}</h1>
      )
  }

  paragraphFunction = data => {
    return (

      <p>{data}</p>
    )
  }

  //Function that returns a <FornType> component
  handleClick = () => {
    this.setState({sections: [...this.state.sections, <FormType addDataToState={this.addDataToState}/>]})
  }


  tagFunctionSelector = (key, value) => {
    switch (key) {
      case 'header':
        return this.headerFunction(value)
      case 'p':
        return this.paragraphFunction(value)
      case 'other':
        return this.paragraphFunction(value)

      default:

    }
  }

  addDataToState = (key, value) => {
    console.log(key, value, " inside add datatostate")
    this.setState({data: [...this.state.data, {[key]: value}]})

  }


  render() {
    const blogItems = [];




    this.state.data.forEach(obj => {
      let array = [];
      Object.entries(obj)[0].forEach(item => array.push(item))
      let [key, value] = array;
      console.log('key: ' , key, " value: ", value)
      blogItems.push(this.tagFunctionSelector(key, value))
    })


    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get startd, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.handleClick}>Add More</button>
        <FormType addDataToState={this.addDataToState}/>
        {this.state.sections}
        {
          blogItems
        }
      </div>
    );
  }
}

export default App;
