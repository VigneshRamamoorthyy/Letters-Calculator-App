import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {
    count: '',
  }

  onChangeInput = event => {
    this.setState({
      count: event.target.value,
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="app-container">
        <div className="letters-calculator-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="calculator-img"
          />
          <div className="content-container">
            <div>
              <label htmlFor="letter">Enter the phrase</label>

              <br />

              <input
                type="text"
                className="input-element"
                placeholder="Enter the phrase"
                id="letter"
                onChange={this.onChangeInput}
              />
            </div>
            <h1 className="title">Calculate the Letters you enter</h1>

            <p type="button" className="no-letters-text">
              No.of letters: {count.length}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
