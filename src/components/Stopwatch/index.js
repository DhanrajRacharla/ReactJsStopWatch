import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    timerMinutes: 0,
    timerSeconds: 0,
  }

  setTime = () => {
    const {timerSeconds} = this.state
    if (timerSeconds === 59) {
      this.setState(prevState => ({
        timerSeconds: 0,
        timerMinutes: prevState.timerMinutes + 1,
      }))
    } else {
      this.setState(prevState => ({timerSeconds: prevState.timerSeconds + 1}))
    }
  }

  startTimer = () => {
    this.intervalId = setInterval(this.setTime, 1000)
  }

  stopTimer = () => {
    clearInterval(this.intervalId)
  }

  resetTimer = () => {
    clearInterval(this.intervalId)
    this.setState({timerMinutes: 0, timerSeconds: 0})
  }

  render() {
    const {timerSeconds, timerMinutes} = this.state

    const seconds = timerSeconds <= 9 ? `0${timerSeconds}` : timerSeconds
    const minutes = timerMinutes <= 9 ? `0${timerMinutes}` : timerMinutes

    return (
      <div className="main-container">
        <div className="stop-watch-background">
          <div className="card-container">
            <h1 className="heading">Stopwatch</h1>
            <div className="white-card">
              <div className="timer-image-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                  alt="stopwatch"
                />
                <p>Timer</p>
              </div>
              <h1 className="timer">{`${minutes}:${seconds}`}</h1>
              <div className="button-container">
                <button
                  onClick={this.startTimer}
                  type="button"
                  className="button green-button"
                >
                  Start
                </button>
                <button
                  onClick={this.stopTimer}
                  type="button"
                  className="button red-button"
                >
                  Stop
                </button>
                <button
                  onClick={this.resetTimer}
                  type="button"
                  className="button yellow-button"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
