import React from 'react'
import axios from 'axios'
import ListResources from './ListResources'

class App extends React.Component {

    state = {
        resources: [],
        users: []
    }

    componentDidMount() {
        axios.get('http://localhost:3001')
        .then(res => {
            console.log(res.data);
            res.data.forEach(function(element) {
                console.log(element);
            })
            this.setState({resources: res.data});
        })
        axios({
            method: 'post',
            url: 'http://localhost:3001/route2',
            data: {
              firstName: 'bengt',
              lastName: 'svensson'
            }
        })
    }

    render() {
        return (
            <div>
                <ListResources resources={this.state.users} />
                <ListResources resources={this.state.resources} />
            </div>
        )
    }

}

export default App