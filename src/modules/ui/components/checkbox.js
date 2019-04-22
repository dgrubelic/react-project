import React from 'react'
// import classes from 'classnames';

export default class Checkbox extends React.Component {
  render() {
    return (
      <label className="checkbox">
        <input className="checkbox__input" type="checkbox"
          checked={this.props.checked} onChange={this.props.onChange} />
        <span className="checkbox__mask"></span>
      </label>
    );
  }
}