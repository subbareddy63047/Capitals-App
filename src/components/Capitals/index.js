import {Component} from 'react'

import './index.css'

import Countries from '../Countries'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {country: 'India', text: 'NEW_DELHI'}

  findOut = event => {
    const filterText = countryAndCapitalsList.filter(
      each => each.id === event.target.value.toUpperCase(),
    )
    this.setState({country: filterText[0].country, text: filterText[0].id})
  }

  render() {
    const {country, text} = this.state
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="container">
            <select value={text} className="select" onChange={this.findOut}>
              {countryAndCapitalsList.map(eachCountry => (
                <Countries each={eachCountry} key={eachCountry.id} />
              ))}
            </select>
            <p className="which-country">is capital of which Country?</p>
          </div>
          <p className="country">{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
