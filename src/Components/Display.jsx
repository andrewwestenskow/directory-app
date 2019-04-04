import React, {Component} from 'react'
import ShowData from './ShowData'


class Display extends Component {

  


  render() {

    let toDisplay = this.props.data.filter((element, index) => index === this.props.counter).map((element, index) => <ShowData key={element.id} name={`${element.name.first} ${element.name.last}`} city={element.city} country={element.country} employer={element.employer} movies={element.favoriteMovies} title={element.title} ></ShowData>)

    return(
      <div className='Display'>
        {toDisplay}
        <div className="Counter">{`${this.props.counter+1}/${this.props.data.length}`}</div>
      </div>
    )
  }
}


export default Display