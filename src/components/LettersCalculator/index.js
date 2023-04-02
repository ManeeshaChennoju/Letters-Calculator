import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {enteredText: '', count: 0}

  onChangeText = event => {
    const word = event.target.value
    this.setState({enteredText: word, count: word.length})
  }

  render() {
    const {enteredText, count} = this.state

    return (
      <div className="bg_container">
        <div className="container">
          <div className="calculation_cont">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="count_btn" className="label">
              Enter the phrase
            </label>
            <br />
            <input
              type="text"
              onChange={this.onChangeText}
              value={enteredText}
              placeholder="Enter the phrase"
              className="text_input"
              id="count_btn"
            />
            <br />

            <div>
              <p className="button">No.of letters: {count}</p>
            </div>
          </div>

          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
              alt="letters calculator"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
