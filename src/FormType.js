import React from 'react';




class FormType extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      submitted: false,
      htmltype: 'h1',
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
    if (this.state.submitted) {

      this.props.updateCurrentData(this.state.htmltype, this.state.data, this.props.id)

      event.preventDefault();
    } else {
      this.props.addDataToState(this.state.htmltype, this.state.data)
      this.setState({submitted: true})
      event.preventDefault();
    }
    event.preventDefault();


  }

  render() {
    return (


        <form onSubmit={this.handleSubmit}>
          <label>
            Content:
            <select value={this.state.htmltype} onChange={this.handleChange}>
              <option value="p">Paragraph</option>
              <option value="h1">Header</option>
              <option value="other">other</option>
            </select>
            <textarea value={this.state.data} onChange={this.handleDataChange} style={{width: "400px", height: "200px"}} />
          </label>
          <input type="submit" value="Submit" />

        </form>




    );
  }
}

export default FormType;
