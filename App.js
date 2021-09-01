import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            target: {}
        }
    }

    componentDidMount() {
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json/")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    target: data
                })
                //error reads "VM788:1 Uncaught (in promise) SyntaxError: Unexpected token : in JSON at position 3"
            })
    }
    //target.name not posing to page.
    render() {
        return (
            <div>
                {this.state.target.name}
            </div>
        )
    }
}


export default App;
