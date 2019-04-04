import React, {Component} from 'react'

class NewForm extends Component {

  state = {
    name: '',
    last: '',
    town: '',
    country: '',
    title: '',
    employer: '',
    movie1: '',
    movie2: '',
    movie3: '',
    movies: []
  }

  handleFirstName = (text) => {
    this.setState({name: text})
  }
  handleLastName = (text) => {
    this.setState({last: text})
  }
  handleHometown = (text) => {
    this.setState({town: text})
  }
  handleCountry = (text) => {
    this.setState({country: text})
  }
  handleTitle = (text) => {
    this.setState({title: text})
  }
  handleEmployer = (text) => {
    this.setState({employer: text})
  }
  handleMovies1 = (text) => {
    this.setState({movie1: text})
  }
  handleMovies2 = (text) => {
    this.setState({movie2: text})
  }
  handleMovies3 = (text) => {
    this.setState({movie3: text})
  }
  


  render() {
    return(
      <div className="Form">
        <h2>Add New Person:</h2>
        <p>*All forms required</p>
        <span>First Name:</span>
        <input type="text" onChange={e => this.handleFirstName(e.target.value)} />
        <span>Last Name:</span>
        <input type="text" onChange={e=> this.handleLastName(e.target.value)} />
        <span>Hometown:</span>
        <input type="text" onChange={e=> this.handleHometown(e.target.value)} />
        <span>Home Country:</span>
        <input type="text" onChange={e=> this.handleCountry(e.target.value)} />
        <span>Job Title:</span>
        <input type="text" onChange={e=> this.handleTitle(e.target.value)} />
        <span>Employer:</span>
        <input type="text" onChange={e=> this.handleEmployer(e.target.value)} />
        <span>Favorite Movies:</span>
        <input onChange={e=> this.handleMovies1(e.target.value)} type="text"/>
        <input onChange={e=> this.handleMovies2(e.target.value)} type="text"/>
        <input onChange={e=> this.handleMovies3(e.target.value)} type="text"/>
        <button onClick={() => this.props.newPersonObject(this.state.name, this.state.last, this.state.town, this.state.country, this.state.title, this.state.employer, this.state.movie1, this.state.movie2, this.state.movie3)} >SUBMIT</button>
        <button onClick={() => this.props.removeForm()} >Cancel</button>
      </div>
    )
  }
}

export default NewForm