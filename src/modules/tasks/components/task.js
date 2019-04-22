import React from 'react'
import classes from 'classnames';
import { Checkbox } from 'modules/ui';

export default class Task extends React.Component {
  toggleCompleted = () => {

  }

  render() {
    const { className, task } = this.props;
    const taskClasses = classes(className, 'task', {
      'task--completed': task.completed,
    });

    return (
      <div className={taskClasses}>
        <span className="task__state">
          <Checkbox checked={task.completed} onChange={this.toggleCompleted} />
        </span>
        <div className="task__title">{task.title}</div>
      </div>
    );
  }
}
