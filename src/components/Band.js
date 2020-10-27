import React, { Component } from 'react';

export default class Band extends Component {
  constructor() {
    super();
    this.state = {
      bandName: 'Rush',
      bandMembers: [
        {
          id: 1,
          name: 'joao',
          instrumento: 'bateria',
        },
        {
          id: 2,
          name: 'pedro',
          instrumento: 'violao',
        },
      ],
    };
  }
  render() {
    const { bandName, bandMembers } = this.state;
    return (
      <div>
        <h4>{bandName}</h4>
        {bandMembers.map(({ id, name, instrumento }) => {
          return (
            <ul key={id}>
              <li>{name}</li>
              <li>{instrumento}</li>
            </ul>
          );
        })}
      </div>
    );
  }
}
