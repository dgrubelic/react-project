import React from 'react'
import classes from 'classnames';
import Task from './task'

export default class TasksList extends React.Component {
  render() {
    return (
      <div className="tasks-list">
        {this.props.tasks.map(task => {
          const taskClasses = classes({ 'task--selected': (task.id === 3) })
          return (
            <Task task={task} key={task.id} className={taskClasses} />
          );
        })}
      </div>
    );
  }
}
