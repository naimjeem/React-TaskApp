import React, { Component } from 'react';
import ProjectItem from './ProjectItem';

class AddProject extends Component {
  render() {
    return (
      <div className="col-md-6">
          <h2>Add Projects</h2>      
          {projectItems}
      </div>
    );
  }
}

export default AddProject;
