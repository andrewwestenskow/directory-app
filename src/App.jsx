import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header'
import Display from './Components/Display'
import Navigator from './Components/Navigator'
import NewForm from './Components/NewForm'
import data from './data/data'
import EditForm from './Components/EditForm'

class App extends Component {

  state = {
    data: data,
    counter: 0,
    createPerson: false,
    editPerson: false,
  }

  upOne = () => {
    if (this.state.counter >= 0 && this.state.counter < this.state.data.length -1) {this.setState({counter: this.state.counter +=1})}
  }

  downOne = () => {
    if(this.state.counter >=1 && this.state.counter < this.state.data.length){
    this.setState({counter: this.state.counter -=1})}
  }

  createNewPerson = () => {
    this.setState({createPerson: true})
  }


  removeForm = () => {
    this.setState({createPerson: false, editPerson: false})
  }
  
  
  newPersonObject = (first, last, town, country, title, employer, movie1, movie2, movie3) => {
    let newPerson = {
      city: town,
      country: country,
      employer: employer,
      favoriteMovies: [movie1, movie2, movie3],
      id: this.state.data.length,
      name: {
        first: first,
        last: last
      },
      title: title
    }
    
    this.setState({data: [...this.state.data, newPerson], createPerson: false})
    
  }

  deletePerson = (index) => {
    let newArr = this.state.data
    newArr.splice(index, 1)
    this.setState({data: newArr, counter: 0})
  }

  editPerson = () => {
    this.setState({editPerson: true})
  }

  editPersonObject = (first, last, town, country, title, employer, movie1, movie2, movie3) => {
    let newData = [...this.state.data]
    let keepTrack = this.state.counter
    let newPerson = {
      city: town,
      country: country,
      employer: employer,
      favoriteMovies: [movie1, movie2, movie3],
      id: keepTrack,
      name: {
        first: first,
        last: last
      },
      title: title
    }

    newData.splice(keepTrack,1,newPerson)
    
    this.setState({data: newData, editPerson: false})
  }

  resetCounter = () => {
    this.setState({counter: 0})
  }

  render() {
    
    const createPerson = this.state.createPerson
    const editPerson = this.state.editPerson
    let newForm
    let editForm
    
    if(!createPerson) {
      newForm = null
    } else {
      newForm = <NewForm removeForm={this.removeForm} newPersonObject={this.newPersonObject} />
    }

    if(!editPerson) {
      editForm = null
    } else {
      editForm = <EditForm editPersonObject={this.editPersonObject} counter={this.state.counter} data={this.state.data}removeForm={this.removeForm}  />
    }

    return (
      <div className="App">
        <div className='FormHolder'>
          {newForm}{editForm}
        </div>

        <Header reset={this.resetCounter}/>

        <div className="Holder">

          <Display data={this.state.data} 
          counter={this.state.counter}/>

          <Navigator upOne={this.upOne} 
          downOne={this.downOne} 
          createNew={this.createNewPerson} 
          delete={this.deletePerson} 
          editPerson={this.editPerson} 
          counter={this.state.counter}/>
        
        </div>
      </div>
    );
  }
}

export default App;
