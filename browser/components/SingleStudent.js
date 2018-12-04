import React, { Component } from 'react';

export default class SingleStudent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { firstName, lastName, fullName, email } = this.props.selectedStudent;
    return (
      <div>
        <h3>{fullName}</h3>
      </div>
    );
  }
}
