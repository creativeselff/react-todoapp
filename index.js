import React, { Component } from 'react';
import { render } from 'react-dom';
import Main from './Components/Main';
import Todos from './Components/Todos';
import Navbar from './Components/Navbar';
import AddTodo from './Components/AddTodo';
import './style.css';

class App extends Component {



  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
