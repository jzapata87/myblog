import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FormType from './FormType.js'




class App extends Component {

  state = {
    id: 0,
    sections: [],
    data: [],
  }


  headerFunction = data => {
      return (
        <h1 key={this.state.id}>{data}</h1>
      )
  }

  paragraphFunction = data => {
    return (

      <p key={this.state.id}>{data}</p>
    )
  }

  updateCurrentData = (type, data, id) => {
    console.log(this.state.data)
    console.log(data, 'inside updateCurrentData', ' this is the id ' , id)

    let newState = [...this.state.data];
    console.log('this is the newstate ', newState)
    newState[id] = {[type]: data};

    this.setState({data: newState})
  }

  //Function that returns a <FornType> component
  handleClick = () => {
    this.setState({sections: [...this.state.sections, <FormType key={this.state.id} id={this.state.id} updateCurrentData={this.updateCurrentData} addDataToState={this.addDataToState}/>]})
    this.setState({id: this.state.id + 1})
  }

  // helps in rendering obj/json data to render
  tagFunctionSelector = (key, value) => {
    switch (key) {
      case 'h1':
        return this.headerFunction(value)
      case 'p':
        return this.paragraphFunction(value)
      case 'other':
        return this.paragraphFunction(value)

      default:

    }
  }

  // this is adding data to obj/json so that it may be read in the future
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

        {this.state.sections}
        <h1>Blog View</h1>
        {
          blogItems
        }
      </div>
    );
  }
}

export default App;
