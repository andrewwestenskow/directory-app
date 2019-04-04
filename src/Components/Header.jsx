import React, {Component} from 'react'

class Header extends Component {


  render(){
    return(
      <div className="Header">
      <button className='NavButton Home' onClick={() => this.props.reset()}>
        <h2>Home</h2>
      </button>
      </div>
    )
  }
}

export default Header