import React, { Component } from 'react';
import Projects from './Components/Projects';
//import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount() {
    this.setState({
      projects: [
        {
           title: 'Social Media',
           category: 'Marketing'
        },
        {
          title: 'Website',
          category: 'Web development'
        },
        {
          title: 'Mobile Apps',
          category: 'Software Development'
        }
      ]
    });
  }

  render() {
    return (
      <div className="container">        
        <h2>Welcome to React</h2>
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
