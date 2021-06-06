import React from 'react';

export default class TableWorker extends React.PureComponent {
  state = {
    message: ''
  }

  handleClick(message) {
    this.setState({ message });
    this.props.onWorkersClick(message);
  }

  render() {
    const { message } = this.state;
    if (message) { return <p>{message}</p> }
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Имя сотрудника</th>
              <th>Возраст</th>
            </tr>
          </thead>
          <tbody>
            {this.props.workers.map((worker, index) => (
              <tr key={Worker.name + index} >
                <td  >
                  {worker.name}
                </td>
                <td>
                  {worker.age}
                  <button onClick={() => { this.handleClick(worker.name) }}>...</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    )
  }
}
