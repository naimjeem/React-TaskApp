import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';

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

  handleAddProject(project) {
    let projects = this.state.projects;
    projects.push(projects);
    this.setState({ projects: projects })
    console.log(project)
  }

  render() {
    return (
      <div className="container">        
        <h2>React - TaskApp</h2>
        <AddProject addProject={this.handleAddProject.bind(this)} />
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
