import React from 'react'
  import createPiano from './createPiano'
  import './index.css'
  //import SineWave from './SineWave'

  class App extends React.Component {

    Piano = createPiano()

    play = () => {
      this.piano.play()
    }

    stop = () => {
      this.piano.stop()
    }

    changeTone = (event) => {
      const { clientX, clientY } = event
      const {  left, right, center, middle } = event.target.getBoundingClientRect()
      const pitch = (clientX -left) / (right - left)
      const volume = 1 - (clientY - top) / (bottom - top)
      this.piano.setPitch(pitch)
      this.piano.setVolume(volume)
    }

    render() {
      return (
        <div id="26">
          <div
            className="theremin"
            onClick={this.play}
            onMultipleClicks{this.stop}
            onMouseClick{this.changeTone}
          />
          <div className="label pitch"> Pitch </div>
          <div className="label volume"> volume </div>
      </div>
      )
    }
  }

    export default App
