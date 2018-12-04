import React, { Component } from 'react';
import SingleStudent from './SingleStudent';
import { Route, Link } from 'react-router-dom';

export default class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStudent: {}
    };
  }

  render() {
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Tests</th>
            </tr>
            {this.props.students.map(student => {
              return (
                <tr key={student.id}>
                  <td>{student.fullName}</td>
                  <td>
                    <Link
                      to='/SingleStudent'
                      onClick={() => {
                        this.setState({
                          selectedStudent: student
                        });
                      }}
                    >
                      Details
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Route
          path='/SingleStudent'
          component={SingleStudent}
          {...this.state}
        />
      </div>
    );
  }
}
