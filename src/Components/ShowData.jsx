import React, {Component} from 'react'


class ShowData extends Component {


  render(){

    let moviesDisplay = this.props.movies.map(element => <li key={element}>{element}</li>)

    return(
      <div className='FeaturedPerson'>
        <div className="FeaturedName IndentItems">{this.props.name}</div>
        <div className="FeaturedInfo IndentItems">
          <span className='Important'>From: </span>
          <span>{`${this.props.city}, ${this.props.country}`}</span><br/>
          <span className='Important'>Job Title: </span>
          <span>{`${this.props.title}`}</span><br/>
          <span className='Important'>Employer: </span>
          <span>{`${this.props.employer}`}</span><br/>
        </div>

        <div className="Movies IndentItems">
          <span className='Important'>Favorite Movies:</span>
          <ol className='IndentList'>
            {moviesDisplay}
          </ol>
        </div>

      </div>
    )
  }
}

export default ShowData