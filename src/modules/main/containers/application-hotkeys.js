import React from 'react'
import hotkeys from 'hotkeys-js';
import Commander from '../components/commander';
import Sidebar from '../components/sidebar';

export default class ApplicationHotkeys extends React.Component {
  state = {
    isCommanderOpen: false,
    isSidebarOpen: true,
  };

  keyMap = {
    'escape': 'hideCommander',
    'command+k': 'toggleCommander',
    'command+i': 'toggleCommander',
    'command+b': 'toggleSidebar',
  };

  handlers = {
    hideCommander: () => this.hideCommander(),
    toggleCommander: () => this.toggleCommander(),
    toggleSidebar: () => this.toggleSidebar(),
  };

  componentDidMount() {
    // Create backup reference for hotkeys.filter function
    this._originalHotkeysFilter = hotkeys.filter;

    /**
     * By default `hotkeys.filter` will filter all inputs, 
     * textareas and select menus when listening for keyboayd events
     */
    hotkeys.filter = function (event) {
      return true;
    }

    const hotkeyMap = Object.keys(this.keyMap).join(',');
    hotkeys(hotkeyMap, (e, handler) => {
      e.preventDefault();
      this.dispatchCommands(handler);
    });
  }

  componentWillUnmount() {
    const hotkeyMap = Object.keys(this.keyMap).join(',');
    hotkeys.unbind(hotkeyMap);

    // Restore original hotkys filter
    hotkeys.filter = this._originalHotkeysFilter;
  }

  dispatchCommands(handler) {
    console.log(handler);
    const handlerName = this.keyMap[handler.key];
    if (handlerName) {
      const commandHandler = this.handlers[handlerName];
      commandHandler && commandHandler();
    }
  }

  hideCommander = () => {
    this.setState({ isCommanderOpen: false });
  }

  toggleCommander = () => {
    this.setState({
      isCommanderOpen: !this.state.isCommanderOpen,
    });
  }

  toggleSidebar = () => {
    this.setState({
      isSidebarOpen: !this.state.isSidebarOpen,
    });
  };

  render() {
    const { isCommanderOpen, isSidebarOpen } = this.state;
    const { children } = this.props;

    return (
      <div className="application-hotkeys">
        {isSidebarOpen && (
          <Sidebar />
        )}

        {children}

        {isCommanderOpen && (
          <Commander />
        )}
      </div>
    );
  }
}
