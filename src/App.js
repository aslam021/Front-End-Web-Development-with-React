import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

import './App.css';

const store = ConfigureStore();

class App extends Component {

  render() {
    return (
      //by wraping this with provider component we allow all the componets in the application to use the redux store
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
