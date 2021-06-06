import React from 'react';
import './App.css';
import { workers } from './components/const';
import TableWorker from './components/TableWorker';

const names = ['Yan', 'Anastasia', 'Artem'];
const Welcome = () => <h1>Hello{names.map((n, index) => (', ' + n))}!</h1>;

export default class App extends React.PureComponent {

  state = {
    message: '',
    workers: workers
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({ workers: json }))
  }

  handleClick(message) {
    this.setState({ message })
  }

  render() {
    return (
      <div className="App">
        <Welcome />
        {this.state.message && "Мы подняли состояние в родительский компонент. Ура!"}
        <TableWorker workers={this.state.workers} onWorkersClick={(message) => { this.handleClick(message) }} />
      </div>
    );
  }
}
