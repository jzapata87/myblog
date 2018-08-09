import React from 'react';




class FormType extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      hide: true,
      submitted: false,
      htmltype: 'h1',
      data: '',
    }
    this.textArea = React.createRef();

  }

  componentDidMount() {
    this.textArea.current.focus()

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
    this.toggleEditField()

  }

  toggleEditField = () => {
    this.setState({hide: !this.state.hide})
  }

  focusTextArea = () => {
    this.toggleEditField()
  }

  render() {


    return (

        <div>
        { this.state.hide ?

          <form onSubmit={this.handleSubmit}>
          <label>
            Content:
            <select value={this.state.htmltype} onChange={this.handleChange}>
              <option value="p">Paragraph</option>
              <option value="h1">Header</option>
              <option value="other">other</option>
            </select>
            <textarea ref={this.textArea} autoFocus={true} value={this.state.data}
              onChange={this.handleDataChange}
              style={{width: "400px", height: "200px"}} />
          </label>
          <input type="submit" value="Submit" />
        </form>

        : (<this.state.htmltype onClick={this.focusTextArea}>{this.state.data}</this.state.htmltype>)
}
</div>




    );
  }
}

export default FormType;
