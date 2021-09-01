import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            target: []
        }
    }

    componentDidMount() {
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    target: data
                })
            })
    }
    //target.name not posting to page.
    render() {
        const assignments = this.state.target.map(person =>  )
        return (
            <div>

                <ol>
                    {this.state.target.name}
                </ol>

            </div>
        )
    }
}


export default App;
