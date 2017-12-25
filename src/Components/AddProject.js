import React, { Component } from 'react';

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {}
    };
  }

  static defaultProps = {
    categories: ['Web Dev', 'Desktop dev', 'Mobile Dev']
  }

  handleSubmit(e) {
    if (this.refs.title.value === '') {
      alert('Title is Required');
    } else {
      this.setState({
        newProject: {
          title: this.refs.title.value,
          category: this.refs.category.value
        }
      }, () => {
        // console.log(this.state)
        this.props.addProject(this.state.newProject);
      });
    }
    e.preventDefault();
  }

  render() {
    let categoryOption = this.props.categories.map(category => {
      return <option key={category} value={category}>{category}</option>
    });

    return (
      <div>
          <h5>Add Projects</h5>      
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group">
              <label htmlFor="">Title</label>
              <input type="text" className="form-control" ref="title" />
            </div>
            <div className="form-group">
              <label htmlFor="">Category</label>
              <select  className="form-control" ref="category">
                {categoryOption}
              </select>
            </div>
            <input type="submit" className="btn btn-primary" value="Submit" />
          </form>
      </div>
    );
  }
}

export default AddProject;
