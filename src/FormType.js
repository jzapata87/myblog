import React from 'react';




class FormType extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      htmltype: 'header',
      data: '',
    }

  }

  handleChange = (event) => {
      this.setState({htmltype: event.target.value})
  }

  handleDataChange = (event) => {
      this.setState({data: event.target.value})
  }

  handleSubmit = (event) => {

    this.props.addDataToState(this.state.htmltype, this.state.data)
    //alert(" htmltype: " + this.state.htmltype + " data: " +this.state.data)
    event.preventDefault();
  }

  render() {
    return (

        <form onSubmit={this.handleSubmit}>
          <label>
            Content:
            <select value={this.state.htmltype} onChange={this.handleChange}>
              <option value="p">Paragraph</option>
              <option value="header">Header</option>
              <option value="other">other</option>
            </select>
            <input type="text" value={this.state.data} onChange={this.handleDataChange} style={{width: "400px", height: "200px"}} />
          </label>
          <input type="submit" value="Submit" />
        </form>




    );
  }
}

export default FormType;
