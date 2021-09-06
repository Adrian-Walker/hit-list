import React, { Component } from 'react'

class App extends Component {
    constructor() {
        super()
        this.state = {
            targets: []
        }
    }

    componentDidMount() {
        fetch("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
            .then(response => response.json())
            // .then(data1 => console.log(data1))
            .then(data => {
                this.setState({
                    targets: data
                })
            })
    }

    render() {
        const assignments = this.state.targets.map(target => <li class="listItem" key={target.name}>{target.name}</li>)
        return (
            <div class="hitList">

                <ol>
                    {assignments}
                </ol>

            </div>
        )
    }
}


export default App;
