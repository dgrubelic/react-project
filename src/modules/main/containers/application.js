import React from 'react'
import { StoreProvider, createStore } from 'modules/redux';
import { Tasks } from 'modules/tasks';
import ApplicationHotkeys from './application-hotkeys';
import storeConfig from '../services/store';
import '../styles/main.scss';

export default class Application extends React.Component {

  componentWillMount() {
    this.store = createStore(storeConfig);
  }

  render() {
    return (
      <StoreProvider store={this.store}>
        <div className="application">
          <ApplicationHotkeys>
            <div className="index-page page-container">
              <div className="content-container">
                <Tasks />
              </div>
            </div>
          </ApplicationHotkeys>
        </div>
      </StoreProvider>
    );
  }
}
