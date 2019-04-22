import React from 'react'
import '../styles/commander.scss';

export default class Commander extends React.Component {
  render() {
    return (
      <div className="commander modal">
        {/* <div className="commander__header">Create new task</div> */}
        <input type="text" className="commander__input" placeholder="Type command or search..." autoFocus />
        <ul className="commander__commands">
          <li className="commander__command">Assign to</li>
          <li className="commander__command commander__command--selected">Add label</li>
          <li className="commander__command">Set date</li>
          <li className="commander__command">Set priority</li>
        </ul>
      </div>
    );
  }
}