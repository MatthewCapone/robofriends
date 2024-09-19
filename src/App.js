import React from 'react';
import CardList from './cardlist';
import SearchBox from './SearchBox.js';
import Scroll from './Scroll';
import './App.css'

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: ''
        };
        
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}))
            
    }
    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
        console.log(event.target.value);

    }
    render(){
        const filterRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if (!this.state.robots.length) {
            return <h1>Loading...</h1>
        }
        return(
   

            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filterRobots}/>
                </Scroll>
            </div>
        )
    }
}

export default App;