import { Component } from 'react';
import './App.css';
import Header from './Header'
import Button from './Button';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Header />
        <Button />
      </div>
    )
  }
}

export default App;
