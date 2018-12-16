import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Heading from './components/Header/heading'

class Main extends React.Component {
  render() {
    return (
      <div>
        <Heading />
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('root'))
