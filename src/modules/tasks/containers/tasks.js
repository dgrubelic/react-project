import React from 'react'
import { connect } from 'modules/redux';
import TasksList from '../components/tasks-list';
import { fetchTasks, getTasks, getCompletedTasks, getPendingTasks } from '../redux';
import '../styles/tasks.scss';

export class Tasks extends React.Component {
  componentDidMount() {
    this.props.fetchTasks();
  }

  render() {
    return (
      <div className="tasks">
        <div className="tasks__heading">Today</div>
        <TasksList tasks={this.props.pendingTasks} />

        <div className="tasks__heading">Past tasks</div>
        <TasksList tasks={this.props.completedTasks} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tasks: getTasks(state),
  completedTasks: getCompletedTasks(state),
  pendingTasks: getPendingTasks(state),
});

const mapDispatchToProps = dispatch => ({
  fetchTasks: () => dispatch(fetchTasks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
