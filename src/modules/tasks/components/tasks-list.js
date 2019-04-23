import React from 'react'
import Task from './task'

export default class TasksList extends React.Component {
  render() {
    return (
      <div className="tasks-list">
        {this.props.tasks.map(task => {
          return (
            <Task task={task} key={task.id} />
          );
        })}
      </div>
    );
  }
}
