import React, {Component} from 'react'
import ReactDOM from 'react-dom'

import Heading from './components/heading.jsx'

class Main extends Component{
    render(){
        return(
            <Heading/>
        )
    }
}

ReactDOM.render(<Main/>, document.getElementById("root"))