import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    return (
      <div>
          <ul className='list-group'>
              <li className='list-group-item'>
                  <strong>{this.props.project.title}</strong>
                  <p>{this.props.project.category}</p>
              </li>
          </ul>
      </div>
    );
  }
}

export default ProjectItem;
