import React, {Component} from 'react'

class Navigator extends Component {


  

  render(){
    return(
      <div className='Navigator'>
        <button className='NavButton' onClick={() => this.props.downOne()} >{`<Previous`}</button>

      <div className="EditButtons">
      <button className='Editors' onClick={() => this.props.editPerson()} >Edit</button>
      <button className='Editors' onClick={() => this.props.delete(this.props.counter)} >Delete</button>
      <button className='Editors' onClick={() => this.props.createNew()} >New</button>
      </div>

        <button className='NavButton' onClick={() => this.props.upOne()} >{`Next>`}</button>
      </div>
    )
  }
}

export default Navigator