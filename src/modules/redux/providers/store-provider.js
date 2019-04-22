import React from 'react'
import { Provider } from 'react-redux';

export default class StoreProvider extends React.Component {
  render() {
    if (!this.props.store) {
      throw new Error('Redux store must be initialized before store provider render');
    }

    return (
      <Provider store={this.props.store}>
        {this.props.children}
      </Provider>
    );
  }
}