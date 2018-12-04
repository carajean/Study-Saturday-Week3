import React, { Component } from 'react';
import axios from 'axios';
import StudentList from './StudentList';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    this.getStudents();
  }

  async getStudents() {
    console.log('fetching');
    try {
      const { data } = await axios.get('/student');
      this.setState({ students: data });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div>
        <h1>Students</h1>
        <StudentList students={this.state.students} />
      </div>
    );
  }
}
