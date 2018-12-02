import React, { Component } from 'react';
import { Student } from '../../db/models/students';
import axios from 'axios';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      students: ['Riley', 'Finn', 'Stella']
    };
  }

  render() {
    return (
      <div id='students'>
        <h2>Students</h2>
        <table>
          {this.state.students.map(student => {
            return <tr key={student}>{student}</tr>;
          })}
        </table>
      </div>
    );
  }
}

export default Main;
