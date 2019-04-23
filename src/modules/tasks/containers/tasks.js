import React from 'react'
import { connect } from 'modules/redux';
import TasksList from '../components/tasks-list';
import { fetchTasks, getTasks, getCompletedTasks, getPendingTasks } from '../redux';
import '../styles/tasks.scss';

export class Tasks extends React.Component {
  componentDidMount() {
    this.props.fetchTasks({ _sort: 'created', _order: 'desc' });
  }

  render() {
    return (
      <div className="tasks">
        <div className="tasks__heading">Today</div>
        <TasksList tasks={this.props.pendingTasks} />

        <div className="tasks__heading list-filters">
          <span className="list-filters__filter list-filters__filter--selected">Yesterday</span>
          <span className="list-filters__filter">Last 3 days</span>
          <span className="list-filters__filter">Last 7 days</span>
        </div>
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
  fetchTasks: params => dispatch(fetchTasks(params)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
